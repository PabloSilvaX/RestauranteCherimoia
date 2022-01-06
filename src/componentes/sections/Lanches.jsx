import React,{useState} from 'react'

export default function Lanches(){
  
  const listLanches= [
    {'id':1,'nome':'Salgados Árabes','preco':38.00,
    'imagem':'https://www.alsultan.com.br/wp-content/uploads/2018/12/pratos-combinados.png'},
    {'id':4,'nome':'Nachos Mexicanos','preco':22.00,
    'imagem':'https://www.tacosp.com.br/wp-content/uploads/2020/04/rodizio-mexicano.png'},
    {'id':5,'nome':'Acaraje','preco':19.90,
    'imagem':'https://pontodoacarajesp.com.br/wp-content/uploads/2021/06/acaraje.png'},
    {'id':6,'nome':'Canelone','preco':25.80,
    'imagem':'https://swiftbr.vteximg.com.br/arquivos/categoria-prontosparacomer.png?v=637611959372370000'},
    {'id':7,'nome':'Hanburguer de Carne','preco':20.00,
    'imagem':'https://amazonikamundi.com.br/wp-content/uploads/2020/10/AmazonikaBurger-AMZ-min-1024x785.png'},
    {'id':8,'nome':'Sanduiche Frango','preco':18.20,
    'imagem':'https://i.pinimg.com/originals/5b/cc/40/5bcc40ed48f73090c82cb0e441533543.png'},
    {'id':9,'nome':'Porção Batata','preco':30.45,
    'imagem':'https://apl.adventistas.org/saude/wp-content/uploads/sites/19/2013/10/sides-french-fries.png'},
    {'id':1,'nome':'Salgados Árabes','preco':38.00,
    'imagem':'https://www.alsultan.com.br/wp-content/uploads/2018/12/pratos-combinados.png'},
    {'id':4,'nome':'Nachos Mexicanos','preco':22.00,
    'imagem':'https://www.tacosp.com.br/wp-content/uploads/2020/04/rodizio-mexicano.png'},
    {'id':5,'nome':'Acaraje','preco':19.90,
    'imagem':'https://pontodoacarajesp.com.br/wp-content/uploads/2021/06/acaraje.png'},
    {'id':6,'nome':'Canelone','preco':25.80,
    'imagem':'https://swiftbr.vteximg.com.br/arquivos/categoria-prontosparacomer.png?v=637611959372370000'},
    {'id':7,'nome':'Hanburguer de Carne','preco':20.00,
    'imagem':'https://amazonikamundi.com.br/wp-content/uploads/2020/10/AmazonikaBurger-AMZ-min-1024x785.png'},
    {'id':8,'nome':'Sanduiche Frango','preco':18.20,
    'imagem':'https://i.pinimg.com/originals/5b/cc/40/5bcc40ed48f73090c82cb0e441533543.png'},
    {'id':9,'nome':'Porção Batata','preco':30.45,
    'imagem':'https://apl.adventistas.org/saude/wp-content/uploads/sites/19/2013/10/sides-french-fries.png'}
    ]
    

    const lanchesHtml = listLanches.map((e)=>{
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
      
      let listW = listLanches.length * 162;
      if(window.innerWidth - listW > x){
        x = (window.innerWidth - listW) - 20;
      }

      setScrollX(x)
    }


  return(
    <section id="lanches">
    
      <div className="pratos-cont" style={{borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px'}}>

        <div className="pratos-text">
          <h2>Lanches</h2>
          <p>Os Lanches mais saborosos estão aqui.</p>
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
        width: listLanches.length * 162}}
        // transforma o texto em html
        dangerouslySetInnerHTML={{__html: lanchesHtml}}>
        </div>
      </div>
        
      </div>
    </section>
  )

}