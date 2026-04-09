import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function App() {
  const { tareas, agregar, eliminar, toggle } = useTasks();

  return (
    <div className="app-container"> {/* contenedor centrado */}
      
      <h1 className="app-title">Lista de Tareas</h1> {/* título estilizado */}

      <TaskForm onAgregar={agregar} />

      <TaskList
        tareas={tareas}
        onToggle={toggle}
        onEliminar={eliminar}
      />
    </div>
  );
}

export default App;