import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);
  const sumar = () => {
    setValor(valor + 1);
  };
  const restar = () => {
    setValor(valor - 1);
  };
  return (
    <>
      <div>
        <h2>Contador</h2>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>

        <h3>{valor}</h3>
      </div>
    </>
  );
}

export default Contador;
