import React from "react";

import { Recorder } from 'components';

import './layout.scss';

interface InLayout {
  children: JSX.Element | string;
}

const Layout = ({ children }: InLayout) => {
  return <>
    <nav style={{ height: 60 }}>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul> */}
    </nav>

    <div className="content">{children}</div>

    <Recorder />
    {/* <div className="footer">this is footer</div> */}
  </>
}

export default Layout;