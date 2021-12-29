import React, { useEffect, useState } from 'react'
import request, { getOptionsWithoutToken } from 'utils/request';

import './informe.scss';

export const Informe = () => {
  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    const options = getOptionsWithoutToken();
    const result = await request(
      `http://localhost:5000/api/statistic`,
      options
    );

    console.log(result)
  }

  return <div className='inform'>
    <h3 className='g-mb-5'>Informe de Ventas</h3>
    <div className="wrapper">
      <a
        href="http://localhost:5000/static/static.csv"
        download={true}
        target="_blank"
      >Descargar Informe</a>
    </div>
  </div>
}