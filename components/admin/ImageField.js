import { useState } from 'react';
import { Save, ImageOff } from 'lucide-react';
import { formatLabel } from '@/lib/dataUtils';

export default function ImageField({ fieldKey, value, onChange, onQuickSave, fieldPath }) {
  const [imgError, setImgError] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleQuickSave() {
    setSaving(true);
    await onQuickSave(fieldPath, value);
    setSaving(false);
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {formatLabel(fieldKey)}
      </label>
      <div className="flex gap-2">
        <input
          type="url"
          value={value || ''}
          onChange={(e) => { setImgError(false); onChange(fieldPath, e.target.value); }}
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
          placeholder="https://..."
        />
        <button
          onClick={handleQuickSave}
          disabled={saving}
          title="Quick save this field"
          className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-xs font-medium rounded-lg transition-colors"
        >
          <Save size={13} />
          {saving ? '...' : 'Save'}
        </button>
      </div>

      {value && (
        <div className="mt-2 border border-gray-200 rounded-lg p-2 bg-gray-50 inline-block">
          {imgError ? (
            <div className="flex items-center gap-2 text-gray-400 text-xs py-4 px-6">
              <ImageOff size={16} />
              Invalid image URL
            </div>
          ) : (
            <img
              src={value}
              alt="preview"
              className="max-h-32 max-w-xs object-contain rounded"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      )}
    </div>
  );
}
