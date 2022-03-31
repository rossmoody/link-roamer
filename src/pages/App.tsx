import * as React from 'react'
import * as s from '../scripts'
import { Link } from '../scripts'
import Layout from '../components/Layout'

const App = () => {
  const [data, setData] = React.useState<Link[]>([])
  console.log(data)

  React.useEffect(() => {
    (async () => {
      const { id } = await s.getActiveTab()

      if (id) {
        const links = (await s.executeScript(id, s.gatherHrefs))
          .map(s.createLinks)
          .filter(s.filterFalse)
          .filter(s.filterAllExceptHttp)
        
        setData(links)
      }
    })()
  }, [])

  return <Layout data={data} />
}

export default App
