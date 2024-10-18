function BotaoLogin(props) {
    return (
      <button>
        {props.logado ? "Sair" : "Entrar"}
      </button>
    );
  }
  
  export default BotaoLogin;