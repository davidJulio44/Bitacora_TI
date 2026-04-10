import TaskItem from "./TaskItem"; //Importa componente TaskItem para mostrar cada tarea individualmente

export default function TaskList({ tareas, onToggle, onEliminar }) {
  return (
    <div>
      
      {/* Mapea el array de tareas y renderiza un TaskItem para cada una */}
      {tareas.map(tarea => (
        <TaskItem
          key={tarea.id}
          tarea={tarea}
          onToggle={onToggle}
          onEliminar={onEliminar}
        />
      ))}
    </div>
  );
}