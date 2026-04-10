// Se obtiene el array de tareas del almacenamiento local o se inicializa como un array vacío

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// Se guarda una nueva tarea en la memoria y se actualiza el almacenamiento local

export const guardarTarea = (tarea) => {
  tareas.push(tarea);
  localStorage.setItem("tareas", JSON.stringify(tareas)); // persistencia en localStorage
};

// Obtiene todas las tareas almacenadas

export const obtenerTareas = () => tareas;

// Elimina una tarea por su id y filtra todas las tareas menos la eliminada

export const eliminarTarea = (id) => {
  tareas = tareas.filter(t => t.id !== id);
};

//Cambia el estado de la tarea: completada a no completada

export const cambiarEstado = (id) => {
  tareas = tareas.map(t =>
    t.id === id ? { ...t, completada: !t.completada } : t
  );
};