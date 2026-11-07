import { useState } from "react";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-border-soft bg-surface/50 px-6 py-2.5 shadow-sm backdrop-blur">
      <a
        href="#inicio"
        onClick={cerrarMenu}
        className="flex items-center no-underline"
        aria-label="K&Asociados - Ir al inicio"
      >
        <img
          src="/images/logo_inicio.png"
          alt="K&Asociados - Soluciones tecnológicas"
          className="h-20 w-auto object-contain"
        />
      </a>
      {/* Botón hamburguesa: solo en celulares */}
      <button
        type="button"
        className="rounded-lg p-2 text-text-main transition hover:bg-brand-100 md:hidden"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
        aria-controls="menu-principal"
      >
        {menuAbierto ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Navegación */}
      <nav
        id="menu-principal"
        className={`${
          menuAbierto ? "flex" : "hidden"
        } w-full flex-col items-stretch gap-3 md:flex md:w-auto md:flex-row md:items-center md:gap-5`}
      >
        <a
          href="#inicio"
          onClick={cerrarMenu}
          className="py-2 text-text-main transition hover:text-brand-700"
        >
          Inicio
        </a>

        <a
          href="#servicios"
          onClick={cerrarMenu}
          className="py-2 text-text-main transition hover:text-brand-700"
        >
          Servicios
        </a>

        <a
          href="#sobre-nosotros"
          onClick={cerrarMenu}
          className="py-2 text-text-main transition hover:text-brand-700"
        >
          Sobre nosotros
        </a>

        <a
          href="#proyectos"
          onClick={cerrarMenu}
          className="py-2 text-text-main transition hover:text-brand-700"
        >
          Proyectos realizados
        </a>

        <a
          href="#contacto"
          onClick={cerrarMenu}
          className="rounded-lg bg-brand-300 px-5 py-2.5 text-center font-semibold text-brand-900 transition hover:bg-brand-100"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Header;
