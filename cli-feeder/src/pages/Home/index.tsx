import React from 'react';

import './home.scss';

import { Button } from 'components/Button'

export const Home = () => {
  return (
    <div className="landing">
      <div className='bg-landing'>
        <img className='bg-left' src="illustration-l.svg" alt="" />
        <div className='bg-sep'></div>
        <img className='bg-right' src="illustration-r.svg" alt="" />
      </div>
      <div className='landing-content'>
        <h3 style={{ fontWeight: 500 }}>
          Recibe tu comida sin necesidad de salir
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quas quae enim exercitationem eius nihil itaque, ea vel minus mollitia, officia perspiciatis beatae ullam? Tenetur provident nostrum illum ducimus quos.</p>
        <div className='actions'>
          <Button type='secondary' to='/products'>
            Buscar Comida
          </Button>
          <Button type='primary' to='/informe'>
            Informe Ventas
          </Button>
        </div>
      </div>
    </div>
  );
}