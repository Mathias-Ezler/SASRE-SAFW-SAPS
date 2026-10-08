
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
  } from 'react-router';
  
  const pages = [
    { path: '/dashboard', title: 'Panel principal', description: 'Resumen general de San Andreas Agency.' },
    { path: '/members', title: 'Miembros', description: 'Gestión del personal de la Agencia.' },
    { path: '/departments', title: 'Departamentos', description: 'Administración de SAFW y SAPS.' },
    { path: '/operations', title: 'Operaciones', description: 'Registro y seguimiento de despliegues.' },
    { path: '/reports', title: 'Informes', description: 'Documentación e informes institucionales.' },
    { path: '/discipline', title: 'Sanciones', description: 'Gestión de medidas disciplinarias.' },
    { path: '/administration', title: 'Administración', description: 'Configuración general de la Agencia.' },
  ];
  
  function LoginPage() {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0c0d] p-6 text-[#ece8e1]">
        <section className="w-full max-w-md rounded-xl border border-white/10 bg-[#121416] p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b59b83]">
            San Andreas Agency
          </p>
          <h1 className="text-3xl font-bold">Iniciar sesión</h1>
          <p className="mt-3 text-sm text-white/60">
            Portal institucional de la Agencia.
          </p>
          <button
            type="button"
            disabled
            className="mt-8 w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white/50"
          >
            Autenticación próximamente
          </button>
          <p className="mt-4 text-center text-xs text-white/40">
            SAFW · SAPS
          </p>
        </section>
      </main>
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
      <main className="min-h-screen bg-[#0b0c0d] p-6 text-[#ece8e1] md:p-10">
        <header className="mb-10 border-b border-white/10 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b59b83]">
            San Andreas Agency
          </p>
          <h1 className="mt-3 text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-sm text-white/60">{description}</p>
        </header>
  
        <section className="rounded-xl border border-white/10 bg-[#121416] p-6">
          <p className="text-sm text-white/60">
            Este módulo está preparado para su desarrollo.
          </p>
        </section>
  
        <nav className="mt-8 flex flex-wrap gap-3">
          {pages.map((page) => (
            <a
              key={page.path}
              href={page.path}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:border-[#b59b83] hover:bg-white/5"
            >
              {page.title}
            </a>
          ))}
        </nav>
      </main>
    );
  }
  
  export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
  
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <PlaceholderPage
                  title={page.title}
                  description={page.description}
                />
              }
            />
          ))}
  
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }