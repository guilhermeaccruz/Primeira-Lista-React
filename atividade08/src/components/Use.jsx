function Use(props) {
    return (
      <h1>
        {props.online ? "Usuário online" : "Usuário offline"}
      </h1>
    );
  }
  
  export default Use;