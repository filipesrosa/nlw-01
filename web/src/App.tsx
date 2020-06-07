import React /*,{ useState }*/ from 'react';
import './App.css';

import Routes from './routes';
// A importação das rotas no React  substituem os comandos abaixo!
/*
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
*/

function App() {
  return (
    <Routes />
  );
}

export default App;

/*
// JSX: Sintaxe de XML dentro do JavaScript

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0); // { valor do estado, fn para atualizar o valor do estado}

  function handleButtonClick() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div>
      <Header title={`Contador: ${counter}`} />

      <h1>{counter}</h1>
      <h1>{counter * 2}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}
*/