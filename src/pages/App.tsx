import * as React from 'react'
import * as s from '../scripts'
import { Link } from '../scripts'
import Layout from '../components/Layout'
import LinkList from '../components/LinkList'

const App = () => {
  const [links, setLinks] = React.useState<Link[]>([])
  console.log(links)

  React.useEffect(() => {
    (async () => {
      const { id } = await s.getActiveTab()

      if (id) {
        const links = (await s.executeScript(id, s.gatherHrefs))
          .map(s.createLinks)
          .filter(s.filterFalse)
          .filter(s.filterAllExceptHttp)

        setLinks(links)
      }
    })()
  }, [])

  return (
    <Layout>
      <LinkList links={links} />
    </Layout>
  )
}

export default App
