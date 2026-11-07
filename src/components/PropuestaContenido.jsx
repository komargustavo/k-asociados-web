function PropuestaContenido({ texto }) {
  const lineas = (texto || "").split("\n");
  const bloques = [];
  let listaActual = [];

  function cerrarLista() {
    if (listaActual.length > 0) {
      bloques.push({
        tipo: "lista",
        contenido: [...listaActual],
      });

      listaActual = [];
    }
  }

  lineas.forEach((linea) => {
    const contenido = linea.trim();

    if (!contenido) {
      cerrarLista();
      return;
    }

    if (contenido.startsWith("• ") || contenido.startsWith("- ")) {
      listaActual.push(contenido.slice(2));
      return;
    }

    cerrarLista();

    if (
      contenido === "¿Qué ofrecemos?" ||
      contenido === "Beneficio institucional" ||
      contenido === "Beneficio"
    ) {
      bloques.push({
        tipo: "titulo",
        contenido,
      });
    } else if (
      contenido.startsWith("Beneficio institucional:") ||
      contenido.startsWith("Beneficio:")
    ) {
      bloques.push({
        tipo: "beneficio",
        contenido: contenido
          .replace("Beneficio institucional:", "")
          .replace("Beneficio:", "")
          .trim(),
      });
    } else {
      bloques.push({
        tipo: "parrafo",
        contenido,
      });
    }
  });

  cerrarLista();

  return (
    <div className="space-y-4">
      {bloques.map((bloque, indice) => {
        if (bloque.tipo === "titulo") {
          return (
            <h3
              key={indice}
              className="pt-2 text-lg font-bold text-brand-900"
            >
              {bloque.contenido}
            </h3>
          );
        }

        if (bloque.tipo === "lista") {
          return (
            <ul key={indice} className="space-y-2 pl-1">
              {bloque.contenido.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-muted"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (bloque.tipo === "beneficio") {
          return (
            <div
              key={indice}
              className="rounded-xl border border-brand-200 bg-brand-100 p-4"
            >
              <p className="mb-1 font-bold text-brand-900">Beneficio</p>

              <p className="text-sm leading-relaxed text-text-main">
                {bloque.contenido}
              </p>
            </div>
          );
        }

        return (
          <p
            key={indice}
            className="leading-relaxed text-text-muted"
          >
            {bloque.contenido}
          </p>
        );
      })}
    </div>
  );
}

export default PropuestaContenido;