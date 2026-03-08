import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

interface Props {
  onAdd: (text: string) => void;
  onToggleAll: () => void;
  hasItems: boolean;
}

export default function TodoInput({ onAdd, onToggleAll, hasItems }: Props) {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAdd(value);
      setValue('');
    }
  };

  const handleAdd = () => {
    onAdd(value);
    setValue('');
  };

  return (
    <div className="flex items-center px-5 py-4 border-b border-slate-700/50 gap-3">
      {hasItems ? (
        <button
          onClick={onToggleAll}
          className="text-slate-400 hover:text-purple-400 transition-colors flex-shrink-0"
          title="Toggle all"
        >
          <ChevronDown size={20} />
        </button>
      ) : (
        <div className="w-5 flex-shrink-0" />
      )}
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-base py-1"
        autoFocus
      />
      <button
        onClick={handleAdd}
        disabled={!value.trim()}
        className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500 hover:bg-purple-400 disabled:opacity-0 disabled:pointer-events-none flex items-center justify-center transition-all"
      >
        <Plus size={16} className="text-white" />
      </button>
    </div>
  );
}
