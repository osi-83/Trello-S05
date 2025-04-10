// Caso a senha seja incorreta, deverá aparecer uma mensagem (dentro de uma div), em vermelho, indicando que o usuário ou a senha estão erradas para o setor escolhido.

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
      u.setor.toLowerCase() === setorInput.toLowerCase()
  );

  const erroDiv = document.getElementById(`erroSenha`);

  if (usuarioEncontrado) {
    alert("Usuário e senha válidos.");
  } else {
    alert("Usuário ou senha inválidos.");

    erroSenha.style.marginTop = `10px`;
    erroSenha.style.color = `#ff0000`
    erroSenha.innerHTML = `A senha ou setor informados não são válidos!!!`;

    document.body.appendChild(erroSenha);

    const erroDiv = document.querySelector(`.erro-senha`);
    if (!erroDiv) {
      const erroDiv = document.createElement(`div`);
      erroDiv.className = `erro-senha`;
      erroDiv.innerHTML = `A senha informada está errada para o setor informado!`;
      erroDiv.style.padding = `10px`;
      //erroDiv.style.gap = `10px`; 
      erroDiv.style.marginTop = `10px`;

      setor.appendChild(erroDiv);
    }
  }
}