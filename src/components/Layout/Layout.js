import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.scss'

function Layout() {
  return (
        <div className="page">
          <span className="tags top-html">&lt;/html&gt;</span>
          <span className="tags top-tags">&lt;body&gt;</span>

          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
      </div>
  )
}

export default Layout
