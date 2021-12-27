import React, { useEffect, useState } from 'react'

import './product.scss';
import { Button } from 'components';
import request, { getOptionsWithoutToken } from 'utils/request';
import { useParams } from "react-router-dom";


const camp = ["1 porción arroz (graneado)", " 1 porción papa (Frita)", " 1 huevo", " 1 carne (apanada)", " 1 porción Ensalada (Cebolla, Locoto, Tomate, Zanahoria)"]

export const Product = () => {
  const [platillo, setPlatillo] = useState({
    description: '',
    price: 0,
    name: '',
    id: 0,
    fileLike: ''
  });
  const [compose, setCompose] = useState([]);
  const params = useParams();


  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {

    const options = getOptionsWithoutToken();

    const idsMap: { [a: string]: number } = {
      'silpancho': 1,
      'pollo-broaster': 2,
      'pollo-espiedo': 3,
      'chuleta': 4,
      'milanesa': 5,
    }
    const name: any = params.name;

    const result = await request(
      `http://localhost:5000/api/platillo/${idsMap[name]}`,
      options
    );

    setCompose(result.compound.split(':'));
    delete result.compound
    setPlatillo(result);
  }

  return <div className='product'>
    <div className="wrapper">
      <div className="column">
        <h3>{platillo.name}</h3>
        <img
          src={`http://localhost:5000${platillo.fileLike}`} alt="product" />
        <p>{platillo.description}</p>
      </div>
      <div className="column g-pl-5">
        <h6 className='g-my-3'>Compuesto por:</h6>
        <ul className='compose '>
          {compose.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h6 className='g-my-3'>Precio: Bs. {platillo.price}</h6>
        <Button type="primary" className='g-mt-5'>Hacer Perdido</Button>
      </div>
    </div>
  </div>
}