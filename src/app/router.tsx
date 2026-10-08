import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router';

import DashboardLayout from '../layouts/DashboardLayout';

/* ------------------------------------------------------------------ */
/* DATOS                                                               */
/* ------------------------------------------------------------------ */

const pages = [
  {
    path: 'members',
    title: 'Miembros',
    description: 'Gestión del personal de la Agencia.',
  },
  {
    path: 'departments',
    title: 'Departamentos',
    description: 'Administración de SAFW y SAPS.',
  },
  {
    path: 'incident-reports',
    title: 'Informes de Incidencia',
    description: 'Registro de uso de la fuerza tras disparos.',
  },
  {
    path: 'federal-crimes',
    title: 'Delitos Federales',
    description: 'Registros de delitos federales para revisión del FIB.',
  },
  {
    path: 'seizures',
    title: 'Embargos',
    description: 'Registro de vehículos embargados.',
  },
  {
    path: 'resources',
    title: 'Recursos',
    description: 'Documentación y materiales de la Agencia.',
  },
  {
    path: 'discipline',
    title: 'Sanciones',
    description: 'Gestión disciplinaria.',
  },
  {
    path: 'administration',
    title: 'Administración',
    description: 'Configuración general de la Agencia.',
  },
];

const dashboardStats = [
  {
    label: 'Personal registrado',
    value: '—',
    detail: 'Directorio institucional',
    icon: '01',
    path: '/members',
  },
  {
    label: 'Departamentos',
    value: '02',
    detail: 'SAFW y SAPS',
    icon: '02',
    path: '/departments',
  },
  {
    label: 'Registros del mes',
    value: '—',
    detail: 'Incidencias, delitos y embargos',
    icon: '03',
    path: '/incident-reports',
  },
  {
    label: 'Registros disciplinarios',
    value: '—',
    detail: 'Gestión de sanciones',
    icon: '04',
    path: '/discipline',
  },
];

const quickLinks = [
  {
    title: 'Directorio de miembros',
    description: 'Consultar y administrar el personal.',
    path: '/members',
    number: '01',
  },
  {
    title: 'Informes de Incidencia',
    description: 'Registrar el uso de la fuerza tras disparos.',
    path: '/incident-reports',
    number: '02',
  },
  {
    title: 'Delitos Federales',
    description: 'Documentar casos para revisión del FIB.',
    path: '/federal-crimes',
    number: '03',
  },
  {
    title: 'Embargos',
    description: 'Registrar vehículos embargados.',
    path: '/seizures',
    number: '04',
  },
];

const departments = [
  {
    code: 'SAFW',
    name: 'San Andreas Fish & Wildlife',
    division: 'DIVISION 01',
    badge: 'FW',
    description:
      'Gestión del personal y de las actividades del departamento de Fish & Wildlife.',
    tone: 'azure',
  },
  {
    code: 'SAPS',
    name: 'San Andreas State Parks',
    division: 'DIVISION 02',
    badge: 'PS',
    description:
      'Gestión del personal y de las actividades del departamento de State Parks.',
    tone: 'steel',
  },
] as const;

// Cada departamento tiene su propio tono para distinguirlos de un vistazo.
const tones = {
  azure: {
    card: 'from-azure-600/20 to-ink-900',
    badge: 'border-azure-400/40 bg-azure-500/15 text-azure-300',
  },
  steel: {
    card: 'from-white/[0.06] to-ink-900',
    badge: 'border-frost/25 bg-white/[0.06] text-frost/80',
  },
};

/* ------------------------------------------------------------------ */
/* COMPONENTES PEQUEÑOS                                                */
/* ------------------------------------------------------------------ */

// Las cuatro esquinas "tácticas" que enmarcan una tarjeta.
function CornerMarks() {
  return (
    <>
      <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-azure-400" />
      <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-azure-400" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-azure-400" />
      <span className="pointer-events-none absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-azure-400" />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="h-px w-5 bg-azure-400" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-azure-400">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-2 text-lg font-semibold tracking-wide text-frost md:text-xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-frost/50">
          {description}
        </p>
      )}
    </div>
  );
}

// Un solo componente que sirve para SAFW y SAPS: recibe los datos por props.
function DepartmentCard({
  department,
}: {
  department: (typeof departments)[number];
}) {
  const tone = tones[department.tone];

  return (
    <article
      className={`relative overflow-hidden border border-white/[0.08] bg-gradient-to-br ${tone.card}`}
    >
      <div className="absolute top-0 right-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full border border-white/[0.06]" />

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.2em] text-azure-400">
              {department.division}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-wide">
              {department.code}
            </h3>
            <p className="mt-2 text-sm text-frost/55">{department.name}</p>
          </div>

          <div
            className={`flex h-12 w-12 items-center justify-center border text-sm font-black tracking-wider ${tone.badge}`}
          >
            {department.badge}
          </div>
        </div>

        <p className="mt-5 max-w-md text-xs leading-6 text-frost/45">
          {department.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
          <span className="text-[10px] uppercase tracking-[0.12em] text-frost/35">
            Estado del módulo
          </span>
          <span className="text-[10px] font-semibold text-azure-300">
            EN PREPARACIÓN
          </span>
        </div>

        <NavLink
          to="/departments"
          className="mt-5 flex items-center justify-between border border-white/10 px-4 py-3 text-xs font-medium text-frost/75 hover:border-azure-400/60 hover:bg-azure-500/10 hover:text-azure-300"
        >
          <span>Acceder a departamentos</span>
          <span>→</span>
        </NavLink>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* PÁGINAS                                                             */
/* ------------------------------------------------------------------ */

function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950 p-6 text-frost">
      {/* Barra de luces */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-azure-500 via-ink-700 to-red-600" />

      {/* Fondo: resplandor + cuadrícula */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(58,120,214,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(156,195,247,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(156,195,247,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <section className="relative w-full max-w-md border border-white/10 bg-ink-900 p-8">
        <CornerMarks />

        <div className="mb-6 flex items-center justify-between">
          <img
            src="/sasre-badge.png"
            alt="Placa de SASRE"
            className="h-20 w-20 object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
          />

          <span className="flex items-center gap-2 border border-white/10 bg-ink-950/60 px-2.5 py-1.5 text-[9px] font-semibold tracking-[0.16em] text-frost/60">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            ACCESO RESTRINGIDO
          </span>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-azure-400">
          State of San Andreas · Resources Enforcement
        </p>

        <h1 className="text-3xl font-bold">Portal institucional</h1>

        <p className="mt-3 text-sm leading-6 text-frost/60">
          Plataforma de gestión de los departamentos SAFW y SAPS.
        </p>

        <button
          type="button"
          disabled
          className="mt-8 w-full cursor-not-allowed border border-white/10 bg-ink-800 px-4 py-3 text-sm text-frost/40"
        >
          Autenticación próximamente
        </button>

        <p className="mt-5 text-center text-[10px] tracking-[0.15em] text-frost/35">
          SOLO PERSONAL AUTORIZADO · SASRE
        </p>
      </section>
    </main>
  );
}

function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Bienvenida */}
      <section className="relative overflow-hidden border border-white/[0.08] bg-gradient-to-br from-ink-700/80 via-ink-900 to-ink-900">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-azure-300 via-azure-500 to-red-600" />

        {/* Placa como marca de agua */}
        <img
          src="/sasre-badge.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -right-10 hidden h-72 w-72 -translate-y-1/2 object-contain opacity-[0.07] grayscale md:block"
        />

        <div className="relative p-6 md:p-9">
          <div className="flex flex-wrap items-center gap-2">
            <span className="border border-azure-400/30 bg-azure-500/10 px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] text-azure-300">
              SASRE / INTERNAL
            </span>
            <span className="text-[9px] tracking-[0.16em] text-frost/40">
              INSTITUTIONAL DASHBOARD
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-tight md:text-4xl">
            Centro de operaciones
            <span className="block font-normal text-azure-300/80">
              Resources Enforcement
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-frost/55">
            Plataforma central para la gestión del personal, los departamentos
            y la actividad institucional de la Agencia.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <NavLink
              to="/incident-reports"
              className="inline-flex items-center gap-3 bg-azure-500 px-4 py-3 text-xs font-bold text-white hover:bg-azure-400"
            >
              <span>Nuevo informe de incidencia</span>
              <span aria-hidden="true">↗</span>
            </NavLink>

            <NavLink
              to="/members"
              className="inline-flex items-center gap-3 border border-white/15 bg-ink-950/40 px-4 py-3 text-xs font-semibold text-frost/80 hover:border-azure-400/60 hover:bg-azure-500/10 hover:text-azure-300"
            >
              <span>Consultar personal</span>
              <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Indicadores */}
      <section className="space-y-4">
        <SectionHeading
          eyebrow="Agency overview"
          title="Resumen institucional"
          description="Indicadores previstos para el seguimiento general de la Agencia."
        />

        <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <NavLink
              key={stat.path}
              to={stat.path}
              className="group border border-t-2 border-white/[0.08] border-t-azure-500/60 bg-ink-900 p-5 hover:border-azure-400/50 hover:bg-ink-800"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-frost/50">
                  {stat.label}
                </span>
                <span className="flex h-8 w-8 items-center justify-center border border-azure-400/25 bg-azure-500/10 text-[10px] text-azure-300">
                  {stat.icon}
                </span>
              </div>

              <p className="mt-6 text-3xl font-semibold tracking-tight text-frost">
                {stat.value}
              </p>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-xs text-frost/40">{stat.detail}</span>
                <span className="text-sm text-frost/30 group-hover:text-azure-300">
                  →
                </span>
              </div>
            </NavLink>
          ))}
        </div>

        <p className="text-[10px] leading-5 text-frost/35">
          Los indicadores pendientes de conexión se muestran como «—». No
          representan datos reales.
        </p>
      </section>

      {/* Departamentos */}
      <section className="space-y-4">
        <SectionHeading
          eyebrow="Agency divisions"
          title="Departamentos"
          description="Acceso a las dos divisiones operativas de SASRE."
        />

        <div className="grid gap-4 xl:grid-cols-2">
          {departments.map((department) => (
            <DepartmentCard key={department.code} department={department} />
          ))}
        </div>
      </section>

      {/* Accesos rápidos y actividad */}
      <section className="grid gap-6 2xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <SectionHeading
            eyebrow="Quick access"
            title="Accesos directos"
            description="Navegación rápida hacia los registros más usados."
          />

          <div className="grid gap-2 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="group flex items-start gap-4 border border-white/[0.08] bg-ink-900 p-4 hover:border-azure-400/50 hover:bg-ink-800"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-azure-400/25 bg-azure-500/10 text-[10px] font-semibold text-azure-300">
                  {link.number}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-frost/85 group-hover:text-azure-300">
                    {link.title}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-frost/45">
                    {link.description}
                  </p>
                </div>

                <span className="text-sm text-frost/30 group-hover:text-azure-300">
                  →
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SectionHeading
            eyebrow="System activity"
            title="Actividad reciente"
            description="Espacio reservado para los últimos movimientos registrados."
          />

          <div className="flex min-h-[230px] flex-col items-center justify-center border border-dashed border-white/15 bg-ink-900/60 px-6 py-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center border border-azure-400/25 bg-azure-500/10 text-lg text-azure-300">
              ◷
            </div>

            <p className="mt-4 text-sm font-semibold text-frost/70">
              Sin actividad registrada
            </p>

            <p className="mt-2 max-w-xs text-xs leading-5 text-frost/40">
              Cuando implementemos el registro de actividad, aquí aparecerán
              los eventos recientes de la Agencia.
            </p>

            <span className="mt-5 border border-white/10 px-3 py-1.5 text-[9px] font-semibold tracking-[0.15em] text-frost/40">
              PENDIENTE DE IMPLEMENTACIÓN
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlaceholderPage({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <section className="relative overflow-hidden border border-white/[0.08] bg-ink-900">
      <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-azure-500 via-azure-500/20 to-transparent" />

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-5 bg-azure-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure-400">
              Agency module
            </p>
          </div>

          <span className="border border-white/10 px-2 py-1 text-[9px] font-semibold tracking-[0.16em] text-frost/40">
            MOD / {path.toUpperCase()}
          </span>
        </div>

        <h2 className="mt-4 text-2xl font-bold">{title}</h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-frost/60">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center border border-dashed border-white/15 bg-ink-950/40 px-6 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center border border-azure-400/25 bg-azure-500/10 text-lg text-azure-300">
            ◈
          </div>

          <p className="mt-4 text-sm font-semibold text-frost/75">
            Módulo preparado para su desarrollo
          </p>

          <p className="mt-2 max-w-sm text-xs leading-5 text-frost/40">
            Las funcionalidades se implementarán en las siguientes versiones.
          </p>

          <span className="mt-5 flex items-center gap-2 border border-white/10 px-3 py-1.5 text-[9px] font-semibold tracking-[0.15em] text-frost/45">
            <span className="h-1.5 w-1.5 rounded-full bg-azure-400" />
            EN PREPARACIÓN
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ROUTER                                                              */
/* ------------------------------------------------------------------ */

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />

          {pages.map((page) => (
            <Route
              key={page.path}
              path={`/${page.path}`}
              element={
                <PlaceholderPage
                  title={page.title}
                  description={page.description}
                  path={page.path}
                />
              }
            />
          ))}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}