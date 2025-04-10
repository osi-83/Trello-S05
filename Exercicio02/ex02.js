function Btn() {
    const usuariosValidos = [
        {usuario: "CMCL12", senha: "Com&c1@l", setor: "comercial" },
        {usuario: "98HR", senha: "RH!@2025", setor: "rh"},
        {usuario: "DEV4567TI", senha: "IT&&||==2025", setor: "ti"} 
    ];

    const usuarioInput = document.getElementById(`usuario`).value;
    const senhaInput = document.getElementById(`senha`).value;
    const setorInput = document.getElementById(`setor`).value;

    const usuarioEncontrado = usuariosValidos.find(
        u => u.usuario === usuarioInput && u.senha === senhaInput && u.setor.toLowerCase() === setorInput.toLowerCase()
    );
  
    if (usuarioEncontrado){
      alert("Usuário e senha válidos.");
    } else {
      alert("Usuário ou senha inválidos.");
    }
  }
  
  Btn();


