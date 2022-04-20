import React, { useEffect, useMemo, useState } from 'react'
import LinkStatus from '../api/LinkStatus'
import c from '../scripts/Chrome'
import { gatherHrefs } from '../scripts/execute-scripts'
import lp from '../scripts/LinkProcessor'
import { Children, LinkData } from '../types'

interface DataContextProps {
  data: LinkData
  setData: React.Dispatch<React.SetStateAction<LinkData>>
}

const DataContext = React.createContext({} as DataContextProps)

export const DataProvider = ({ children }: Children) => {
  const [data, setData] = useState<LinkData>({
    links: [],
    loading: true,
  })

  const dataMemo = useMemo(
    () => ({
      data,
      setData,
    }),
    [data]
  )

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await c.getActiveTab()

      if (id) {
        const links = (await c.executeScript<string[]>(id, gatherHrefs))
          .map(lp.createLink)
          .filter(lp.filterHttp)
          .filter(lp.filterKeyString)
          .sort(lp.sortByHrefLength)

        links.length > 0
          ? setData({ links, loading: true })
          : setData({ links: [], loading: false })
      }
    }

    fetchData().catch(console.error)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (data.links.length > 0) {
        const result = await c.fetchLinks(data.links)

        const links = data.links.map((link) => {
          link.status =
            result.find((status) => status.originUrl === link.href) ??
            new LinkStatus(link.href)

          return link
        })

        if ('isDevEnv') {
          const notOk = lp.filterNotOk(links)
          const notOkQty = Object.keys(notOk).length
          const invalid = lp.filterValidResponses(links)
          const invalidQty = Object.keys(invalid).length
          const resultQty = Object.keys(result).length

          console.log('After Status Fetch -> ', result, resultQty)
          console.log('Not ok -> ', notOk, notOkQty)
          console.log('Empty link status -> ', invalid, invalidQty)
          console.log('Links -> ', links)
        }

        setData({ links, loading: false })
      }
    }

    fetchData().catch(console.error)
  }, [data.links.length])

  return (
    <DataContext.Provider value={dataMemo}>{children}</DataContext.Provider>
  )
}

export const useData = () => React.useContext(DataContext)
