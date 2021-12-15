import React, { useReducer, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import './styles.scss';

interface InButton {
  shadow?: 'primary' | 'normal';
  icon?: JSX.Element;
  shape?: 'round';
  to?: string;
  align?: 'flex-bottom';
  type: 'primary' | 'secondary' | 'transparent' | 'gradient';
  children?: JSX.Element | string;
  content?: JSX.Element | string;
  onClick?: Function;
  inBlank?: string;
  className?: string;
}

export const Button = (props: InButton) => {
  const btn = useRef(null);
  const router = useNavigate();
  const {
    children, content,
    type, icon,
    shape = '',
    align = '',
    onClick, inBlank,
    to, className = ''
  } = props;

  // https://api.whatsapp.com/send?phone=59172289152&text=Hola!%20estoy%20interesado%20en%20tus%20servicios.

  const handleClick = () => {
    const node: any = btn.current;
    const openOutRef = inBlank && node.getAttribute('href');

    node.classList.add('onpressed');
    setTimeout(() => node.classList.remove('onpressed'), 350)

    if (onClick) onClick();
    if (openOutRef) {
      node.setAttribute('href', inBlank);
      node.setAttribute('target', '_blank');
    } else if (to) {
      router(to);
    }
  }

  return <>
    <a
      onClick={handleClick}
      ref={btn}
      className={
        `btn-${type} ${shape} ${align} ${className}`
      }
    >
      {icon}

      {children || content &&
        <span>
          {content ?? children}
        </span>
      }
    </a>
  </>;
}