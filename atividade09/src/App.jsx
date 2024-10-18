import Nivel from './components/Nivel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nivel nivel="intermediário" />  {/* Passe "iniciante", "intermediário", ou "avançado" aqui */}
    </div>
  );
}

export default App;