import React from "react";

import { Link } from "react-router-dom";

interface InLayout {
  children: JSX.Element | string;
}

const Layout = ({ children }: InLayout) => {

  return <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
    <div className="content">{children}</div>
    <div className="footer">this is footer</div>
  </>
}

export default Layout;