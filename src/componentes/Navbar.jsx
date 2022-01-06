import React,{useState} from 'react'
import Logo from '../imgs/logo-cherimoia.png'

export default function Navbar(){
  
  const [navBurguer,setNav]=useState(false)
  const mostraHamburguer = (n)=>{
    if(n == true){
      setNav(n)
      document.querySelector('#pratosnav').style.display = 'flex'
      document.querySelector('#sobremesasnav').style.display = 'flex'
      document.querySelector('#lanchesnav').style.display = 'flex'
      document.querySelector('#deliverynav').style.display = 'flex'
      document.querySelector('#ondenav').style.display = 'flex'
      // gira icone
      document.querySelector('#icoburg').style.transform = 'rotate(180deg)';
    }else{
      setNav(n)
      document.querySelector('#pratosnav').style.display = 'none'
      document.querySelector('#sobremesasnav').style.display = 'none'
      document.querySelector('#lanchesnav').style.display = 'none'
      document.querySelector('#deliverynav').style.display = 'none'
      document.querySelector('#ondenav').style.display = 'none'
      // gira icone
      document.querySelector('#icoburg').style.transform = 'rotate(0deg)';
    }
  }

  return(
    <section id="home">
      <nav className="navbar-cont">
      <div className='nav-items'>

        <a href="#home">
        <div className="nav-item homenav">
          <img src={Logo}/>
        </div>
        </a>

          <a href="#pratos">
          <div className="nav-item" id="pratosnav">Pratos</div>
          </a>
          <a href="#sobremesas">
          <div className="nav-item" id="sobremesasnav">Sobremesas</div>
          </a>
          <a href="#lanches">
          <div className="nav-item" id="lanchesnav">Lanches</div>
          </a>
          <a href="#delivery">
          <div className="nav-item" id="deliverynav">Delivery</div>
          </a>
          <a href="#onde">
          <div className="nav-item" id="ondenav">Onde Estamos?</div>
          </a>

        <div className="nav-burguer" onClick={()=>mostraHamburguer(!navBurguer)}>
          <i className="material-icons" id="icoburg">
            menu
          </i>
        </div>


      </div>
      </nav>
    </section>
  )
}