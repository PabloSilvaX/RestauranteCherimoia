import React from 'react'
import Entregador from '../../imgs/entregador-delivery.jpg'

export default function Delivery(){
  
  return(
    <section id="delivery">
      <div className="deliveryCont">
        <div className="deliveryCard">
          <div className="deliveryImage">
            <img src={Entregador} 
            alt="delivery Cherimoia"/>
          </div>
          <div className="deliveryText">
            <div className="deliveryTitulo">
              <h2>Nosso Delivery </h2>
            </div>
            <div className="deliveryDesc">
              <p>Nossos entregadores estão sempre pronto a atender você e levar para sua residencia nossos preciosos quitutes, levando o melhor do cherimoia até voce e seus compadres de batalha.</p>
            </div>
            <div className="deliveryButtons">
              <i className="material-icons">phone</i>
              <span> Telefone: 4002-8922</span>
              <br/>
              <i className="material-icons">whatsapp</i>
              <span> Whatsapp: (11)9164-8931</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}