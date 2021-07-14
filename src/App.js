import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(pState => pState + 1)
  }

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={handleClick}>
        Clique aqui
      </button>
    </div>
  );
}

export default App;
