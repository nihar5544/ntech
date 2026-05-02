import Sidebar from './Sidebar';
import { Toaster } from '@/components/ui/toaster';
import { useRouter } from 'next/router';
import { LogOut, ChevronRight } from 'lucide-react';
import axios from 'axios';

export default function AdminLayout({ children, breadcrumb = [] }) {
  const router = useRouter();

  async function handleLogout() {
    await axios.post('/api/admin/auth/logout');
    router.push('/admin/login');
  }

  return (
    <>
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top bar */}
          <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span className="text-gray-400">Admin</span>
              {breadcrumb.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  <ChevronRight size={14} className="text-gray-300" />
                  <span className={i === breadcrumb.length - 1 ? 'text-gray-800 font-medium' : ''}>
                    {crumb}
                  </span>
                </span>
              ))}
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-md transition-colors"
            >
              <LogOut size={15} />
              Logout
            </button>
          </header>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </>
  );
}
