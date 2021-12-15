import React from "react";

import { Link } from "react-router-dom";

import { Button, Modal } from 'components';
import { Microphone } from 'icons'

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
    <Button
      type="primary"
      shape="round"
      className="fixed-bottom"
      icon={<Microphone size="1.8rem" />}
    />
    <Modal />

    <div className="content">{children}</div>
    <div className="footer">this is footer</div>
  </>
}

export default Layout;