import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1>Nextjs 13 Todo App</h1>
      <div>
        <div>
          <AddTask />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
