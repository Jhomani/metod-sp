import React, { useEffect, useState } from 'react'

import './products.scss';
import { Button } from 'components';
import request, { getOptionsWithoutToken } from 'utils/request';

export const Products = () => {
  const [platillos, setPlatillos] = useState([]);

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {

    const options = getOptionsWithoutToken();

    const result = await request(
      'http://localhost:5000/api/platillos',
      options
    );

    setPlatillos(result)
  }

  return <div className='products'>
    <h2 className='g-mb-3'>Nuestros Productos</h2>
    {
      platillos.map((item: any, i: number) => (
        <div key={i} className="wrapper">
          <h3>{item.name}</h3>
          <img src={`http://localhost:5000${item.fileLike}`} alt="product" />
          <p>{item.description}</p>
          <Button
            type="primary"
            to={`/product/${item.name.toLowerCase().replace(' ', '-')}`}
          >
            Mas info...
          </Button>
        </div>
      ))
    }
  </div>
}