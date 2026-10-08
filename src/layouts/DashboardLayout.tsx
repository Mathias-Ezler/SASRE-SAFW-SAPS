import { NavLink, Outlet, useLocation } from 'react-router';

const navigation = [
  {
    label: 'Panel principal',
    path: '/dashboard',
    section: 'GENERAL',
    icon: '⌂',
  },
  {
    label: 'Miembros',
    path: '/members',
    section: 'PERSONAL',
    icon: '◉',
  },
  {
    label: 'Departamentos',
    path: '/departments',
    section: 'PERSONAL',
    icon: '▤',
  },
  {
    label: 'Informes de Incidencia',
    path: '/incident-reports',
    section: 'REGISTROS',
    icon: '▧',
  },
  {
    label: 'Delitos Federales',
    path: '/federal-crimes',
    section: 'REGISTROS',
    icon: '⚖',
  },
  {
    label: 'Embargos',
    path: '/seizures',
    section: 'REGISTROS',
    icon: '▣',
  },
  {
    label: 'Recursos',
    path: '/resources',
    section: 'RECURSOS',
    icon: '◈',
  },
  {
    label: 'Sanciones',
    path: '/discipline',
    section: 'ADMINISTRACIÓN',
    icon: '⚑',
  },
  {
    label: 'Administración',
    path: '/administration',
    section: 'ADMINISTRACIÓN',
    icon: '⚙',
  },
];

export default function DashboardLayout() {
  const location = useLocation();

  const currentPage = navigation.find(
    (item) => item.path === location.pathname,
  );

  const sections = [...new Set(navigation.map((item) => item.section))];

  return (
    <div className="min-h-screen bg-ink-950 text-frost lg:flex">
      {/* Barra de luces */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-gradient-to-r from-azure-500 via-ink-700 to-red-600" />

      {/* BARRA LATERAL */}
      <aside className="flex w-full shrink-0 flex-col border-b border-white/[0.07] bg-ink-900 lg:sticky lg:top-0 lg:h-screen lg:w-[260px] lg:border-r lg:border-b-0">
        {/* Identidad institucional */}
        <div className="border-b border-white/[0.07] bg-gradient-to-br from-ink-700/70 to-ink-900 px-5 pt-7 pb-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-agencia.png"
              alt="Placa de SASRE"
              className="h-14 w-14 shrink-0 object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
            />

            <div>
              <p className="text-base font-bold tracking-[0.18em]">S.A.S.R.E</p>
              <p className="mt-1 text-[9px] font-semibold leading-tight tracking-[0.22em] text-azure-400">
                RESOURCES
                <br />
                ENFORCEMENT
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 border border-azure-400/20 bg-azure-500/10 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-azure-400" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-azure-300/80">
              Internal management system
            </span>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex-1 overflow-x-auto px-3 py-5 lg:overflow-y-auto">
          {sections.map((section) => {
            const items = navigation.filter(
              (item) => item.section === section,
            );

            return (
              <div key={section} className="mb-6">
                <div className="mb-2 flex items-center gap-2 px-3">
                  <p className="text-[9px] font-bold tracking-[0.22em] text-frost/35">
                    {section}
                  </p>
                  <span className="h-px flex-1 bg-white/[0.06]" />
                </div>

                <div className="flex gap-1 lg:flex-col">
                  {items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end
                      className={({ isActive }) =>
                        `relative flex shrink-0 items-center gap-3 border px-3 py-3 text-left text-xs ${
                          isActive
                            ? 'border-azure-400/25 bg-azure-500/10 text-azure-300'
                            : 'border-transparent text-frost/55 hover:bg-white/[0.04] hover:text-frost'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <span className="absolute top-1.5 bottom-1.5 left-0 hidden w-[3px] bg-azure-400 lg:block" />
                          )}

                          <span
                            className={`flex h-5 w-5 items-center justify-center text-sm ${
                              isActive ? 'text-azure-300' : 'text-frost/35'
                            }`}
                          >
                            {item.icon}
                          </span>

                          <span className="whitespace-nowrap font-medium">
                            {item.label}
                          </span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Pie de la barra lateral */}
        <div className="hidden border-t border-white/[0.07] px-5 py-4 lg:block">
          <div className="flex items-center justify-between">
            <span className="text-[9px] tracking-[0.16em] text-frost/35">
              AGENCY NETWORK
            </span>
            <span className="border border-azure-400/40 px-1.5 py-0.5 text-[9px] font-semibold text-azure-400">
              DEV
            </span>
          </div>

          <p className="mt-2 text-[10px] text-frost/45">
            San Andreas · Los Santos
          </p>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex min-h-screen min-w-0 flex-1 flex-col bg-[linear-gradient(rgba(156,195,247,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(156,195,247,0.035)_1px,transparent_1px)] bg-[size:44px_44px]">
        {/* Cabecera */}
        <header className="sticky top-0 z-20 flex min-h-[76px] items-center justify-between gap-4 bg-ink-950/90 px-5 backdrop-blur-md md:px-8">
          <span className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-azure-400/50 via-white/10 to-transparent" />

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="hidden h-px w-5 bg-azure-400 sm:block" />
              <p className="text-[9px] font-semibold tracking-[0.22em] text-azure-400">
                SASRE / {currentPage?.section ?? 'INSTITUCIONAL'}
              </p>
            </div>

            <h1 className="mt-1 truncate text-base font-semibold tracking-wide md:text-lg">
              {currentPage?.label ?? 'Panel institucional'}
            </h1>
          </div>

          {/* Usuario provisional */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-xs font-medium text-frost/80">
                Sin sesión activa
              </p>
              <p className="mt-1 text-[10px] text-frost/40">
                Entorno de desarrollo
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-ink-800">
              <span className="text-xs font-semibold text-frost/45">--</span>
            </div>
          </div>
        </header>

        {/* Página */}
        <main className="w-full flex-1 p-5 md:p-8">
          <Outlet />
        </main>

        {/* Pie institucional */}
        <footer className="mt-auto flex flex-col gap-2 border-t border-white/[0.07] bg-ink-950/80 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p className="text-[9px] tracking-[0.13em] text-frost/35">
            SASRE · INTERNAL MANAGEMENT SYSTEM
          </p>

          <p className="text-[9px] tracking-wide text-frost/30">
            SAFW / SAPS · DEVELOPMENT BUILD
          </p>
        </footer>
      </div>
    </div>
  );
}