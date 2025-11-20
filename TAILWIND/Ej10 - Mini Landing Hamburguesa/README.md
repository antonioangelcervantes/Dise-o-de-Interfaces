🧪 Mini Landing con Tailwind + Menú Hamburguesa

Práctica de maquetación responsive – DIW

Esta práctica consiste en recrear una mini-landing responsive usando TailwindCSS, con una cabecera fija, un menú hamburguesa funcional en dispositivos móviles y varias secciones maquetadas con utilidades de Tailwind.

El objetivo es aprender a transformar una práctica previa hecha en CSS puro a su equivalente usando clases utilitarias.

⸻

🎯 Objetivos de la práctica
	•	Entender cómo traducir estilos tradicionales a clases de Tailwind.
	•	Maquetar usando mobile first (Tailwind ya trabaja así).
	•	Crear una cabecera fija con menú en escritorio y hamburguesa en móvil.
	•	Usar un gradiente como fondo del bloque principal.
	•	Trabajar contenedores, espaciados, tipografías, sombras y bordes con utilidades.
	•	Añadir un pequeño comportamiento con JavaScript (mostrar/ocultar el menú).

⸻

📁 Archivos incluidos
	•	index_tailwind_alumno.html → Estructura básica + pistas.
	•	main.js → Esqueleto para activar el menú (debes completarlo).
	•	No hay archivo CSS porque todo debe resolverse con clases Tailwind.

⸻

📌 Requisitos obligatorios

🟦 1) Cabecera fija
	•	Mantener el header siempre visible arriba.
	•	Debe tener fondo blanco y una sombra ligera.
	•	Menú siempre visible en escritorio (≥768px).
	•	Menú oculto en móvil hasta pulsar el icono.

🍔 2) Menú hamburguesa
	•	El botón hamburguesa sólo aparece en móvil.
	•	El menú debe abrirse y cerrarse con JavaScript.
	•	Usa una clase Tailwind para mostrar/ocultar (hidden o similar).

🎨 3) Sección principal / Hero
	•	Fondo con gradiente azul.
	•	Contenido centrado vertical y horizontalmente.
	•	Botón blanco con texto azul, estilo prominente.

📄 4) Secciones “Características” y “Sobre este proyecto”
	•	Textos centrados.
	•	Anchos máximos controlados con clases Tailwind.
	•	Uso de colores suaves (grises claros / blancos).
	•	Tipografía y espaciados adecuados con utilidades.

🦶 5) Footer
	•	Fondo gris claro.
	•	Líneas separadoras usando Tailwind.
	•	Texto centrado y pequeño.

⸻

🧩 Pistas importantes (sin solución directa)
	•	Tailwind tiene clases para padding, márgenes, tipografías, ancho máximo, display, flex, alineación, gradientes, bordes, sombras, etc.
	•	Para centrar contenedores usa clases tipo:

max-w-3xl mx-auto


	•	Para gradientes:

bg-gradient-to-r from-sky-500 to-blue-500


	•	Para ocultar/mostrar elementos:

hidden
block / flex


	•	Para cambiar comportamiento según ancho:

md:flex   md:hidden   md:text-xl



⸻

🧠 Funcionalidad con JavaScript (guía rápida)

En main.js debes:
	1.	Seleccionar el botón con clase .btn-menu.
	2.	Seleccionar el nav con id nav.
	3.	Al hacer click en el botón:
	•	Añadir o quitar la clase hidden al menú.

No uses nada más avanzado de lo que ya hemos visto en clase.

⸻

✔️ Entrega

Entrega estos archivos:
	•	index.html final (tu versión resuelta)
	•	main.js funcional
	•	¡Comprueba que funciona en móvil y escritorio!

⸻

📚 Extensión opcional (si te atreves)
	•	Animar la apertura del menú (con transition de Tailwind).
	•	Cambiar el gradiente por uno personalizado.
	•	Añadir un pequeño efecto hover al menú móvil.

⸻

Si quieres que te genere también un README versión profesor (con la solución explicada), me lo dices y lo preparo.