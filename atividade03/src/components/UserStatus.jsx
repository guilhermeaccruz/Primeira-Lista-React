function AuthStatus(props) {
    return (
      <h1>{props.authenticated ? "Bem-vindo, usuário!" : ""}</h1>
    );
  }
  export default AuthStatus;