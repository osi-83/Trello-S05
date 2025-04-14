function Btn() {
    const usuariosValidos = [
    { usuario: "CMCL12", senha: "Com&c1@l", setor: "comercial" },
    { usuario: "98HR", senha: "RH!@2025", setor: "rh" },
    { usuario: "DEV4567TI", senha: "IT&&||==2025", setor: "ti" },
  ];

  const usuarioInput = document.getElementById(`usuario`).value;
  const senhaInput = document.getElementById(`senha`).value;
  const setorInput = document.getElementById(`setor`).value;
  
  const usuarioEncontrado = usuariosValidos.find(
    (u) =>
      u.usuario === usuarioInput &&
      u.senha === senhaInput &&
      u.setor === setorInput
    );
  
  const erroDiv = document.getElementById(`erroSenha`);

  if (usuarioEncontrado) {
    alert("Usuário e senha válidos.");

    usuarioInput.value = ``;
    senhaInput.value = ``;
    setorInput.value =``;
    erroDiv.textContent = ``;

    if (usuarioEncontrado.setor === `comercial`) {
      img();
    }

    if (usuarioEncontrado.setor === `rh`) {
      botao();
    }

    if (usuarioEncontrado.setor === `ti`){
      botao1();
    }

  } else {
    erroDiv.textContent = `Usuário ou a senha estão erradas para o setor escolhido!`;
    erroDiv.style.position = `absolute`;
    erroDiv.style.marginTop = `80px`;
    erroDiv.style.color = `#ff0000`;
    erroDiv.style.fontSize = `20px`;
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
  novaImagem.src = `/Exercicio06/carro.jfif`;
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

function botao1() {
 
  const container = document.createElement(`div`);
  container.style.position = `fixed`;
  container.style.top = `50%`;
  container.style.left = `50%`;
  container.style.transform = `translate(-50%, -50%)`;
  container.style.textAlign = `center`;
  container.style.zIndex = `500`;
  container.style.display = `flex`;
  container.style.flexDirection = `column`;
  container.style.alignItems = `center`;
  container.style.gap = `10px`;
  container.style.backgroundColor = "#f0f0f0";
  container.style.padding = "20px";
  container.style.borderRadius = "10px";
  container.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";

  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Digite um número";
  input.style.width = "300px";
  input.style.height = "40px";
  input.style.fontSize = "16px";
  input.style.textAlign = "center";

  const opcao = document.createElement("button");
  opcao.textContent = "Converter para Binário";
  opcao.style.width = "300px";
  opcao.style.height = "40px";
  opcao.style.fontSize = "16px";
  opcao.style.cursor = "pointer";

  const resultado = document.createElement("div");
  resultado.style.fontSize = "18px";
  resultado.style.marginTop = "10px";
  resultado.style.color = "#333";

  opcao.onclick = () => {
    const numero = parseInt(input.value);
    if (isNaN(numero)) {
      resultado.textContent = `Por favor, digite um numero válido.`;
      resultado.style.color = `#ff0000`;
    }else{
      const binario = numero.toString(2);
      resultado.textContent = `Binário: ${binario}`;
      resultado.style.color = `#007b00`;
    }

    resultado.value = ``;
  };

  container.appendChild(input);
  container.appendChild(opcao);
  container.appendChild(resultado);
  document.body.appendChild(container);
}