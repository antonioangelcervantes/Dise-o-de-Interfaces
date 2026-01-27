# Práctica Tailwind – Modal

## 🎯 Objetivo

Construir un **modal completamente funcional** usando **Tailwind CSS**.

El ejercicio se centra en el **uso de utilidades de Tailwind para crear
overlays, modales y animaciones**, sin usar CSS propio.

---

## 📌 Requisitos obligatorios

1. El modal debe estar **oculto al cargar la página**
2. Al pulsar el botón **Abrir modal**:
   - Debe aparecer un overlay oscuro
   - El modal debe mostrarse con transición
3. El modal debe cerrarse:
   - Pulsando el botón **Cerrar**
   - Pulsando fuera del modal
4. El diseño y las animaciones deben realizarse **exclusivamente con Tailwind**
5. No se permite usar CSS ni estilos en línea

---

## 🧠 Pistas

- Usa utilidades de:
  - posicionamiento (`fixed`, `inset-0`, `flex`)
  - opacidad (`opacity-*`)
  - escalado (`scale-*`)
  - transiciones (`transition`, `duration-*`)
- El JavaScript solo debe **añadir o quitar clases**

---

## 📂 Archivos

- `index.html` → estructura base (clases a completar)
- `main.js` → lógica JS (no tocar estructura HTML)
