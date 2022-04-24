import React, { useEffect, useMemo, useState } from 'react'
import LinkStatus from '../api/LinkStatus'
import c from '../scripts/Chrome'
import dataDebugger from '../scripts/data-debugger'
import { gatherHrefs } from '../scripts/execute-scripts'
import Link from '../scripts/Link'
import { default as LinksHandler } from '../scripts/LinksHandler'
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
        const { links } = new LinksHandler(
          (await c.executeScript<string[]>(id, gatherHrefs))
            .map((link) => new Link(link))
            .filter((link) => link.isHttp)
        )

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

        /**
         * A completely failed attempt returns an empty Array.
         */
        if (result.length < 1)
          return setData((prevData) => ({ ...prevData, loading: false }))

        const links = data.links.map((link) => {
          link.status =
            result.find(({ originUrl }) => originUrl === link.href) ??
            new LinkStatus(link.href)
          return link
        })

        if (process.env.NODE_ENV === 'development') {
          dataDebugger(links)
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
