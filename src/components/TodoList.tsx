import TodoItem from './TodoItem';
import type { Todo, FilterType } from '../types';

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  filter: FilterType;
}

export default function TodoList({ todos, onToggle, onDelete, onEdit, filter }: Props) {
  if (todos.length === 0) {
    const messages: Record<FilterType, { emoji: string; text: string }> = {
      all: { emoji: '✨', text: 'No todos yet. Add one above!' },
      active: { emoji: '🎉', text: 'Nothing left to do!' },
      completed: { emoji: '📝', text: 'No completed todos yet.' },
    };
    const msg = messages[filter];
    return (
      <div className="py-16 text-center text-slate-500">
        <div className="text-4xl mb-3">{msg.emoji}</div>
        <p className="text-sm">{msg.text}</p>
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
