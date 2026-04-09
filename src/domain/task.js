export const crearTarea = (titulo, descripcion) => ({
  id: Date.now(),
  titulo,
  descripcion,
  completada: false,
});