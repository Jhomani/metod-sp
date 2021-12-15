import React, { useReducer, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';

import './modal.scss';

interface InModal {
  shadow?: 'primary' | 'normal';
  icon?: JSX.Element;
  show?: boolean;
  shape?: 'round';
  to?: string;
  align?: 'flex-bottom';
  children?: JSX.Element | string;
  content?: JSX.Element | string;
  onClick?: Function;
  inBlank?: string;
  className?: string;
}

export const Modal = (props: InModal) => {
  const router = useNavigate();
  const {
    children, content,
    show = false,
    icon,
    shape = '',
    align = '',
    onClick, inBlank,
    to, className = ''
  } = props;

  const Modal = <div
    className='modal-content'
  >
    {children}
  </div>;

  useEffect(() => {
    ReactDOM.render(Modal, document.getElementById('modal'))
  }, [show])

  return <></>
}