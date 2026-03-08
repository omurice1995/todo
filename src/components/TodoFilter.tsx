import type { FilterType } from '../types';

interface Props {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function TodoFilter({ filter, onFilterChange }: Props) {
  return (
    <div className="flex justify-center gap-1 px-4 py-3">
      {filters.map(f => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
            filter === f.value
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
              : 'text-slate-400 hover:text-slate-200 border border-transparent'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
