
import { NavLink, Outlet, useLocation } from 'react-router';

const navigation = [
  { label: 'Panel principal', path: '/dashboard', icon: 'layout-dashboard' },
  { label: 'Miembros', path: '/members', icon: 'users' },
  { label: 'Departamentos', path: '/departments', icon: 'building-2' },
  { label: 'Operaciones', path: '/operations', icon: 'clipboard-list' },
  { label: 'Informes', path: '/reports', icon: 'file-text' },
  { label: 'Sanciones', path: '/discipline', icon: 'scale' },
  { label: 'Administración', path: '/administration', icon: 'settings' },
];

export default function DashboardLayout() {
  const location = useLocation();

  const currentPage =
    navigation.find((item) => item.path === location.pathname);

  return (
    <div className="min-h-screen bg-[#0b0c0d] text-[#ece8e1] md:flex">
      {/* SIDEBAR */}
      <aside className="flex w-full shrink-0 flex-col border-b border-white/10 bg-[#101211] md:min-h-screen md:w-64 md:border-r md:border-b-0">
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#8a7260]/50 bg-[#8a7260]/10">
            <span className="text-sm font-black tracking-wider text-[#c7ad82]">
              SAA
            </span>
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide">
              SAN ANDREAS
            </p>
            <p className="text-xs tracking-[0.18em] text-[#b59b83]">
              AGENCY
            </p>
          </div>
        </div>

        <div className="px-5 py-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
            Workspace
          </p>
          <p className="mt-2 text-xs text-white/60">
            Institutional Portal
          </p>
        </div>

        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-1 md:flex-col md:overflow-visible">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                  isActive
                    ? 'border border-[#8a7260]/30 bg-[#8a7260]/15 text-[#d7bd98]'
                    : 'border border-transparent text-white/60 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <span className="text-[10px] text-[#b59b83]">◆</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="hidden border-t border-white/10 p-4 md:block">
          <p className="text-xs font-medium text-white/70">
            SAFW / SAPS
          </p>
          <p className="mt-1 text-[10px] text-white/35">
            San Andreas Agency
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="min-w-0 flex-1">
        <header className="flex min-h-[76px] items-center justify-between gap-4 border-b border-white/10 bg-[#0e100f] px-5 py-4 md:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b59b83]">
              Agency Portal
            </p>
            <h1 className="mt-1 text-lg font-semibold">
              {currentPage?.label ?? 'San Andreas Agency'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-xs font-medium text-white/80">
                Sesión no iniciada
              </p>
              <p className="mt-1 text-[10px] text-white/40">
                Entorno de desarrollo
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <span className="text-xs font-semibold text-[#b59b83]">
                --
              </span>
            </div>
          </div>
        </header>

        <main className="p-5 md:p-8">
          <Outlet />
        </main>

        <footer className="border-t border-white/10 px-5 py-5 md:px-8">
          <p className="text-[10px] tracking-wide text-white/30">
            SAN ANDREAS AGENCY · INTERNAL MANAGEMENT SYSTEM
          </p>
        </footer>
      </div>
    </div>
  );
}