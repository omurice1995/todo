import { useTodos } from './hooks/useTodos';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoFooter from './components/TodoFooter';

function App() {
  const {
    todos,
    allTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAll,
    activeCount,
    completedCount,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold tracking-widest text-white uppercase mb-2">Todo</h1>
          <p className="text-purple-300/50 text-sm">Stay organized, stay productive</p>
        </div>

        {/* Main card */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900/30 overflow-hidden border border-slate-700/50">
          <TodoInput
            onAdd={addTodo}
            onToggleAll={toggleAll}
            hasItems={allTodos.length > 0}
          />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            filter={filter}
          />
          {allTodos.length > 0 && (
            <>
              <TodoFilter filter={filter} onFilterChange={setFilter} />
              <TodoFooter
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={clearCompleted}
              />
            </>
          )}
        </div>

        {/* Hint */}
        <p className="text-center text-slate-600 text-xs mt-8">
          Double-click to edit &nbsp;·&nbsp; Enter to save &nbsp;·&nbsp; Esc to cancel
        </p>
      </div>
    </div>
  );
}

export default App;
