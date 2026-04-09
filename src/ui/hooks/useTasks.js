import { useState } from "react";
import * as servicio from "../../application/taskService";

export const useTasks = () => {
  const [tareas, setTareas] = useState(servicio.obtenerTodas());

  const actualizar = () => {
    setTareas([...servicio.obtenerTodas()]);
  };

  const agregar = (titulo, descripcion) => {
    servicio.agregar(titulo, descripcion);
    actualizar();
  };

  const eliminar = (id) => {
    servicio.eliminar(id);
    actualizar();
  };

  const toggle = (id) => {
    servicio.toggle(id);
    actualizar();
  };

  return { tareas, agregar, eliminar, toggle };
};