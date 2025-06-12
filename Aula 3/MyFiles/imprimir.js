function imprimir(json){
    return `<div class="id">ID: ${json.id}</div> 
            <div class="nome">Produto: ${json.produto}</div> 
            <div class="nascimento">Preço: ${json.preco}</div>
            <div class="validade">Preço: ${json.validade}</div>`;
  }
  
  export default imprimir;
  