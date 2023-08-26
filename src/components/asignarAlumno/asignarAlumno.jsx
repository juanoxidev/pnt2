import { useState } from "react";

function AsignarAlumno() {
  const [nombre, setNombre] = useState("Sin alumno");
  return (
    <>
      <h2>{nombre}</h2>
      <button
        onClick={() => {
          setNombre("Juan Manuel Oxinalde");
        }}
      >
        Asignar Alumno
      </button>
    </>
  );
}

export default AsignarAlumno;
