# Práctica Tailwind – Modal

## 🎯 Objetivo

Crear un **modal funcional** usando **Tailwind CSS** y **JavaScript básico**.

El modal debe aparecer y desaparecer mediante animaciones suaves,
sin usar CSS propio ni librerías externas.

---

## 📌 Requisitos obligatorios

1. El modal debe estar **oculto al cargar la página**
2. Al pulsar el botón **“Abrir modal”**:
   - Aparece un overlay oscuro
   - El modal entra con transición
3. El modal debe cerrarse:
   - Pulsando el botón **Cerrar**
   - Pulsando fuera del modal (overlay)
4. Todo el diseño debe realizarse con **clases Tailwind**
5. No se permite usar `style`, archivos `.css` ni frameworks externos

---

## 🧠 Pistas

- Usa clases como: `hidden`, `opacity-0`, `opacity-100`, `scale-95`, `scale-100`
- Las transiciones deben hacerse **solo con Tailwind**
- El JavaScript solo debe encargarse de **activar o desactivar estados**

---

## 📂 Archivos del proyecto

- `index.html` → estructura y estilos con Tailwind
- `main.js` → lógica para abrir y cerrar el modal
