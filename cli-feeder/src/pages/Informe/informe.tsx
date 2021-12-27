import React, { useEffect, useState } from 'react'

import './informe.scss';

export const Informe = () => {
  return <div className='inform'>
    <h3 className='g-mb-5'>Informe de Ventas</h3>
    <div className="wrapper">

      <a
        href="http://localhost:5000/api/statistic"
        download={true}
        target="_blank"
      >Descargar Informe</a>
    </div>
  </div>
}