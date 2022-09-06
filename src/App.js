import { useState } from 'react';
import './style.css'

export default function App() {
  const [count, setCount] = useState(0)

  function Aumentar() {
    setCount(count + 1)
  }
  function Diminuir() {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <h1>Contador</h1>
      <p>{count}</p>
      <button className="btnAumentar" onClick={Aumentar}>Aumentar</button>
      <button className="btnDiminuir" onClick={Diminuir}>Diminuir</button>


    </div>
  );
}


