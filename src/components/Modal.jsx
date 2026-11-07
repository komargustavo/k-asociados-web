import { useEffect } from "react";

function Modal({ abierto, onCerrar, children }) {
  useEffect(() => {
    function manejarEscape(e) {
      if (e.key === "Escape") onCerrar();
    }

    if (abierto) {
      document.addEventListener("keydown", manejarEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", manejarEscape);
      document.body.style.overflow = "";
    };
  }, [abierto, onCerrar]);

  if (!abierto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-900/70 p-4 backdrop-blur-sm"
      onClick={onCerrar}
    >
      <section
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl md:h-auto md:max-h-[90vh] md:flex-row"      >
        <button
          type="button"
          onClick={onCerrar}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 rounded-lg px-3 py-1 text-2xl text-text-muted transition hover:bg-brand-100 hover:text-text-main"
        >
          ×
        </button>

        {children}
      </section>
    </div>
  );
}

export default Modal;