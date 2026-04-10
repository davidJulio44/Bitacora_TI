//Se importa el repositorio de tareas y la función para crear una tarea nueva

import * as repo from "../infraestructure/taskRepository";
import { crearTarea } from "../domain/task";

// Funcion para obetener todas las tareas

export const obtenerTodas = () => repo.obtenerTareas();

//Funcion para agregar una nueva tarea

export const agregar = (titulo, descripcion) => {
  if (!titulo) throw new Error("El título es obligatorio"); // Valida si el título está vacío

  const tarea = crearTarea(titulo, descripcion); // Crea una nueva tarea usando la función
  repo.guardarTarea(tarea); // Guarda la tarea usando el repositorio
};

//Funcion para eliminar una tarea por su id

export const eliminar = (id) => repo.eliminarTarea(id);

//Funcion para cambiar el estado de completada a no completada de una tarea por su id

export const toggle = (id) => repo.cambiarEstado(id);