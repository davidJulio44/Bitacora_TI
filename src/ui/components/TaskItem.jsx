export default function TaskItem({ tarea, onToggle, onEliminar }) {
  return (
    <div className="task-item">

      {/* Contenedor de texto */}
      <div>
        {/* Título */}
        <div
          className={`task-title ${tarea.completada ? "completed" : ""}`}
        >
          {tarea.titulo}
        </div>

        {/* Descripción */}
        {tarea.descripcion && (
          <div className="task-description">
            {tarea.descripcion}
          </div>
        )}
      </div>

      {/* Botón que cambia estado */}
      <button
        className="btn btn-toggle"
        onClick={() => onToggle(tarea.id)}
      >
        {tarea.completada ? "Tarea Completada" : "Completar"}
      </button>

      {/* Botón de eliminar */}
      <button
        className="btn btn-delete"
        onClick={() => onEliminar(tarea.id)}
      >
        Eliminar
      </button>

    </div>
  );
}