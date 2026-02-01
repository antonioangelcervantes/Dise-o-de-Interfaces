# Solución – Modal con Tailwind (Profesor)

## ✅ Funcionalidades implementadas

- Modal oculto al cargar
- Abrir modal con botón
- Cerrar con botón "Cerrar"
- Cerrar al hacer click en el overlay (fuera del modal)
- Animación suave de entrada y salida:
  - Opacidad: 0 -> 100
  - Escala: 95 -> 100

## 🧠 Idea clave

Tailwind controla los estados visuales con clases:

- Mostrar/ocultar overlay: `hidden`
- Animación modal: `opacity-0 / opacity-100` y `scale-95 / scale-100`

El JS solo alterna clases, sin tocar estilos inline.
