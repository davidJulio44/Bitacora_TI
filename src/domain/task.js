//se crea una función para crear una tarea nueva
//Retorna un objeto Tarea con los atributos: id (id basado en la fecha actual), titulo, descripcion y completada

export const crearTarea = (titulo, descripcion) => ({
  id: Date.now(),
  titulo,
  descripcion,
  completada: false,
});