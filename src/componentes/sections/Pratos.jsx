import React,{useState} from 'react'

export default function Pratos(){
  
  const listPratos= [
    {'id':0,'nome':'Bife a Parmejiana','preco':59.90,
    'imagem':'http://www.bellaparmegiana.com.br/public/chamadas/promocao_quarta.png?1418746901'},
    {'id':2,'nome':'Moqueca Mista','preco':45.00,
    'imagem':'https://www.bardapraiaboicucanga.com.br/wp-content/uploads/2021/11/Moqueca-Mista.png'},
    {'id':3,'nome':'Omelete do Chef','preco':23.50,
    'imagem':'https://dokv5xqfpqc49.cloudfront.net/Custom/Content/Themes/naturovos/landing-pages/clara-em-po/img/prato1.png'},
    {'id':6,'nome':'Canelone','preco':25.80,
    'imagem':'https://swiftbr.vteximg.com.br/arquivos/categoria-prontosparacomer.png?v=637611959372370000'},
    {'id':0,'nome':'Bife a Parmejiana','preco':59.90,
    'imagem':'http://www.bellaparmegiana.com.br/public/chamadas/promocao_quarta.png?1418746901'},
    {'id':2,'nome':'Moqueca Mista','preco':45.00,
    'imagem':'https://www.bardapraiaboicucanga.com.br/wp-content/uploads/2021/11/Moqueca-Mista.png'},
    {'id':3,'nome':'Omelete do Chef','preco':23.50,
    'imagem':'https://dokv5xqfpqc49.cloudfront.net/Custom/Content/Themes/naturovos/landing-pages/clara-em-po/img/prato1.png'},
    {'id':6,'nome':'Canelone','preco':25.80,
    'imagem':'https://swiftbr.vteximg.com.br/arquivos/categoria-prontosparacomer.png?v=637611959372370000'},
    {'id':2,'nome':'Moqueca Mista','preco':45.00,
    'imagem':'https://www.bardapraiaboicucanga.com.br/wp-content/uploads/2021/11/Moqueca-Mista.png'},
    {'id':3,'nome':'Omelete do Chef','preco':23.50,
    'imagem':'https://dokv5xqfpqc49.cloudfront.net/Custom/Content/Themes/naturovos/landing-pages/clara-em-po/img/prato1.png'},
    {'id':6,'nome':'Canelone','preco':25.80,
    'imagem':'https://swiftbr.vteximg.com.br/arquivos/categoria-prontosparacomer.png?v=637611959372370000'}
    ]
    

    const pratosHtml = listPratos.map((e)=>{
      return `<div className="prato-item">
        <img src="${e.imagem}" height="100px"/>
        <h4 title="${e.nome}">${e.nome}</h4>
        <p>R$:
        ${e.preco.toLocaleString('pt-br', {minimumFractionDigits: 2})}
        </p>
      </div>`;
      
    }).join('')
    // o join() acima serve para a junção do map, removendo assim a virgula automatica
    
    const [scrollx, setScrollX]=useState(0);
    
    const handleLeft = ()=>{
      // o math esta pegando o valor da metade do monitor
      let x = scrollx + Math.round(window.innerWidth / 2);
      if(x > 0){
        x = 0;
      }
      setScrollX(x)
    }
    const handleRight = ()=>{
      let x = scrollx - Math.round(window.innerWidth / 2);
      
      let listW = listPratos.length * 162;
      if(window.innerWidth - listW > x){
        x = (window.innerWidth - listW) - 20;
      }

      setScrollX(x)
    }


  return(
    <section id="pratos">
      <div className="pratos-cont" style={{borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}}>

        <div className="pratos-text">
          <h2>Pratos</h2>
          <p>Alguns de Nosso Maravilhosos Pratos.</p>
        </div>

        <div className="pratos-lista">
        <div className="pratos-navl" onClick={()=>handleLeft()}>
          <span className="material-icons">
            chevron_left
          </span>
        </div>
        <div className="pratos-navr" onClick={()=>handleRight()}>
          <span className="material-icons">
            chevron_right
          </span>
        </div>
        <div className="pratos-items" 
        style={{marginLeft:scrollx,
        width: listPratos.length * 162}}
        // transforma o texto em html
        dangerouslySetInnerHTML={{__html: pratosHtml}}>
        </div>
      </div>
        
      </div>
    </section>
  )

}