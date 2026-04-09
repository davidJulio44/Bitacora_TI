import TaskItem from "./TaskItem";

export default function TaskList({ tareas, onToggle, onEliminar }) {
  return (
    <div>
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