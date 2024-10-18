,,ff,
getComputedStylefunction Nivel(props) {
    return (
      <h1>
        {props.nivel === "iniciante"
          ? "Bem-vindo, iniciante!"
          : props.nivel === "intermediário"
          ? "Você está progredindo!"
          : props.nivel === "avançado"
          ? "Parabéns, especialista!"
          : "Nível desconhecido"}
      </h1>
    );
  }
  
  export default Nivel;