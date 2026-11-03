# UT02_ACT12 · Laboratorios y reto autónomo CampusHub

**DIW · 2.º DAW · UT2 · RA2**  
**Enunciados del alumnado**

## Normas de trabajo

Trabaja con Visual Studio Code, Live Server y Chrome DevTools. Utiliza HTML semántico y CSS externo. No se permiten frameworks (Bootstrap, Tailwind), bibliotecas de componentes ni JavaScript para adaptar la interfaz.

En los laboratorios: **observa, responde antes de ejecutar, modifica y comprueba**. El reto final es autónomo: no se incluye una secuencia de pasos de implementación, código CSS de partida específico para el reto ni una solución modelo. Debes utilizar tu propia carpeta CampusHub terminada en ACT11.

## Laboratorio 1 · Condiciones y cascada

**Recursos:** `laboratorios/lab01-mediaqueries/`.

**Contexto.** Una página informativa tiene fondo y un aviso. Debe mostrar cambios visuales según el ancho del viewport.

### A. Observar y razonar

1. Abre `index.html` y localiza la etiqueta viewport.
2. Identifica las reglas generales en `styles.css` y explica cuáles seguirán aplicándose cuando aparezcan media queries.
3. Realiza la **Predicción 1** del documento teórico y anota las respuestas antes de comprobar.

### B. Construir

1. Desde 768 px, `.contenedor` debe tener fondo `#d1fae5` y `.aviso` fondo `#93c5fd`.
2. Desde 1024 px, el padding de `.contenedor` debe pasar a `40px`.
3. Conserva las propiedades comunes fuera de las media queries y evita declaraciones duplicadas.

### C. Comprobar y explicar

- Prueba 500, 768, 900, 1024 y 1200 px.
- Explica en qué intervalos cambia cada propiedad.
- Cambia temporalmente `min-width` por `max-width` en la primera condición; observa y documenta el efecto. Recupera después mobile-first.

**Entrega:** `styles.css` actualizado y `respuestas.md` del laboratorio.

## Laboratorio 2 · Grid y Flexbox adaptables

**Recursos:** `laboratorios/lab02-grid-flex/`.

**Contexto.** Una página presenta un menú y una galería de seis cursos. La estructura HTML ya existe, pero los contenedores todavía no se adaptan al ancho disponible.

### A. Predecir y analizar

1. Realiza la **Predicción 2** del documento teórico y guarda tus respuestas.
2. Identifica el contenedor de las tarjetas y el de los enlaces. Determina cuál conviene resolver con Grid y cuál con Flexbox.
3. Observa la página de partida en 390 px y en 1280 px antes de modificar su CSS.

### B. Construir

1. En pantallas menores de 768 px, `.galeria` deberá tener una columna; desde 768 px, dos; desde 1024 px, tres.
2. `.menu` deberá apilar sus enlaces en pantallas estrechas y mostrarlos en fila desde 768 px.
3. Mantén `gap: 16px` en el catálogo y una separación coherente entre enlaces.
4. Añade una mejora `:hover` de color de fondo para los enlaces sin modificar el HTML.
5. Evita definir anchuras fijas en cada tarjeta.

### C. Comprobar

- Prueba 390, 800 y 1280 px; revisa también una anchura intermedia elegida por ti.
- Añade temporalmente una séptima tarjeta y comprueba su colocación; retírala al finalizar.
- Explica por qué no necesitas repetir `display: grid` ni `display: flex` dentro de cada media query.

**Entrega:** CSS completado y respuestas en `respuestas.md`.

---

# Reto final autónomo · CampusHub responsive

## Encargo

La plataforma educativa **CampusHub**, que desarrollaste en ACT11, debe funcionar en pantallas estrechas, intermedias y grandes. Tu tarea es adaptar **tu propia versión terminada** conservando su identidad y contenidos. No se entrega una nueva plantilla de CampusHub: trabaja sobre tu proyecto anterior.

No hay instrucciones paso a paso para resolver el reto. Decide cómo reorganizar las regiones, qué técnica utilizar en cada caso y dónde necesitan aplicarse media queries.

## Requisitos

**R1. Continuidad del proyecto.** Conserva el CampusHub de ACT11 con su cabecera `.top`, enlaces `.top-links`, navegación `.lateral`, área `.contenido`, catálogo `.catalogo` y tarjetas `.curso`, progreso `.progreso`, métricas `.resumen`, avisos `.avisos`, pie `.pie` y tu sección adicional. No elimines contenido para evitar problemas de distribución.

**R2. Pantallas estrechas.** A unos 390 px de viewport, todas las regiones deben resultar legibles y utilizables. El diseño no debe producir desplazamiento horizontal innecesario ni solapamientos. La navegación debe continuar siendo accesible.

**R3. Pantallas intermedias.** La interfaz debe aprovechar adecuadamente el espacio desde un ancho intermedio, reorganizando aquellos componentes que lo necesiten.

**R4. Pantallas grandes.** A 1280 px, CampusHub debe conservar o mejorar la distribución de escritorio de ACT11, incluida la diferenciación visual de sus regiones.

**R5. Catálogo.** El conjunto de tarjetas de curso debe modificar su distribución en función del espacio disponible mediante Grid, sin asignar a cada tarjeta una anchura rígida que provoque desbordamiento.

**R6. Navegación y métricas.** Debes adaptar la cabecera, la navegación y el panel de progreso cuando sea necesario, utilizando Grid o Flexbox con criterio.

**R7. Técnica CSS.** Aplica mobile-first y al menos **dos media queries con `min-width`** que provoquen cambios reales de distribución. Puedes utilizar 768 y 1024 px como referencias, o seleccionar otros breakpoints si los justificas.

**R8. Código.** Mantén CSS organizado, evita repeticiones innecesarias y reutiliza los conocimientos de Grid, Flexbox, modelo de caja y tratamiento de desbordamientos de actividades anteriores. No utilices JavaScript ni frameworks para la adaptación.

**R9. Verificación.** Comprueba tu interfaz al menos a **390, 768, 850, 1024 y 1280 px**, además de cualquier anchura en la que detectes un problema. Documenta los problemas relevantes que hayas corregido.

**R10. Justificación.** Incluye `RESPONSIVE.md` en la carpeta de CampusHub con:

- **Diagnóstico inicial:** al menos tres observaciones sobre tu versión original en pantalla estrecha.
- **Decisiones de diseño:** qué regiones adaptaste, con qué técnica y por qué.
- **Breakpoints:** cuáles elegiste y qué cambia en cada uno.
- **Verificación:** las anchuras probadas, resultados y al menos un problema corregido.
- **Reflexión:** qué parte fue más difícil y cómo resolviste el problema sin alterar innecesariamente el HTML.

## Entrega

Entrega la **carpeta completa de tu CampusHub de ACT11 actualizada**, con su `index.html`, `styles.css`, recursos necesarios y `RESPONSIVE.md`. Conserva `respuestas.md` de ACT11 si ya existía. Adjunta una captura del resultado en móvil y otra en escritorio (puedes guardarlas dentro de una carpeta `capturas/`).

## Lista de verificación antes de entregar

- [ ] He reutilizado mi CampusHub de ACT11, sin sustituirlo por un proyecto distinto.
- [ ] No he eliminado ninguna región para evitar tener que adaptarla.
- [ ] El diseño funciona a 390, 768, 850, 1024 y 1280 px.
- [ ] He usado mobile-first y al menos dos media queries que cambian la distribución.
- [ ] Grid y Flexbox se utilizan donde corresponde.
- [ ] La navegación, el catálogo, el progreso y la sección adicional son legibles.
- [ ] No hay desbordamiento horizontal innecesario.
- [ ] Mi `RESPONSIVE.md` documenta decisiones y comprobaciones reales.
- [ ] He incluido capturas del resultado móvil y de escritorio.
