import { useState } from 'react';
import { Save, ChevronDown, ChevronRight } from 'lucide-react';
import { detectFieldType, formatLabel } from '@/lib/dataUtils';
import ImageField from './ImageField';
import ArrayEditor from './ArrayEditor';

function LeafField({ fieldKey, value, type, onChange, onQuickSave, fieldPath, hideQuickSave }) {
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    await onQuickSave(fieldPath, value);
    setSaving(false);
  }

  const inputClass = 'flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';

  function renderInput() {
    if (type === 'boolean') {
      return (
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(fieldPath, e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded border-gray-300"
          />
          <span className="text-sm text-gray-600">{value ? 'true' : 'false'}</span>
        </div>
      );
    }
    if (type === 'number') {
      return (
        <input
          type="number"
          value={value ?? 0}
          onChange={(e) => onChange(fieldPath, Number(e.target.value))}
          className={inputClass}
        />
      );
    }
    if (type === 'textarea') {
      return (
        <textarea
          value={value || ''}
          onChange={(e) => onChange(fieldPath, e.target.value)}
          rows={4}
          className={`${inputClass} resize-y font-sans`}
        />
      );
    }
    if (type === 'link') {
      return (
        <input
          type="url"
          value={value || ''}
          onChange={(e) => onChange(fieldPath, e.target.value)}
          className={`${inputClass} font-mono`}
          placeholder="https://..."
        />
      );
    }
    // default: text
    return (
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(fieldPath, e.target.value)}
        className={inputClass}
      />
    );
  }

  const showSaveBtn = !hideQuickSave && type !== 'boolean';

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {formatLabel(fieldKey)}
        <span className="ml-1 text-xs text-gray-400 font-normal">({type})</span>
      </label>
      <div className="flex gap-2">
        {renderInput()}
        {showSaveBtn && (
          <button
            onClick={handleSave}
            disabled={saving}
            title="Quick save this field"
            className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-xs font-medium rounded-lg transition-colors flex-shrink-0"
          >
            <Save size={13} />
            {saving ? '...' : 'Save'}
          </button>
        )}
      </div>
    </div>
  );
}

export default function FieldEditor({ value, fieldKey, fieldPath, onChange, onQuickSave, depth = 0, hideQuickSave = false }) {
  const [open, setOpen] = useState(depth < 2);

  const type = detectFieldType(fieldKey, value);

  // Image fields — delegated to ImageField component
  if (type === 'image') {
    return (
      <ImageField
        fieldKey={fieldKey}
        value={value}
        onChange={onChange}
        onQuickSave={onQuickSave}
        fieldPath={fieldPath}
      />
    );
  }

  // Array fields
  if (type === 'array') {
    return (
      <ArrayEditor
        fieldKey={fieldKey}
        items={value}
        onChange={onChange}
        fieldPath={fieldPath}
        depth={depth}
        FieldEditorComponent={FieldEditor}
      />
    );
  }

  // Object fields — collapsible group
  if (type === 'object') {
    return (
      <div className="mb-4">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 w-full text-left py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
        >
          {open ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />}
          <span className="text-sm font-semibold text-gray-700">{formatLabel(fieldKey)}</span>
          <span className="text-xs text-gray-400 font-normal ml-1">
            ({Object.keys(value).length} fields)
          </span>
        </button>

        {open && (
          <div className={`mt-2 pl-4 border-l-2 border-gray-100 ml-2 ${depth === 0 ? 'pt-2' : ''}`}>
            {Object.entries(value).map(([k, v]) => (
              <FieldEditor
                key={k}
                fieldKey={k}
                value={v}
                fieldPath={fieldPath ? `${fieldPath}.${k}` : k}
                onChange={onChange}
                onQuickSave={onQuickSave}
                depth={depth + 1}
                hideQuickSave={hideQuickSave}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Leaf fields (text, textarea, number, boolean, link)
  return (
    <LeafField
      fieldKey={fieldKey}
      value={value}
      type={type}
      onChange={onChange}
      onQuickSave={onQuickSave}
      fieldPath={fieldPath}
      hideQuickSave={hideQuickSave}
    />
  );
}
