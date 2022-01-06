import React,{useState} from 'react'

export default function Sobremesas(){
  
  const listSobremesas= [
    {'id':10,'nome':'Donuts e Sorvete','preco':15.20,
    'imagem':'http://cafedonuts.com.br/wp-content/uploads/2018/12/Poderoso-Chefa%CC%83o.png'},
    {'id':11,'nome':'Tiramisu','preco':19.00,
    'imagem':'https://italiatua.com.br/wp-content/uploads/2020/02/tiramisu-nova.png'},
    {'id':12,'nome':'Petit Gateu','preco':18.50,
    'imagem':'https://static.expressodelivery.com.br/imagens/produtos/46286/180/Expresso-Delivery_67c3c86a281dab5f4f1b5f2ee8b14878.png'},
    {'id':13,'nome':'Cockies com Chantily','preco':12.00,
    'imagem':'https://mrcheney.com.br/wp-content/uploads/2020/02/COOKIE-SPLIT.png'},
    {'id':14,'nome':'Torta de Morango','preco':23.00,
    'imagem':'https://alimentosatalaia.com.br/arquivos/2018/05/c6cfde145b281d062af5ecc8de7778c9.png'},
    {'id':15,'nome':'Pudim','preco':19.90,
    'imagem':'https://static.expressodelivery.com.br/imagens/produtos/85446/180/Expresso-Delivery_ac708935e428c2d8a9e50b0ab63e78a7.png'},
    {'id':10,'nome':'Donuts e Sorvete','preco':15.20,
    'imagem':'http://cafedonuts.com.br/wp-content/uploads/2018/12/Poderoso-Chefa%CC%83o.png'},
    {'id':11,'nome':'Tiramisu','preco':19.00,
    'imagem':'https://italiatua.com.br/wp-content/uploads/2020/02/tiramisu-nova.png'},
    {'id':12,'nome':'Petit Gateu','preco':18.50,
    'imagem':'https://static.expressodelivery.com.br/imagens/produtos/46286/180/Expresso-Delivery_67c3c86a281dab5f4f1b5f2ee8b14878.png'},
    {'id':13,'nome':'Cockies com Chantily','preco':12.00,
    'imagem':'https://mrcheney.com.br/wp-content/uploads/2020/02/COOKIE-SPLIT.png'},
    {'id':14,'nome':'Torta de Morango','preco':23.00,
    'imagem':'https://alimentosatalaia.com.br/arquivos/2018/05/c6cfde145b281d062af5ecc8de7778c9.png'},
    {'id':15,'nome':'Pudim','preco':19.90,
    'imagem':'https://static.expressodelivery.com.br/imagens/produtos/85446/180/Expresso-Delivery_ac708935e428c2d8a9e50b0ab63e78a7.png'}
    ]
    

    const sobremesasHtml = listSobremesas.map((e)=>{
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
      
      let listW = listSobremesas.length * 162;
      if(window.innerWidth - listW > x){
        x = (window.innerWidth - listW) - 20;
      }

      setScrollX(x)
    }


  return(
    <section id="sobremesas">
    
      <div className="pratos-cont">

        <div className="pratos-text">
          <h2>Sobremesas</h2>
          <p>Venha Adocicar sua vida com nossas Sobremesas.</p>
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
        width: listSobremesas.length * 162}}
        // transforma o texto em html
        dangerouslySetInnerHTML={{__html: sobremesasHtml}}>
        </div>
      </div>
        
      </div>
    </section>
  )

}