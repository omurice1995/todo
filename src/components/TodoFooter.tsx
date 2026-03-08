interface Props {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export default function TodoFooter({ activeCount, completedCount, onClearCompleted }: Props) {
  return (
    <div className="flex items-center justify-between px-5 py-3 text-xs text-slate-500 border-t border-slate-700/30">
      <span>
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="hover:text-slate-300 transition-colors"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
}
