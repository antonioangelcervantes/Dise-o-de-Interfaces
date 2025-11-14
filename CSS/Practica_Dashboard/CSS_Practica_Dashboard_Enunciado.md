# Práctica: Diseño de un Dashboard Responsivo con CSS (Flex y Grid)

## Objetivo

Desarrollar la interfaz visual de un dashboard administrativo moderno utilizando exclusivamente CSS puro (Flex y Grid). El resultado debe ser completamente responsivo, adaptándose a dispositivos móviles, tabletas y escritorio.

## Requerimientos funcionales

1. **Estructura principal**  
   El dashboard debe estar compuesto por:
   - **Sidebar (menú lateral)**: Con al menos 3 secciones, cada una con un icono y texto.
   - **Header (barra superior)**: Incluye un campo de búsqueda y el avatar/nombre de usuario.
   - **Main Content (zona principal)**:
     - **Tarjetas de estadísticas**: Muestra al menos 3 tarjetas con datos ficticios (ejemplo: usuarios, ventas, visitas).
     - **Tabla de datos**: Incluye una tabla con mínimo 4 filas y 3 columnas (ejemplo: lista de usuarios).

2. **Diseño y distribución**  
   - Uso combinado de **Flex** y **CSS Grid** para organizar los elementos.
   - El **sidebar** debe ser fijo y siempre visible en escritorio; en tablet o móvil puede ser colapsable/oculto.
   - El **header** debe estar siempre arriba, ocupando todo el ancho disponible.
   - Las **tarjetas de estadísticas** se distribuyen en una cuadrícula (grid) de varias columnas en escritorio y en una sola columna en móvil.
   - La **tabla de datos** ocupa el ancho debajo de las tarjetas.

3. **Responsividad**
   - Utiliza media queries para adaptar el layout en dispositivos móviles y tabletas.
   - En móviles el sidebar puede ocultarse y mostrarse con un botón (no debe implementarse funcionalidad JS, puede simularse el botón).
   - Las tarjetas y la tabla deben apilarse verticalmente en pantallas pequeñas.

4. **Estilos y efectos**
   - Agrega efectos visuales de hover en tarjetas y filas de la tabla (sombra, cambio de color, o escala).
   - Personaliza tipografía y colores (puedes elegir una paleta propia).
   - Añade border-radius y sombras para modernizar el estilo.

## Entregables

- Archivo HTML con la estructura solicitada.
- Archivo CSS aplicando Flex, Grid, media queries y estilos visuales.
- No debe utilizarse ningún framework (ni Tailwind ni Bootstrap en esta primera parte).

## Evaluación

Se valorará:
- Uso correcto de Flex y Grid.
- Capacidad de adaptar el diseño a diferentes dispositivos.
- Claridad en la estructura semántica HTML.
- Creatividad en el diseño visual.