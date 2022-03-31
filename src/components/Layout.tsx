import React from 'react'
import { Link } from '../scripts'

type Props = {
  data: Link[]
}

const Layout: React.FC<Props> = ({ data }) => (
  <div className="layout">
    {
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.host}</li>
        ))}
      </ul>
    }
  </div>
)

export default Layout
