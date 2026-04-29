import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { formatLabel } from '@/lib/dataUtils';

function deepClearValues(item) {
  if (typeof item === 'string') return '';
  if (typeof item === 'number') return 0;
  if (typeof item === 'boolean') return false;
  if (Array.isArray(item)) return [];
  if (typeof item === 'object' && item !== null) {
    const out = {};
    for (const key of Object.keys(item)) {
      out[key] = deepClearValues(item[key]);
    }
    return out;
  }
  return '';
}

export default function ArrayEditor({ fieldKey, items, onChange, fieldPath, depth, FieldEditorComponent }) {
  function addItem() {
    const template = items.length > 0 ? deepClearValues(items[0]) : '';
    onChange(fieldPath, [...items, template]);
  }

  function removeItem(index) {
    onChange(fieldPath, items.filter((_, i) => i !== index));
  }

  function moveItem(index, direction) {
    const arr = [...items];
    const target = index + direction;
    if (target < 0 || target >= arr.length) return;
    [arr[index], arr[target]] = [arr[target], arr[index]];
    onChange(fieldPath, arr);
  }

  function updateItem(index, _path, value) {
    const arr = [...items];
    // _path is the full dot-path like "Services.card.2.title"
    // But from inside the item's FieldEditor, path is relative to the item
    // We need to update items[index] which is arr[index]
    arr[index] = value;
    onChange(fieldPath, arr);
  }

  const isSimple = items.length === 0 || typeof items[0] !== 'object' || Array.isArray(items[0]);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          {formatLabel(fieldKey)}
          <span className="ml-2 text-xs text-gray-400 font-normal">({items.length} items)</span>
        </span>
        <button
          onClick={addItem}
          className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 border border-blue-200 rounded-md transition-colors"
        >
          <Plus size={12} />
          Add Item
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg bg-white">
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-gray-50 rounded-t-lg">
              <span className="text-xs font-medium text-gray-500">Item {index + 1}</span>
              <div className="flex items-center gap-1">
                <button onClick={() => moveItem(index, -1)} disabled={index === 0} title="Move up" className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30 transition-colors">
                  <ChevronUp size={13} />
                </button>
                <button onClick={() => moveItem(index, 1)} disabled={index === items.length - 1} title="Move down" className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30 transition-colors">
                  <ChevronDown size={13} />
                </button>
                <button onClick={() => removeItem(index)} title="Remove" className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            <div className="p-3">
              {isSimple ? (
                <input
                  type="text"
                  value={String(item)}
                  onChange={(e) => {
                    const arr = [...items];
                    arr[index] = e.target.value;
                    onChange(fieldPath, arr);
                  }}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <FieldEditorComponent
                  value={item}
                  fieldKey={String(index)}
                  fieldPath={`${fieldPath}.${index}`}
                  onChange={onChange}
                  onQuickSave={() => {}}
                  depth={depth + 1}
                  hideQuickSave
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center text-sm text-gray-400">
          No items yet. Click &quot;Add Item&quot; to add one.
        </div>
      )}
    </div>
  );
}
