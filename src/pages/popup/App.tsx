import * as React from 'react'
import { executeScript, getActiveTab } from '../../scripts'
import { gatherHrefs } from '../../scripts/process-links'

const App = () => {
  const [data, setData] = React.useState([''])

  React.useEffect(() => {
    (async () => {
      const { id } = await getActiveTab()

      if (id) {
        const hrefs = await executeScript(id, gatherHrefs)
        setData(hrefs)
      }
    })()
  }, [])

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
