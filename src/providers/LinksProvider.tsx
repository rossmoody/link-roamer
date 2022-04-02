import React from 'react'
import Link from '../scripts/Link'
import chrome from '../scripts/Chrome'
import { gatherHrefs } from '../scripts/execute-scripts'
import lp from '../scripts/LinkProcessor'

interface LinkContextProps {
  links: Link[]
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>
}

const LinkContext = React.createContext({} as LinkContextProps)

export const LinksProvider: React.FC = ({ children }) => {
  const [links, setLinks] = React.useState<LinkContextProps['links']>([])

  const linksMemo = React.useMemo(
    () => ({
      links,
      setLinks,
    }),
    [links],
  )

  React.useEffect(() => {
    (async () => {
      const { id } = await chrome.getActiveTab()

      if (id) {
        const links = (await chrome.executeScript<string[]>(id, gatherHrefs))
          .map(lp.createLinks)
          .filter(lp.filterAllExceptHttp)
          .filter(lp.filterKeyString)
          .sort(lp.sortByHrefLength)

        setLinks(links)
      }
    })()
  }, [])

  return (
    <LinkContext.Provider value={linksMemo}>{children}</LinkContext.Provider>
  )
}

export const useLinks = () => React.useContext(LinkContext)
