import React from 'react'
import GifBurguer from '../../imgs/gif-burguer.gif'

export default function Sobre(){
  return(
    <>
      <div className="sobre-cont">
        <div className="sobre-img">
          <img src={GifBurguer} alt="sobre"/>
        </div>
        <div className="sobre-text">
          <h2>Sobre o Cherimoia</h2>
          <p>O Cherimoia nasceu da ideia do chefe zapironga falapatorios madruguicus e tem sido um dos melhores, atraves do chefe jaripongas falapatorios ele conseguiu este imperio.</p>
        </div>
      </div>
    </>
  )
}