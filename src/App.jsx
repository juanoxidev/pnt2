import "./App.css";
import AsignarAlumno from "./components/asignarAlumno/asignarAlumno";
import Contador from "./components/contador/contador";
import Nota from "./components/nota/nota";

function App() {
  return (
    <>
      <h1>Hook useState</h1>
      <hr />
      <Contador />
      <hr />
      <AsignarAlumno />
      <hr />
      <Nota />
    </>
  );
}

export default App;
