import React from 'react'
import chrome from '../scripts/Chrome'
import { gatherHrefs } from '../scripts/execute-scripts'
import lp from '../scripts/LinkProcessor'
import { LinkData } from '../types'

interface DataContextProps {
  data: LinkData
  setData: React.Dispatch<React.SetStateAction<LinkData>>
}

const DataContext = React.createContext({} as DataContextProps)

const linkData: LinkData = {
  links: [],
  categorizedLinks: {},
  fragmentLinks: {},
}

export const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState(linkData)

  const dataMemo = React.useMemo(
    () => ({
      data,
      setData,
    }),
    [data],
  )

  React.useEffect(() => {
    (async () => {
      const { id } = await chrome.getActiveTab()

      if (id) {
        const links = (await chrome.executeScript<string[]>(id, gatherHrefs))
          .map(lp.createLinks)
          .filter(lp.filterHttp)
          .filter(lp.filterKeyString)
          .sort(lp.sortByHrefLength)

        const categorizedLinks = lp.categorizeByDomain(links)
        const fragmentLinks = lp.categorizeByDomain(
          links.filter(lp.filterOnlyFragments),
        )

        setData({ links, categorizedLinks, fragmentLinks })
      }
    })()
  }, [])

  console.log(data)

  return (
    <DataContext.Provider value={dataMemo}>{children}</DataContext.Provider>
  )
}

export const useData = () => React.useContext(DataContext)
