import React, { useEffect, MouseEvent, useRef } from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';

interface InModal {
  show: boolean;
  shape?: 'round';
  to?: string;
  align?: 'flex-bottom';
  children?: JSX.Element | string;
  content?: JSX.Element | string;
  onClick?: Function;
  inBlank?: string;
  className?: string;
  onClose: Function;
}

export const Modal = (props: InModal) => {
  let resp = <></>;
  const {
    children, content,
    show = false,
    onClose,
    align = '',
    onClick, inBlank,
    to, className = ''
  } = props;

  const modalCover = useRef(null);

  const handleOutbox = (ev: MouseEvent) => {
    const coverNode = modalCover.current;
    if (coverNode && ev.target === coverNode) onClose()
  }

  if (show) resp = (
    <div
      ref={modalCover}
      className='modal'
      onClick={handleOutbox}
    >
      <div className='modal-box' >
        {children}
      </div>
    </ div>
  )

  return resp;
}