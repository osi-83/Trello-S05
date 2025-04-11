function Btn() {
  //declaração variáveis
  const usuariosValidos = [
    { usuario: "CMCL12", senha: "Com&c1@l", setor: "comercial" },
    { usuario: "98HR", senha: "RH!@2025", setor: "rh" },
    { usuario: "DEV4567TI", senha: "IT&&||==2025", setor: "ti" },
  ];
  //input -> entrada de dados dos usuários
  const usuarioInput = document.getElementById(`usuario`).value;
  const senhaInput = document.getElementById(`senha`).value;
  const setorInput = document.getElementById(`setor`).value;
  //Validação dos dados
  const usuarioEncontrado = usuariosValidos.find(
    (u) =>
      u.usuario === usuarioInput &&
      u.senha === senhaInput &&
      u.setor === setorInput
  );
  //manipulação e criação da mensagem de erro na tela
  const erroDiv = document.getElementById(`erroSenha`);

  if (usuarioEncontrado) {
    alert("Usuário e senha válidos.");

    if (usuarioEncontrado.setor === `comercial`) {
      img();
    }

    if (usuarioEncontrado.setor === `rh`) {
      botao();
    }
  } else {
    erroDiv.innerHTML = `Usuário ou a senha estão erradas para o setor escolhido!`;
    erroDiv.style.display = `flex`;
    erroDiv.style.justifyContent = `center`;
    erroDiv.style.marginTop = `20px`;
    erroDiv.style.color = `#ff0000`;
    //const erroDiv = document.createElement(`erroSenha`);
    //document.body.appendChild(erroDiv);
  }
}

function img() {
  const container = document.createElement(`div`);
  container.style.position = `absolute`;
  container.style.top = `65%`;
  container.style.left = `50%`;
  container.style.transform = `translate(-50%, -50%)`;
  container.style.textAlign = `center`;
  container.style.zIndex = `500`;

  const novaImagem = document.createElement("img");
  novaImagem.src = `/Exercicio03/carro.jfif`;
  novaImagem.alt = `imagem do carro`;
  novaImagem.style.width = `300px`;

  const texto = document.createElement(`p`);
  texto.textContent = `Veiculo BYD TAN, valor de R$ 530.000,00`;
  texto.style.marginTop = `20px`;
  texto.style.fontSize = `18px`;
  texto.style.color = `white`;

  container.appendChild(novaImagem);
  container.appendChild(texto);

  document.body.appendChild(container);
}

function botao() {
  const container = document.createElement(`div`);
  container.style.position = `absolute`;
  container.style.top = `48%`;
  container.style.left = `50%`;
  container.style.transform = `translate(-50%, -50%)`;
  container.style.textAlign = `center`;
  container.style.zIndex = `500`;

  const opcao = document.createElement("button");
  opcao.textContent = `Ver cargos e salarios`;
  opcao.style.width = `320px`;
  opcao.onclick = () => {
    const tabela = document.createElement(`table`);
    tabela.style.marginTop = `10px`;
    tabela.border = `1`;

    const cabecalho = `
      <tr>
        <th>Nome</th>
        <th>Setor</th>
        <th>Cargo</th>
        <th>Salario</th>
      </tr>
      `;
    const linha = `
      <tr>
        <th>Felipe</th>
        <th>Ti</th>
        <th>Analista Ti</th>
        <th>5.000</th>
      </tr>
      <tr>
        <th>Aline</th>
        <th>Rh</th>
        <th>Estagiária</th>
        <th>1.000</th>
      </tr>
      <tr>
        <th>Cris</th>
        <th>Comercial</th>
        <th>Auxiliar administrativo</th>
        <th>1.800</th>
      </tr>
      `;
    
    tabela.innerHTML = cabecalho + linha;
    container.appendChild(tabela);
  };

  container.appendChild(opcao);
  document.body.appendChild(container);
}