import React, { useEffect, useMemo, useState } from 'react'
import c from '../scripts/Chrome'
import { gatherHrefs } from '../scripts/execute-scripts'
import lp from '../scripts/LinkProcessor'
import Link from '../scripts/Link'

interface DataContextProps {
  data: Link[]
  setData: React.Dispatch<React.SetStateAction<Link[]>>
}

const DataContext = React.createContext({} as DataContextProps)

export const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Link[]>([])

  const dataMemo = useMemo(
    () => ({
      data,
      setData,
    }),
    [data],
  )

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await c.getActiveTab()

      if (id) {
        const links = (await c.executeScript<string[]>(id, gatherHrefs))
          .map(lp.createLinks)
          .filter(lp.filterHttp)
          .filter(lp.filterKeyString)
          .sort(lp.sortByHrefLength)

        setData(links)
      }
    }

    fetchData().catch(console.error)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (data.length > 0) {
        const result = await c.fetchLinks(data)

        const links = data.map((link) => {
          const status = result.find(({ url }) => url === link.href)
          if (status) link.status = status
          return link
        })

        setData(links)
      }
    }

    fetchData().catch(console.error)
  }, [data.length])

  return (
    <DataContext.Provider value={dataMemo}>{children}</DataContext.Provider>
  )
}

export const useData = () => React.useContext(DataContext)
