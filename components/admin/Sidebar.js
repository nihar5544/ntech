import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import {
  Globe,
  LayoutDashboard,
  Wrench,
  Building2,
  Share2,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

const NAV_GROUPS = [
  {
    group: 'Global',
    icon: Globe,
    collapsible: false,
    items: [
      { label: 'Header', route: '/admin/header' },
      { label: 'Footer', route: '/admin/footer' },
    ],
  },
  {
    group: 'Pages',
    icon: LayoutDashboard,
    collapsible: false,
    items: [
      { label: 'Homepage', route: '/admin/homepage' },
      { label: 'About Us', route: '/admin/about-us' },
      { label: 'Portfolio', route: '/admin/portfolio' },
      { label: 'Media', route: '/admin/media' },
      { label: 'Hire Developer', route: '/admin/hire-developer' },
    ],
  },
  {
    group: 'Services',
    icon: Wrench,
    collapsible: true,
    items: [
      { label: 'Game Development', route: '/admin/services/game-development' },
      { label: 'Graphic Designing', route: '/admin/services/graphic-designing' },
      { label: 'IT Service Support', route: '/admin/services/it-service-support' },
      { label: 'SEO', route: '/admin/services/seo' },
      { label: 'Web Application', route: '/admin/services/web-application' },
      { label: 'Web Page', route: '/admin/services/web-page' },
    ],
  },
  {
    group: 'Industries',
    icon: Building2,
    collapsible: true,
    items: [
      { label: 'Corporate', route: '/admin/industry/corporate' },
      { label: 'E-Commerce', route: '/admin/industry/ecommerce' },
      { label: 'Gaming', route: '/admin/industry/gaming' },
      { label: 'Healthcare', route: '/admin/industry/healthcare' },
    ],
  },
  {
    group: 'Shared',
    icon: Share2,
    collapsible: false,
    items: [
      { label: 'Partners', route: '/admin/shared/partners' },
      { label: 'Testimonials', route: '/admin/shared/testimonials' },
    ],
  },
];

function NavGroup({ group, icon: Icon, collapsible, items }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const isGroupActive = items.some((item) => router.asPath === item.route);

  return (
    <div className="mb-1">
      <button
        onClick={() => collapsible && setOpen((o) => !o)}
        className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
          isGroupActive ? 'text-blue-600' : 'text-gray-400'
        } ${collapsible ? 'hover:bg-gray-100 cursor-pointer' : 'cursor-default'}`}
      >
        <Icon size={14} />
        <span className="flex-1 text-left">{group}</span>
        {collapsible && (
          open ? <ChevronDown size={14} /> : <ChevronRight size={14} />
        )}
      </button>

      {(!collapsible || open) && (
        <div className="mt-0.5">
          {items.map((item) => {
            const active = router.asPath === item.route;
            return (
              <Link key={item.route} href={item.route}>
                <span
                  className={`block px-4 py-1.5 text-sm rounded-md ml-2 mb-0.5 transition-colors border-l-2 ${
                    active
                      ? 'bg-blue-50 text-blue-700 font-medium border-blue-600'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-transparent'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col h-screen overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <Link href="/admin">
          <span className="flex items-center gap-2 text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors">
            <span className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white text-sm font-bold">N</span>
            ntech Admin
          </span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-3">
        <Link href="/admin">
          <span
            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md mb-3 font-medium transition-colors ${
              router.asPath === '/admin'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard size={16} />
            Dashboard
          </span>
        </Link>

        <div className="border-t border-gray-100 mb-3" />

        {NAV_GROUPS.map((g) => (
          <NavGroup key={g.group} {...g} />
        ))}
      </nav>

      <div className="p-3 border-t border-gray-200">
        <Link href="/" target="_blank">
          <span className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <Globe size={13} />
            View Site
          </span>
        </Link>
      </div>
    </div>
  );
}
