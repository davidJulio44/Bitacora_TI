let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

export const guardarTarea = (tarea) => {
  tareas.push(tarea);
  localStorage.setItem("tareas", JSON.stringify(tareas)); // persistencia
};

export const obtenerTareas = () => tareas;


export const eliminarTarea = (id) => {
  tareas = tareas.filter(t => t.id !== id);
};

export const cambiarEstado = (id) => {
  tareas = tareas.map(t =>
    t.id === id ? { ...t, completada: !t.completada } : t
  );
};