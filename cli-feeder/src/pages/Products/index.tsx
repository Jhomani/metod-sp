import React from 'react'

import './products.scss';
import { Button } from 'components'

export const Products = () => {

  return <div className='products'>
    <div className="wrapper">
      <h3>Pollo a la Broaster</h3>
      <img src="static\products\PolloBroaster.jpg" alt="product" />
      <p>1 porción arroz (graneado), 1 porción de fideo, 1 porción papa (Frita), 1 presa de pollo (Broaster)</p>
      <Button type="primary">Mas info...</Button>
    </div>

    <div className="wrapper">
      <h3>Pollo al Spiedo</h3>
      <img src="static\products\PolloSpiedo.jpg" alt="product" />
      <p>1 porción arroz (graneado), 1 porción de fideo, 1 porción papa (Frita), 1 presa de pollo (Espiedo)</p>
      <Button type="primary">Mas info...</Button>
    </div>

    <div className="wrapper">
      <h3>Silpancho</h3>
      <img src="static/products/silpancho.jpg" alt="product" />
      <p>1 porción arroz (graneado), 1 porción papa (Frita), 1 huevo, 1 carne (apanada), 1 porción Ensalada (Cebolla, Locoto, Tomate, Zanahoria).</p>
      <Button type="primary">Mas info...</Button>
    </div>

  </div>
}