import { useState } from "react";

function Nota() {
  const [nota, setNota] = useState(0);
  const resultado = nota >= 7 ? "APROBADO" : "DESAPROBADO";
  return (
    <>
      <h2>Nota final:</h2>
      <button
        onClick={() => {
          setNota(7);
        }}
      >
        APROBAR
      </button>
      <button
        onClick={() => {
          setNota(2);
        }}
      >
        DESAPROBAR
      </button>
      <br />
      <button
        onClick={() => {
          alert(`EL ALUMNO FUE ${resultado}`);
        }}
      >
        MOSTRAR RESOLUCIÓN
      </button>
    </>
  );
}

export default Nota;
