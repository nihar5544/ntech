import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
import AdminLayout from '@/components/admin/AdminLayout';
import FieldEditor from '@/components/admin/FieldEditor';
import { setNestedValue } from '@/lib/dataUtils';
import { toast } from '@/components/ui/use-toast';
import { Save, RotateCcw, AlertCircle } from 'lucide-react';

const FILE_LABELS = {
  'header': 'Header',
  'footer': 'Footer',
  'homepage': 'Homepage',
  'about-us': 'About Us',
  'portfolio': 'Portfolio',
  'media': 'Media',
  'hire-developer': 'Hire Developer',
  'industry/corporate': 'Corporate Industry',
  'industry/ecommerce': 'E-Commerce Industry',
  'industry/gaming': 'Gaming Industry',
  'industry/healthcare': 'Healthcare Industry',
  'services/game-development': 'Game Development',
  'services/graphic-designing': 'Graphic Designing',
  'services/it-service-support': 'IT Service Support',
  'services/seo': 'SEO',
  'services/web-application': 'Web Application',
  'services/web-page': 'Web Page',
  'shared/partners': 'Partners',
  'shared/testimonials': 'Testimonials',
};

function LoadingSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i}>
          <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
          <div className="h-10 bg-gray-100 rounded-lg" />
        </div>
      ))}
    </div>
  );
}

export default function SectionEditor() {
  const router = useRouter();
  const { section } = router.query;

  const fileKey = Array.isArray(section) ? section.join('/') : section;
  const label = FILE_LABELS[fileKey] || fileKey;

  const [formData, setFormData] = useState(null);
  const [savedData, setSavedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!fileKey) return;
    setLoading(true);
    setError('');

    axios.get('/api/admin/auth/verify')
      .catch(() => router.replace('/admin/login'));

    axios.get(`/api/admin/data?file=${fileKey}`)
      .then((r) => {
        setFormData(r.data.data);
        setSavedData(r.data.data);
      })
      .catch((err) => {
        const msg = err.response?.data?.error || 'Failed to load data';
        setError(msg);
      })
      .finally(() => setLoading(false));
  }, [fileKey]);

  const handleChange = useCallback((path, value) => {
    setFormData((prev) => setNestedValue(prev, path, value));
  }, []);

  const handleQuickSave = useCallback(async (path, value) => {
    try {
      await axios.patch(`/api/admin/data?file=${fileKey}`, { path, value });
      setSavedData((prev) => setNestedValue(prev, path, value));
      toast({ title: 'Saved', description: `"${path.split('.').pop()}" updated successfully.` });
    } catch (err) {
      const msg = err.response?.data?.error || 'Save failed';
      toast({ title: 'Error', description: msg, variant: 'destructive' });
    }
  }, [fileKey]);

  async function handleSaveAll() {
    if (!formData) return;
    setSaving(true);
    try {
      await axios.put(`/api/admin/data?file=${fileKey}`, { data: formData });
      setSavedData(formData);
      toast({ title: 'All changes saved', description: `${label} updated successfully.` });
    } catch (err) {
      const msg = err.response?.data?.error || 'Save failed';
      toast({ title: 'Error', description: msg, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  }

  function handleReset() {
    setFormData(savedData);
    toast({ title: 'Reset', description: 'Changes discarded.' });
  }

  const breadcrumb = fileKey?.includes('/')
    ? [fileKey.split('/')[0].charAt(0).toUpperCase() + fileKey.split('/')[0].slice(1), label]
    : [label];

  return (
    <>
      <Head><title>{label} — ntech Admin</title></Head>

      <div>
        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{label}</h1>
            <p className="text-sm text-gray-500 mt-0.5 font-mono">data/{fileKey}.json</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              disabled={saving || !formData}
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 rounded-lg transition-colors disabled:opacity-40"
            >
              <RotateCcw size={14} />
              Reset
            </button>
            <button
              onClick={handleSaveAll}
              disabled={saving || !formData}
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors"
            >
              <Save size={14} />
              {saving ? 'Saving...' : 'Save All'}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          {loading && <LoadingSkeleton />}

          {!loading && error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              <AlertCircle size={18} />
              <div>
                <p className="font-medium">Failed to load</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && formData && (
            <div>
              {Object.entries(formData).map(([key, val]) => (
                <FieldEditor
                  key={key}
                  fieldKey={key}
                  value={val}
                  fieldPath={key}
                  onChange={handleChange}
                  onQuickSave={handleQuickSave}
                  depth={0}
                />
              ))}
            </div>
          )}
        </div>

        {/* Help text */}
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
          <span>Tip: Use <strong className="text-gray-500">Save</strong> next to a field for quick inline save, or <strong className="text-gray-500">Save All</strong> to save all changes at once.</span>
        </div>
      </div>
    </>
  );
}

SectionEditor.getLayout = function GetLayout(page) {
  return <SectionEditorLayout>{page}</SectionEditorLayout>;
};

function SectionEditorLayout({ children }) {
  const router = useRouter();
  const { section } = router.query;
  const fileKey = Array.isArray(section) ? section.join('/') : section || '';
  const label = FILE_LABELS[fileKey] || fileKey || 'Editor';

  const breadcrumb = fileKey?.includes('/')
    ? [fileKey.split('/')[0].charAt(0).toUpperCase() + fileKey.split('/')[0].slice(1), label]
    : [label];

  return <AdminLayout breadcrumb={breadcrumb}>{children}</AdminLayout>;
}
