# 🎯 Práctica Tailwind CSS - Agencia de Viajes

## 📋 Instrucciones Generales

Esta práctica te guía paso a paso para recrear el layout de la agencia de viajes usando **Tailwind CSS** en lugar de CSS personalizado.

### ✅ Objetivos de Aprendizaje

- Dominar Grid y Flexbox con clases de Tailwind
- Implementar diseño responsive
- Utilizar el sistema de colores y espaciado de Tailwind
- Consultar efectivamente la documentación oficial

---

## 🛠️ Configuración Inicial

1. **Archivo base**: `index_viajes_practica_tailwind.html`
2. **CDN incluido**: Tailwind CSS ya está configurado
3. **Documentación**: https://tailwindcss.com/docs

---

## 📝 Tareas por Completar

### 🏗️ **TAREA 1: Layout Base del Documento**

- **Archivo**: `<body>` class
- **Objetivo**: Footer siempre abajo usando Grid
- **Pistas clave**:
  - `min-h-screen` (altura mínima)
  - `grid` (3 filas)
  - `font-system bg-slate-50 text-gray-800`

### 🖼️ **TAREA 2: Hero Section**

- **Elemento**: `<section class="hero">`
- **Objetivos**:
  - Altura mínima 40vh
  - Centrar contenido con Grid
  - Imagen de fondo (ya incluida)

### 📐 **TAREA 3: Layout Principal (2 columnas)**

- **Elemento**: `<div class="layout">`
- **Objetivos**:
  - Mobile: 1 columna
  - Desktop: sidebar 280px + contenido flexible

### 🗂️ **TAREA 4: Sidebar**

- **Elemento**: `<aside class="sidebar">`
- **Objetivos**: Caja blanca con borde y padding

### 🃏 **TAREA 5-6: Grid de Tarjetas**

- **Elemento**: `<section class="cards">`
- **Objetivos**: Grid responsive auto-adaptable

### 🎴 **TAREA 7: Componente Card**

- **Elementos**: `.card`, `.card-body`, `img`, `button`
- **Objetivos**: Tarjeta completa con imagen y contenido

### 🦶 **TAREA 8: Footer**

- **Elemento**: `<footer>`
- **Objetivos**: Pie de página oscuro
- **Pistas clave**:
  - `bg-slate-900 text-slate-200 text-center p-4 text-sm`

---

## 🔍 Guía de Consulta Rápida

### 📐 **Layout**

| Concepto                     | CSS                                 | Tailwind                    |
| ---------------------------- | ----------------------------------- | --------------------------- |
| Grid básico                  | `display: grid`                     | `grid`                      |
| 3 filas (header/main/footer) | `grid-template-rows: auto 1fr auto` | `grid-rows-[auto_1fr_auto]` |
| 2 columnas específicas       | `grid-template-columns: 280px 1fr`  | `grid-cols-[280px_1fr]`     |
| Flex horizontal              | `display: flex`                     | `flex`                      |
| Centrar elementos            | `place-items: center`               | `place-items-center`        |

### 🎨 **Colores y Fondos**

| Color CSS               | Tailwind        |
| ----------------------- | --------------- |
| `#0ea5e9` (azul)        | `bg-sky-500`    |
| `#f8fafc` (gris claro)  | `bg-slate-50`   |
| `#fff` (blanco)         | `bg-white`      |
| `#1f2937` (gris oscuro) | `text-gray-800` |
| `#0b1220` (muy oscuro)  | `bg-slate-900`  |

### 📏 **Espaciado**

| CSS                    | Tailwind    |
| ---------------------- | ----------- |
| `padding: 1rem`        | `p-4`       |
| `padding: .75rem 1rem` | `px-4 py-3` |
| `gap: 1rem`            | `gap-4`     |
| `margin-bottom: .5rem` | `mb-2`      |

### 📱 **Responsive**

| Breakpoint       | Tailwind Prefix |
| ---------------- | --------------- |
| Mobile (default) | (sin prefijo)   |
| 1024px+          | `lg:`           |
| 768px+           | `md:`           |
| 640px+           | `sm:`           |

---

## ⚡ Metodología de Trabajo

1. **🔍 Lee la tarea**: Entiende qué se pide
2. **💡 Analiza las pistas**: Las claves están en los comentarios
3. **📖 Consulta docs**: Usa la documentación oficial cuando tengas dudas
4. **🧪 Prueba**: Guarda y recarga el navegador para ver cambios
5. **🐛 Debug**: Usa las DevTools para verificar que las clases se aplican
6. **✅ Verifica**: Compara con la imagen de referencia

---

## 🎓 Criterios de Evaluación

### ✅ **Funcionalidad (70%)**

- [ ] Layout base con Grid funciona correctamente
- [ ] Hero section centrado con imagen de fondo
- [ ] Layout 2 columnas responsive
- [ ] Grid de tarjetas auto-adaptable
- [ ] Cards completas con todos los elementos

### 🎨 **Diseño (20%)**

- [ ] Colores correctos según las pistas
- [ ] Espaciado consistente
- [ ] Bordes y redondeos aplicados
- [ ] Tipografía adecuada

### 📱 **Responsive (10%)**

- [ ] Se ve bien en móvil (1 columna)
- [ ] Transición correcta a desktop (2 columnas)
- [ ] Tarjetas se adaptan al espacio disponible

---

## 🆘 Recursos de Ayuda

### 📚 **Documentación Oficial**

- **Layout**: https://tailwindcss.com/docs/grid-template-columns
- **Flexbox**: https://tailwindcss.com/docs/flex
- **Colores**: https://tailwindcss.com/docs/background-color
- **Espaciado**: https://tailwindcss.com/docs/padding
- **Responsive**: https://tailwindcss.com/docs/responsive-design

### 🔧 **Herramientas Útiles**

- **DevTools**: F12 para inspeccionar elementos
- **Tailwind Cheat Sheet**: https://nerdcave.com/tailwind-cheat-sheet
- **Color Palette**: https://tailwindcss.com/docs/customizing-colors

### 💡 **Consejos Prácticos**

- Si una clase no funciona, verifica la sintaxis
- Los valores arbitrarios van entre `[corchetes]`
- Usa el inspector para ver qué clases se aplican
- Guarda frecuentemente y recarga para ver cambios

---

## 🏁 Entrega

1. **Archivo completado**: `index_viajes_practica_tailwind.html`
2. **Todas las tareas**: Verifica que no queden comentarios `/* COMPLETA AQUÍ */`
3. **Prueba responsive**: Redimensiona la ventana para verificar
4. **Validación**: Asegúrate de que se ve igual que la referencia

¡Buena suerte con la práctica! 🚀
