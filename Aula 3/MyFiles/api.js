const url = "http://localhost:3000/";
const urlProdutos = url + "produtos";

export async function enviar(dados) {
  try {
    const resposta = await fetch(urlProdutos, {
      method: 'POST',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
      throw new Error('Erro no envio dos dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao enviar dados:', erro);
    throw erro;
  }
}

export async function buscar() {
  try {
    const resposta = await fetch(urlProdutos);

    if (!resposta.ok) {
      throw new Error('Erro no envio dos dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao ler dados:', erro);
    throw erro;
  }
}
