import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import AdminLayout from '@/components/admin/AdminLayout';
import Head from 'next/head';
import { Globe, LayoutDashboard, Wrench, Building2, Share2, Edit3 } from 'lucide-react';

const GROUP_ICONS = {
  Global: Globe,
  Pages: LayoutDashboard,
  Services: Wrench,
  Industries: Building2,
  Shared: Share2,
};

const GROUP_COLORS = {
  Global: 'bg-purple-50 border-purple-200 text-purple-700',
  Pages: 'bg-blue-50 border-blue-200 text-blue-700',
  Services: 'bg-green-50 border-green-200 text-green-700',
  Industries: 'bg-orange-50 border-orange-200 text-orange-700',
  Shared: 'bg-pink-50 border-pink-200 text-pink-700',
};

const BADGE_COLORS = {
  Global: 'bg-purple-100 text-purple-700',
  Pages: 'bg-blue-100 text-blue-700',
  Services: 'bg-green-100 text-green-700',
  Industries: 'bg-orange-100 text-orange-700',
  Shared: 'bg-pink-100 text-pink-700',
};

export default function AdminDashboard() {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/admin/auth/verify')
      .catch(() => router.replace('/admin/login'));

    axios.get('/api/admin/data')
      .then((r) => setFiles(r.data.files || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const grouped = files.reduce((acc, f) => {
    if (!acc[f.group]) acc[f.group] = [];
    acc[f.group].push(f);
    return acc;
  }, {});

  const groupOrder = ['Global', 'Pages', 'Services', 'Industries', 'Shared'];

  return (
    <>
      <Head><title>Dashboard — ntech Admin</title></Head>

      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage all content across {files.length} data files
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {groupOrder.map((group) => {
            const Icon = GROUP_ICONS[group] || LayoutDashboard;
            const count = grouped[group]?.length || 0;
            const colorClass = GROUP_COLORS[group] || '';
            return (
              <div key={group} className={`border rounded-xl p-4 flex flex-col gap-1 ${colorClass}`}>
                <div className="flex items-center gap-2">
                  <Icon size={16} />
                  <span className="text-xs font-semibold uppercase tracking-wide">{group}</span>
                </div>
                <span className="text-2xl font-bold">{count}</span>
                <span className="text-xs opacity-70">file{count !== 1 ? 's' : ''}</span>
              </div>
            );
          })}
        </div>

        {/* File cards grouped */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          groupOrder.map((group) => {
            const items = grouped[group] || [];
            if (!items.length) return null;
            const Icon = GROUP_ICONS[group] || LayoutDashboard;
            return (
              <div key={group} className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-gray-400" />
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{group}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((file) => (
                    <Link key={file.key} href={file.route}>
                      <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${BADGE_COLORS[file.group] || 'bg-gray-100 text-gray-600'}`}>
                              {file.group}
                            </span>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {file.label}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5 font-mono">{file.key}</p>
                          </div>
                          <Edit3 size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors mt-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

AdminDashboard.getLayout = (page) => (
  <AdminLayout breadcrumb={['Dashboard']}>{page}</AdminLayout>
);
