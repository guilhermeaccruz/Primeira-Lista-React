import AuthStatus from './components/UserStatus';
import UserStatus from './components/UserStatus';  
import './App.css'

function App() {
  return (
    <div className="App">
      <AuthStatus authenticated={true} />
      <UserStatus online={true} />
    </div>
  );
}

export default App;