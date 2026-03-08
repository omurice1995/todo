import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import { Trash2, Check } from 'lucide-react';
import type { Todo } from '../types';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  const handleDoubleClick = () => {
    setEditText(todo.text);
    setEditing(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEdit(todo.id, editText);
      setEditing(false);
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setEditing(false);
    }
  };

  const handleBlur = () => {
    onEdit(todo.id, editText);
    setEditing(false);
  };

  return (
    <div
      className={`group flex items-center px-5 py-3.5 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors ${
        todo.completed ? 'opacity-60' : ''
      }`}
    >
      {/* Custom checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 transition-all ${
          todo.completed
            ? 'bg-purple-500 border-purple-500'
            : 'border-slate-500 hover:border-purple-400'
        }`}
      >
        {todo.completed && <Check size={10} className="text-white" strokeWidth={3} />}
      </button>

      {/* Text */}
      {editing ? (
        <input
          ref={inputRef}
          value={editText}
          onChange={e => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className="flex-1 bg-transparent text-white outline-none border-b border-purple-400 pb-0.5 text-sm"
        />
      ) : (
        <span
          onDoubleClick={handleDoubleClick}
          className={`flex-1 text-sm cursor-default select-none ${
            todo.completed ? 'line-through text-slate-500' : 'text-slate-200'
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Delete button */}
      {!editing && (
        <button
          onClick={() => onDelete(todo.id)}
          className="flex-shrink-0 ml-3 text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
        >
          <Trash2 size={14} />
        </button>
      )}
    </div>
  );
}
