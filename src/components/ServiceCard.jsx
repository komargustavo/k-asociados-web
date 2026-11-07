import { useState } from "react";
import Modal from "./Modal";
import PropuestaContenido from "./PropuestaContenido";

function ServiceCard(props) {
  const [abierto, setAbierto] = useState(false);

  function consultarServicio() {
    setAbierto(false);

    props.onConsultar?.(props.titulo);

    setTimeout(() => {
      document.getElementById("contacto")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  return (
    <>
      {/* Tarjeta del servicio */}
      <article
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        onClick={() => setAbierto(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setAbierto(true);
          }
        }}
        className="h-full cursor-pointer rounded-xl border border-border-soft bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500"
      >
        <h3 className="mb-3 text-xl font-bold leading-snug text-brand-900">
          {props.titulo}
        </h3>

        <p className="leading-relaxed text-text-muted">{props.descripcion}</p>

        <p className="mt-4 text-sm font-semibold text-brand-700">
          Ver propuesta completa →
        </p>
      </article>

      {/* Ventana emergente */}
      <Modal abierto={abierto} onCerrar={() => setAbierto(false)}>
        {/* Imagen */}
        <div className="relative h-32 shrink-0 overflow-hidden bg-brand-900 sm:h-40 md:h-auto md:w-2/5">          {props.imagen ? (
          <img
            src={props.imagen}
            alt={props.titulo}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full min-h-48 items-center justify-center bg-gradient-to-br from-brand-700 via-brand-500 to-brand-900 p-8">
            <span className="text-center text-2xl font-bold text-white">
              {props.titulo}
            </span>
          </div>
        )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Contenido */}
        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden p-6 sm:p-8 md:w-3/5">
          <p className="mb-3 pr-8 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Nuestros servicios
          </p>

          <h2
            id={`titulo-propuesta-${props.id}`}
            className="mb-4 pr-8 text-2xl font-bold leading-tight text-brand-900 sm:text-3xl"
          >
            {props.titulo}
          </h2>

          <p className="mb-4 text-sm font-medium leading-relaxed text-text-muted">
            {props.descripcion}
          </p>

          <div className="mb-4 min-h-0 flex-1 overflow-y-auto pr-2">
            <PropuestaContenido
              texto={props.propuesta || props.descripcion}
            />
          </div>

          <div className="mt-auto flex shrink-0 flex-col gap-3 border-t border-border-soft bg-surface pt-4 sm:flex-row">
            <button
              type="button"
              onClick={consultarServicio}
              className="rounded-lg bg-brand-700 px-5 py-3 font-semibold text-white transition hover:bg-brand-500"
            >
              Consultar por este servicio
            </button>

            <button
              type="button"
              onClick={() => setAbierto(false)}
              className="rounded-lg border border-border-soft px-5 py-3 font-semibold text-text-main transition hover:bg-brand-100"
            >
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ServiceCard;