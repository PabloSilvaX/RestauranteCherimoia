import React,{useState} from 'react'
import Burguer from '../../imgs/localBurguer.png'
import Alfinete from '../../imgs/localAlfinete.png'

export default function Local(){
  
  const locais = ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.471714426174!2d-46.625514885021715!3d-23.58740978466994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bd0b434dc03%3A0x379c8c6f2c1200f2!2sR.%20Josimar%20Moreira%20de%20Melo%20-%20Jardim%20da%20Gloria%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004114-040!5e0!3m2!1spt-BR!2sbr!4v1640551511644!5m2!1spt-BR!2sbr','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.455613876986!2d-46.625589785386005!3d-23.480093364480457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef64f75681751%3A0x3ead94b8be00a279!2sR.%20P%C3%A9res%20J%C3%BAnior%20-%20Mandaqui%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002409-004!5e0!3m2!1spt-BR!2sbr!4v1640558969708!5m2!1spt-BR!2sbr','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.82437095532!2d-46.613322185382714!3d-23.61063086929794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b98c48d89f9%3A0x668e42320d9cccb!2sR.%20Guanabara%20-%20Vila%20Brasilio%20Machado%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2017205-102!5e0!3m2!1spt-BR!2sbr!4v1640559549456!5m2!1spt-BR!2sbr','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2923553557584!2d-46.69592348538403!3d-23.5579412673503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57bc94f3af67%3A0x9952478b2fe054e4!2sRua%20Zapara%20-%20Vila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005434-030!5e0!3m2!1spt-BR!2sbr!4v1640559662748!5m2!1spt-BR!2sbr'];

  const [localFrame,setLocalFrame]=useState(locais[0]);

  const alteraMapa = (n)=>{
    setLocalFrame(locais[n])
  }

  return(
    <section id="onde">
      <div className="local-cont">
        <div className="local-interno">  
          <div className="local-iframe">
              <iframe src={localFrame}></iframe>
            
          </div>
          <div className="local-texto">
            <div className="local-textcont">
              
              <h1>Onde estamos? (Clique nos Locais Abaixo)</h1>
              
              <div className="local-campo" onClick={()=>alteraMapa(0)}>
                <img src={localFrame == locais[0]?Alfinete:Burguer} />
                <span> Jardim da Gloria</span>
              </div>
              <div className="local-campo" onClick={()=>alteraMapa(1)}>
                <img src={localFrame == locais[1]?Alfinete:Burguer} />
                <span> Mandaqui</span>
              </div>
              <div className="local-campo" onClick={()=>alteraMapa(2)}>
                <img src={localFrame == locais[2]?Alfinete:Burguer} />
                <span> Vila Brasilio</span>
              </div>
              <div className="local-campo" onClick={()=>alteraMapa(3)}>
                <img src={localFrame == locais[3]?Alfinete:Burguer} />
                <span> Vila Madalena</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}