import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-brand-900 px-6 py-14 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {/* Marca */}
        <div>
          <a
            href="#inicio"
            className="inline-block text-xl font-bold tracking-tight text-white transition hover:text-brand-300"
          >
            K&Asociados
          </a>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-200">
            Soluciones tecnológicas para instituciones educativas y empresas.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-semibold text-white">Navegación</h4>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="#inicio"
                className="transition hover:text-brand-300"
              >
                Inicio
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                className="transition hover:text-brand-300"
              >
                Servicios
              </a>
            </li>

            <li>
              <a
                href="#sobre-nosotros"
                className="transition hover:text-brand-300"
              >
                Sobre nosotros
              </a>
            </li>

            <li>
              <a
                href="#proyectos"
                className="transition hover:text-brand-300"
              >
                Proyectos realizados
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                className="transition hover:text-brand-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-white">Hablemos</h4>

          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            ¿Tenés un proyecto en mente? Podemos ayudarte a encontrar una
            solución adecuada para tu organización.
          </p>

          <div className="mt-4 flex items-center gap-5">
            <a
              href="#"
              aria-label="WhatsApp - contacto 1"
              className="text-green-500 transition hover:text-green-400"
            >
              <FaWhatsapp size={22} />
            </a>

            <a
              href="#"
              aria-label="WhatsApp - contacto 2"
              className="text-green-500 transition hover:text-green-400"
            >
              <FaWhatsapp size={22} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-brand-300 transition hover:text-white"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-pink-400 transition hover:text-pink-300"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-6">
        <p className="text-center text-sm text-brand-200">
          © {new Date().getFullYear()} K&Asociados. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;