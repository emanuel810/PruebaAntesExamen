import { useState } from "react";
import "./App.css";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function App() {
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <h1>Haz sido hackeado</h1>
      <h2>Ve rezandole al de arriba para que no te encuentre nada</h2>
      <h2>ayayay cuchau</h2>
      <button
        onClick={async () => {
          const res = await fetch(`${URL}/hora`);
          const data = await res.json();
          console.log(data);
          setResult(data);
        }}
      >
        Users
      </button>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default App;
