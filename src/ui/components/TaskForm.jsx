//Hook para manejar el estado del formulario

import { useState } from "react";

// Componente de formulario para agregar nuevas tareas

export default function TaskForm({ onAgregar }) {

  //Estados locales para el título y la descripción de la tarea

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Función que maneja el envío del formulario

  const manejarSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
  
    //Valida si el título no está vacío antes de agregar la tarea

    if (!titulo) {
      alert("El título es obligatorio");
      return;
    }

    // Llama a la función onAgregar para agregar la tarea

    onAgregar(titulo, descripcion);

    // Limpia los campos del formulario después de agregar la tarea

    setTitulo("");
    setDescripcion("");
  };

  return (
    <form className="form" onSubmit={manejarSubmit}>
      
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)} //actualiza el estado del título 
      />

      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)} //actualiza el estado de la descripción
      />

      <button type="submit">Agregar</button> {/* Botón para enviar el formulario */}

    </form>
  );
}