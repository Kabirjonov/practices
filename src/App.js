import './App.css';
import Rolling from './components/DiceRolling/Rolling';
import Joke from './components/Joke/Joke';
import Password from './components/PasswordValidator/Password';

function App() {
  return (
    <div className="App bg-dark">
        {/* <Joke/> */}
        {/* <Password/> */}
        <Rolling/>
    </div>
  );
}

export default App;
