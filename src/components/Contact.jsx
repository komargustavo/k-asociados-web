import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact({ servicioSeleccionado }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    organizacion: "",
    email: "",
    tipoConsulta: "",
    mensaje: "",
    empresa: "", // honeypot
  });

  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState("");

  useEffect(() => {
    if (servicioSeleccionado) {
      setFormulario((anterior) => ({
        ...anterior,
        tipoConsulta: servicioSeleccionado,
      }));

      setEnviado(false);
      setErrorEnvio("");
    }
  }, [servicioSeleccionado]);

  async function manejarEnvio(e) {
    e.preventDefault();

    if (formulario.empresa) {
      setEnviado(true);
      return;
    }

    const nombre = formulario.nombre.trim();
    const email = formulario.email.trim();
    const tipoConsulta = formulario.tipoConsulta.trim();
    const mensaje = formulario.mensaje.trim();

    if (!nombre || !email || !tipoConsulta || !mensaje) {
      setErrorEnvio("Completá los campos obligatorios antes de enviar.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorEnvio("Ingresá un correo electrónico válido.");
      return;
    }

    if (mensaje.length > 2000) {
      setErrorEnvio("El mensaje no puede superar los 2000 caracteres.");
      return;
    }

    setEnviado(false);
    setErrorEnvio("");
    setEnviando(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre,
          organizacion: formulario.organizacion.trim(),
          email,
          tipo_consulta: tipoConsulta,
          mensaje,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setEnviado(true);

      setFormulario({
        nombre: "",
        organizacion: "",
        email: "",
        tipoConsulta: "",
        mensaje: "",
        empresa: "",
      });
    } catch (error) {
      console.error("Error al enviar la consulta:", error);

      setErrorEnvio(
        "No pudimos enviar tu consulta. Revisá tu conexión e intentá nuevamente.",
      );
    } finally {
      setEnviando(false);
    }
  }
  return (
    <section
      id="contacto"
      className="scroll-mt-14 bg-brand-100 px-6 pt-12 pb-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <div className="mb-4 h-1 w-16 rounded-full bg-brand-300" />

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-500">
            Contacto
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Hablemos de tu proyecto
          </h2>

          <p className="mt-4 leading-relaxed text-text-muted">
            Contanos qué necesita tu institución o empresa y exploremos juntos
            una solución tecnológica adecuada.
          </p>
        </div>

        <form
          onSubmit={manejarEnvio}
          className="w-full rounded-2xl border border-border-soft bg-surface p-5 shadow-sm sm:p-7"
        >
          <div className="hidden" aria-hidden="true">
            <label htmlFor="empresa">Empresa</label>

            <input
              id="empresa"
              name="empresa"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formulario.empresa}
              onChange={(e) =>
                setFormulario({ ...formulario, empresa: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-semibold text-text-main"
              >
                Nombre y apellido
              </label>

              <input
                id="nombre"
                maxLength={100}
                name="nombre"
                type="text"
                autoComplete="name"
                value={formulario.nombre}
                onChange={(e) => {
                  setFormulario({ ...formulario, nombre: e.target.value });
                  setEnviado(false);
                  setErrorEnvio("");
                }}
                required
                className="w-full rounded-lg border border-border-soft bg-surface px-4 py-3 text-text-main outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
                placeholder="Tu nombre y apellido"
              />
            </div>

            <div>
              <label
                htmlFor="organizacion"
                className="mb-2 block text-sm font-semibold text-text-main"
              >
                Institución o empresa
              </label>

              <input
                id="organizacion"
                maxLength={150}
                name="organizacion"
                type="text"
                autoComplete="organization"
                value={formulario.organizacion}
                onChange={(e) => {
                  setFormulario({
                    ...formulario,
                    organizacion: e.target.value,
                  });
                  setEnviado(false);
                  setErrorEnvio("");
                }}
                className="w-full rounded-lg border border-border-soft bg-surface px-4 py-3 text-text-main outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
                placeholder="Nombre de la institución o empresa"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-text-main"
              >
                Correo electrónico
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formulario.email}
                onChange={(e) => {
                  setFormulario({ ...formulario, email: e.target.value });
                  setEnviado(false);
                  setErrorEnvio("");
                }}
                required
                className="w-full rounded-lg border border-border-soft bg-surface px-4 py-3 text-text-main outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
                placeholder="nombre@ejemplo.com"
              />
            </div>

            <div>
              <label
                htmlFor="tipoConsulta"
                className="mb-2 block text-sm font-semibold text-text-main"
              >
                ¿En qué podemos ayudarte?
              </label>

              <select
                id="tipoConsulta"
                name="tipoConsulta"
                value={formulario.tipoConsulta}
                onChange={(e) => {
                  setFormulario({
                    ...formulario,
                    tipoConsulta: e.target.value,
                  });
                  setEnviado(false);
                  setErrorEnvio("");
                }}
                required
                className="w-full rounded-lg border border-border-soft bg-surface px-4 py-3 text-text-main outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
              >
                <option value="">Seleccioná una opción</option>
                <option value="Moodle y educación digital">
                  Moodle y educación digital
                </option>
                <option value="Desarrollo web">Desarrollo web</option>
                <option value="Copias de seguridad">
                  Copias de seguridad
                </option>
                <option value="Capacitación docente">
                  Capacitación docente
                </option>
                <option value="Soporte y mantenimiento">
                  Soporte y mantenimiento
                </option>
                <option value="Otra consulta">Otra consulta</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="mensaje"
              className="mb-2 block text-sm font-semibold text-text-main"
            >
              Mensaje
            </label>

            <textarea
              id="mensaje"
              maxLength={2000}
              name="mensaje"
              rows="3"
              value={formulario.mensaje}
              onChange={(e) => {
                setFormulario({ ...formulario, mensaje: e.target.value });
                setEnviado(false);
                setErrorEnvio("");
              }}
              required
              className="w-full resize-y rounded-lg border border-border-soft bg-surface px-4 py-3 text-text-main outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
              placeholder="Contanos brevemente qué necesitás..."
            />
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="mt-5 rounded-lg bg-brand-700 px-6 py-3 font-semibold text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {enviando ? "Enviando..." : "Enviar consulta"}
          </button>
        </form>

        {errorEnvio && (
          <p
            role="alert"
            className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
          >
            {errorEnvio}
          </p>
        )}

        {enviado && (
          <p
            role="status"
            className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800"
          >
            ¡Gracias por tu consulta! Recibimos tu mensaje correctamente. Nos
            pondremos en contacto con vos a la brevedad.
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;