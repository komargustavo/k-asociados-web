import { useState } from "react";
import Modal from "./Modal";
import { proyectos } from "../data/proyectos";

function Experiencias() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  return (
    <section id="proyectos" className="scroll-mt-24 bg-brand-100 px-6 py-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 h-1 w-16 rounded-full bg-brand-300" />

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-500">
            Nuestra experiencia
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-brand-900 md:text-4xl">
            Experiencias y proyectos
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Conocé algunas de las experiencias de trabajo y soluciones
            tecnológicas que desarrollamos junto a distintas organizaciones.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {proyectos.map((proyecto) => (
            <article
              key={proyecto.id}
              className="overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="h-56 w-full object-cover"
              />

              <div className="p-7">
                <span className="mb-3 inline-block rounded-full bg-brand-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-900">
                  {proyecto.categoria}
                </span>

                <h3 className="text-xl font-bold text-brand-900">
                  {proyecto.titulo}
                </h3>

                <p className="mt-4 leading-relaxed text-text-muted">
                  {proyecto.descripcion}
                </p>

                <button
                  type="button"
                  onClick={() => setProyectoSeleccionado(proyecto)}
                  className="mt-6  cursor-pointer font-semibold text-brand-700 transition hover:text-brand-500"
                >
                  Ver experiencia →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        abierto={Boolean(proyectoSeleccionado)}
        onCerrar={() => setProyectoSeleccionado(null)}
      >
        {proyectoSeleccionado && (
          <>
            <div className="relative h-48 shrink-0 overflow-hidden bg-brand-900 sm:h-56 md:h-auto md:w-2/5">
              <img
                src={proyectoSeleccionado.imagen}
                alt={proyectoSeleccionado.titulo}
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden p-6 sm:p-8 md:w-3/5">
              <div className="mb-4 flex flex-wrap items-center gap-3 pr-8">
                <span className="rounded-full bg-brand-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-900">
                  {proyectoSeleccionado.categoria}
                </span>

                {proyectoSeleccionado.fecha && (
                  <span className="text-xs font-medium text-text-muted">
                    {proyectoSeleccionado.fecha}
                  </span>
                )}
              </div>

              <h3
                id="titulo-proyecto"
                className="mb-3 pr-8 text-2xl font-bold leading-tight text-brand-900 sm:text-3xl"
              >
                {proyectoSeleccionado.titulo}
              </h3>

              {proyectoSeleccionado.cliente && (
                <p className="mb-4 text-sm font-medium text-text-muted">
                  Cliente: {proyectoSeleccionado.cliente}
                </p>
              )}

              <div className="min-h-0 flex-1 overflow-y-auto pr-2">
                <p className="leading-relaxed text-text-muted">
                  {proyectoSeleccionado.resumen ||
                    proyectoSeleccionado.descripcion}
                </p>

                <h4 className="mt-6 text-lg font-semibold text-brand-900">
                  Cómo trabajamos
                </h4>

                <ul className="mt-3 space-y-3">
                  {(proyectoSeleccionado.desarrollo ||
                    proyectoSeleccionado.detalle ||
                    []).map((item, indice) => (
                    <li
                      key={indice}
                      className="flex items-start gap-3 text-text-muted"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {proyectoSeleccionado.resultado && (
                  <>
                    <h4 className="mt-6 text-lg font-semibold text-brand-900">
                      Resultado
                    </h4>

                    <p className="mt-3 leading-relaxed text-text-muted">
                      {proyectoSeleccionado.resultado}
                    </p>
                  </>
                )}

                {proyectoSeleccionado.testimonios?.length > 0 && (
                  <>
                    <h4 className="mt-6 text-lg font-semibold text-brand-900">
                      Experiencia del cliente
                    </h4>

                    <div className="mt-3 space-y-4">
                      {proyectoSeleccionado.testimonios.map(
                        (testimonio, indice) => (
                          <figure
                            key={indice}
                            className="rounded-xl border border-brand-200 bg-brand-100 p-4"
                          >
                            <blockquote className="text-sm leading-relaxed text-text-main">
                              “{testimonio.texto}”
                            </blockquote>

                            <figcaption className="mt-3 text-sm font-semibold text-brand-900">
                              {testimonio.nombre}

                              {testimonio.cargo && (
                                <span className="block text-xs font-normal text-text-muted">
                                  {testimonio.cargo}
                                </span>
                              )}
                            </figcaption>
                          </figure>
                        ),
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-auto flex shrink-0 flex-col gap-3 border-t border-border-soft bg-surface pt-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setProyectoSeleccionado(null)}
                  className="rounded-lg bg-brand-700 px-5 py-3 font-semibold text-white transition hover:bg-brand-500"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Experiencias;