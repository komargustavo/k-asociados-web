import { useState } from "react";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experiencias from "./components/Experiencias";
import { servicios } from "./data/servicios";

function App() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");

  return (
    <div className="min-h-screen">
      <div id="inicio">
        <Header />
      </div>

      <main>
        {/* Presentación principal */}
        <section className="relative overflow-hidden bg-brand-700 px-6 pt-32 pb-20 text-white md:py-36">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            {/* Texto principal */}
            <div>
              <p className="mb-5 text-sm font-bold tracking-[0.2em] text-brand-300">
                SOLUCIONES DIGITALES PARA INSTITUCIONES Y EMPRESAS
              </p>

              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Tecnología que impulsa tus proyectos
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
                Acompañamos a instituciones educativas y empresas con campus
                virtuales, desarrollo web y soluciones tecnológicas adaptadas
                a sus necesidades.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#servicios"
                  className="rounded-lg bg-brand-300 px-6 py-3 text-center font-semibold text-brand-900 transition hover:bg-white"
                >
                  Conocer servicios
                </a>

                <a
                  href="#contacto"
                  className="rounded-lg border border-brand-200 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Hablemos de tu proyecto
                </a>
              </div>
            </div>

            {/* Panel visual */}
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur sm:p-8">
              <p className="mb-6 text-sm font-semibold tracking-wide text-brand-300">
                SOLUCIONES PARA TU ORGANIZACIÓN
              </p>

              <div className="space-y-4">
                <div className="rounded-xl bg-white/10 p-5">
                  <h2 className="font-bold text-white">Educación digital</h2>

                  <p className="mt-2 text-sm leading-relaxed text-brand-100">
                    Campus virtuales y acompañamiento para fortalecer la
                    enseñanza.
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  <h2 className="font-bold text-white">Desarrollo web</h2>

                  <p className="mt-2 text-sm leading-relaxed text-brand-100">
                    Sitios web para comunicar, conectar y presentar tus
                    servicios.
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  <h2 className="font-bold text-white">
                    Soporte tecnológico
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-brand-100">
                    Asistencia y mantenimiento para acompañar tus proyectos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section
          id="servicios"
          className="mx-auto max-w-6xl scroll-mt-24 px-6 py-10"
        >
          <div className="mb-10">
            <div className="mb-4 h-1 w-16 rounded-full bg-brand-300" />

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-500">
              Qué hacemos
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
              Nuestros servicios
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
              Soluciones digitales y acompañamiento tecnológico para impulsar
              proyectos educativos y empresariales.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((servicio) => (
              <ServiceCard
                key={servicio.id}
                id={servicio.id}
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
                propuesta={servicio.propuesta}
                imagen={servicio.imagen}
                onConsultar={setServicioSeleccionado}
              />
            ))}
          </div>
        </section>

        {/* Experiencias y proyectos */}
        <Experiencias />

        {/* Sobre nosotros */}
        <section id="sobre-nosotros" className="bg-surface px-6 py-36">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 h-1 w-16 rounded-full bg-brand-300" />

              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-500">
                Quiénes somos
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-brand-900 md:text-4xl">
                Sobre nosotros
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Somos un equipo orientado al desarrollo e implementación de
                soluciones tecnológicas para instituciones educativas, empresas
                y organizaciones.
              </p>

              <p className="mt-4 leading-relaxed text-text-muted">
                Trabajamos en la incorporación de herramientas digitales que
                contribuyan a mejorar los procesos educativos, administrativos
                y operativos, integrando tecnología, asesoramiento y
                acompañamiento técnico.
              </p>

              <p className="mt-4 leading-relaxed text-text-muted">
                Contamos con experiencia en la implementación y administración
                de plataformas educativas basadas en Moodle, desarrollo de
                soluciones web, gestión y resguardo de información,
                capacitación y soporte tecnológico.
              </p>

              <p className="mt-4 leading-relaxed text-text-muted">
                Abordamos cada proyecto considerando las necesidades
                particulares de cada organización, combinando planificación,
                desarrollo e implementación técnica con asistencia y
                acompañamiento durante las distintas etapas de trabajo.
              </p>

              <p className="mt-4 leading-relaxed text-text-muted">
                Nuestro objetivo es brindar soluciones confiables y adaptadas
                a cada contexto, facilitando la incorporación de tecnología y
                contribuyendo al crecimiento y desarrollo de las
                organizaciones.
              </p>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <Contact servicioSeleccionado={servicioSeleccionado} />
      </main>

      <Footer />
    </div>
  );
}

export default App;