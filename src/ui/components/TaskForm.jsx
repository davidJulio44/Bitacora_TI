import { useState } from "react";

export default function TaskForm({ onAgregar }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (!titulo) {
      alert("El título es obligatorio");
      return;
    }

    onAgregar(titulo, descripcion);
    setTitulo("");
    setDescripcion("");
  };

  return (
    <form className="form" onSubmit={manejarSubmit}>
      
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <button type="submit">Agregar</button>

    </form>
  );
}