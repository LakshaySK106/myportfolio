import { Outlet } from 'react-router-dom'
import './Layout.scss'

function Layout() {
  return (
        <div className="page">
          <Outlet />
      </div>
  )
}

export default Layout
