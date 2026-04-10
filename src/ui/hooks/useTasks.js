import { useState } from "react";
import * as servicio from "../../application/taskService";

export const useTasks = () => {

  // Estado local para almacenar las tareas obtenidas del servicio

  const [tareas, setTareas] = useState(servicio.obtenerTodas());

  // Función para actualizar el estado de las tareas

  const actualizar = () => {
    setTareas([...servicio.obtenerTodas()]); // se obtiene una copia de las tareas para actualizar el estado y re-renderizar el componente
  };

  // Función para agregar una nueva tarea en el servicio y luego actualizar el estado local

  const agregar = (titulo, descripcion) => {
    servicio.agregar(titulo, descripcion);
    actualizar();
  };

  // Función para eliminar una tarea por su id en el servicio y luego actualizar el estado local

  const eliminar = (id) => {
    servicio.eliminar(id);
    actualizar();
  };

  // Función para cambiar el estado de una tarea en el servicio y actualizar el estado local

  const toggle = (id) => {
    servicio.toggle(id);
    actualizar();
  };

  // Retorna el estado de las tareas y las funciones para manipularlas
  
  return { tareas, agregar, eliminar, toggle };
};