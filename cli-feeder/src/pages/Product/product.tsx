import React, { useEffect, useState } from 'react'

import './product.scss';
import { Button } from 'components';
import request, { getOptionsWithoutToken } from 'utils/request';
import { useParams } from "react-router-dom";


const camp = ["1 porción arroz (graneado)", " 1 porción papa (Frita)", " 1 huevo", " 1 carne (apanada)", " 1 porción Ensalada (Cebolla, Locoto, Tomate, Zanahoria)"]

export const Product = () => {
  const [platillos, setPlatillos] = useState([]);
  const params = useParams();


  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {

    const options = getOptionsWithoutToken();

    const idsMap: { [a: string]: number } = {
      'sillpancho': 1,
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

    console.log(result)

    setPlatillos(result)
  }

  return <div className='product'>
    <div className="wrapper">
      <div className="column">
        <h3>This is Title</h3>
        <img
          src={`http://localhost:5000/static/products/silpancho.jpg`} alt="product" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, natus optio unde tempora et mollitia ratione reiciendis consequatur voluptas at ea saepe fugiat ut nobis necessitatibus, debitis ipsum iste quisquam.</p>

      </div>
      <div className="column">
        <h6>Compuesto</h6>
        <ul className='compose'>
          {camp.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <Button type="primary">Hacer Perdido</Button>
      </div>
    </div>
  </div>
}