// Caso a senha seja incorreta, deverá aparecer uma mensagem (dentro de uma div), em vermelho, indicando que o usuário ou a senha estão erradas para o setor escolhido.

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
} else {
    const erroDiv = document.createElement(`erroSenha`);
    document.body.appendChild(erroDiv);
    erroDiv.style.display = `flex`;
    erroDiv.style.justifyContent = `center`;
    erroDiv.style.marginTop = `20px`;
    erroDiv.style.color = `#ff0000`
    erroDiv.innerHTML = `Usuário ou a senha estão erradas para o setor escolhido!`;
  }
}