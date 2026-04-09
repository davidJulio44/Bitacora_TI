import * as repo from "../infraestructure/taskRepository";
import { crearTarea } from "../domain/task";

export const obtenerTodas = () => repo.obtenerTareas();

export const agregar = (titulo, descripcion) => {
  if (!titulo) throw new Error("El título es obligatorio");

  const tarea = crearTarea(titulo, descripcion);
  repo.guardarTarea(tarea);
};

export const eliminar = (id) => repo.eliminarTarea(id);

export const toggle = (id) => repo.cambiarEstado(id);