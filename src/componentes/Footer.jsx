import React from 'react'

export default function Footer(){
  return(
    <>
      <div className="fot-cont">
        <div className="esquerda-fot">
          <h2>Links:</h2>
          <div>
            <a href="#pratos">Pratos</a>
          </div>
          <div>
            <a href="#sobremesas">Sobremesas</a>
          </div>
          <div>
            <a href="#lanches">Lanches</a>
          </div>
          <div>
            <a href="#delivery">Delivery</a>
          </div>
          <div>
            <a href="#onde">Onde Estamos?</a>
          </div>
        </div>

        <div className="direita-fot">
          <h2>Outros:</h2>
          <div className="icosap">
            <button title="Nosso Whatsapp">
              <i class="fa fa-whatsapp fa-2x"></i>
            </button>
          </div>
          <div className="icoinsta">
            <button title="Nosso Instagram">
              <i class="fa fa-instagram fa-2x"></i>
            </button>
          </div>
          <div className="icogit">
            <button title="Criador do Site">
              <i class="fa fa-github fa-2x"></i>
            </button>
          </div>
          
        </div>

        <div className="linha-fot"></div>

      </div>
    </>
  )
}