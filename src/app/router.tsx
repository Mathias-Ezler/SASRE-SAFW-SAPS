
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
  } from 'react-router';
  
  import DashboardLayout from '../layouts/DashboardLayout';
  
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
      path: 'operations',
      title: 'Operaciones',
      description: 'Registro y seguimiento de despliegues.',
    },
    {
      path: 'reports',
      title: 'Informes',
      description: 'Documentación institucional.',
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
  
  function LoginPage() {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0c0d] p-6 text-[#ece8e1]">
        <section className="w-full max-w-md rounded-xl border border-white/10 bg-[#121416] p-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#8a7260]/40 bg-[#8a7260]/10">
            <span className="font-black tracking-wider text-[#c7ad82]">
              SAA
            </span>
          </div>
  
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#b59b83]">
            San Andreas Agency
          </p>
  
          <h1 className="text-3xl font-bold">Portal institucional</h1>
  
          <p className="mt-3 text-sm leading-6 text-white/60">
            Plataforma de gestión de los departamentos SAFW y SAPS.
          </p>
  
          <button
            type="button"
            disabled
            className="mt-8 w-full cursor-not-allowed rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/40"
          >
            Autenticación próximamente
          </button>
  
          <p className="mt-5 text-center text-xs text-white/35">
            SAN ANDREAS AGENCY · SAFW · SAPS
          </p>
        </section>
      </main>
    );
  }
  
  function DashboardHome() {
    const cards = [
      {
        title: 'Miembros',
        description: 'Personal registrado en la Agencia.',
      },
      {
        title: 'Departamentos',
        description: 'SAFW y SAPS.',
      },
      {
        title: 'Operaciones',
        description: 'Despliegues e intervenciones.',
      },
      {
        title: 'Informes',
        description: 'Documentación institucional.',
      },
    ];
  
    return (
      <div className="space-y-8">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b59b83]">
            Overview
          </p>
  
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Centro de operaciones
          </h2>
  
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
            Desde este espacio se centralizará la gestión institucional,
            el personal y la actividad de los departamentos de San Andreas Agency.
          </p>
        </section>
  
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-xl border border-white/10 bg-[#121416] p-5 transition hover:border-[#8a7260]/50"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white/65">
                  {card.title}
                </p>
  
                <span className="text-xs text-[#b59b83]">
                  0{index + 1}
                </span>
              </div>
  
              <p className="mt-5 text-sm font-semibold text-white/85">
                Próximamente
              </p>
  
              <p className="mt-2 text-xs leading-5 text-white/40">
                {card.description}
              </p>
            </article>
          ))}
        </section>
  
        <section className="rounded-xl border border-white/10 bg-[#121416] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b59b83]">
            Institutional divisions
          </p>
  
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-[#0e100f] p-5">
              <p className="text-xs text-[#b59b83]">DIVISION 01</p>
              <h3 className="mt-2 text-lg font-semibold">
                SAFW
              </h3>
              <p className="mt-2 text-sm text-white/50">
                San Andreas Fish & Wildlife
              </p>
            </div>
  
            <div className="rounded-lg border border-white/10 bg-[#0e100f] p-5">
              <p className="text-xs text-[#b59b83]">DIVISION 02</p>
              <h3 className="mt-2 text-lg font-semibold">
                SAPS
              </h3>
              <p className="mt-2 text-sm text-white/50">
                San Andreas State Parks
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  function PlaceholderPage({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <section className="rounded-xl border border-white/10 bg-[#121416] p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b59b83]">
          Agency module
        </p>
  
        <h2 className="mt-3 text-2xl font-bold">{title}</h2>
  
        <p className="mt-3 text-sm leading-6 text-white/55">
          {description}
        </p>
  
        <div className="mt-8 rounded-lg border border-dashed border-white/15 p-6">
          <p className="text-sm text-white/65">
            Módulo preparado para su desarrollo.
          </p>
          <p className="mt-2 text-xs text-white/35">
            Las funcionalidades se implementarán en las siguientes versiones.
          </p>
        </div>
      </section>
    );
  }
  
  export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
  
          <Route element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={<DashboardHome />}
            />
  
            {pages.map((page) => (
              <Route
                key={page.path}
                path={`/${page.path}`}
                element={
                  <PlaceholderPage
                    title={page.title}
                    description={page.description}
                  />
                }
              />
            ))}
          </Route>
  
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    );
  }