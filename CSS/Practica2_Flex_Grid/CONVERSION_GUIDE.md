# Conversión de CSS a Tailwind CSS

## Archivo Original vs. Tailwind

Este documento explica cómo se convirtió el CSS personalizado a clases de Tailwind CSS.

## Principales Conversiones

### 1. Layout Base (Grid)

**CSS Original:**

```css
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

**Tailwind:**

```html
<body class="grid grid-rows-[auto_1fr_auto]"></body>
```

### 2. Header (Flexbox)

**CSS Original:**

```css
.site-header {
  background: #0ea5e9;
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

**Tailwind:**

```html
<header
  class="bg-sky-500 text-white px-4 py-3 flex items-center justify-between"
></header>
```

### 3. Hero Section

**CSS Original:**

```css
.hero {
  min-height: 40vh;
  display: grid;
  place-items: center;
  background: linear-gradient(...), url(...);
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}
```

**Tailwind:**

```html
<section
  class="min-h-[40vh] grid place-items-center text-white text-center px-4 py-8"
></section>
```

### 4. Layout Principal (Grid 2 columnas)

**CSS Original:**

```css
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1.25rem;
  padding: 1.25rem;
}
```

**Tailwind:**

```html
<div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 p-5"></div>
```

### 5. Cards Grid

**CSS Original:**

```css
.cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
```

**Tailwind:**

```html
<section
  class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
></section>
```

### 6. Card Component

**CSS Original:**

```css
.card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}
.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
}
```

**Tailwind:**

```html
<article class="bg-white border border-gray-200 rounded-lg overflow-hidden">
  <div class="flex flex-col gap-2 p-3"></div>
</article>
```

## Tabla de Conversión de Propiedades

| CSS Property                     | CSS Value           | Tailwind Class              |
| -------------------------------- | ------------------- | --------------------------- |
| `display: grid`                  | -                   | `grid`                      |
| `display: flex`                  | -                   | `flex`                      |
| `background-color`               | `#0ea5e9`           | `bg-sky-500`                |
| `background-color`               | `#f8fafc`           | `bg-slate-50`               |
| `background-color`               | `#fff`              | `bg-white`                  |
| `color`                          | `white`             | `text-white`                |
| `padding`                        | `.75rem 1rem`       | `px-4 py-3`                 |
| `margin`                         | `0`                 | `m-0`                       |
| `border-radius`                  | `.5rem`             | `rounded-lg`                |
| `border`                         | `1px solid #e5e7eb` | `border border-gray-200`    |
| `font-weight`                    | `800`               | `font-extrabold`            |
| `font-weight`                    | `600`               | `font-semibold`             |
| `gap`                            | `1rem`              | `gap-4`                     |
| `align-items: center`            | -                   | `items-center`              |
| `justify-content: space-between` | -                   | `justify-between`           |
| `place-items: center`            | -                   | `place-items-center`        |
| `min-height`                     | `40vh`              | `min-h-[40vh]`              |
| `grid-template-columns`          | `280px 1fr`         | `grid-cols-[280px_1fr]`     |
| `grid-template-rows`             | `auto 1fr auto`     | `grid-rows-[auto_1fr_auto]` |

## Ventajas de la Conversión a Tailwind

1. **Consistencia**: Uso de un sistema de diseño unificado
2. **Mantenibilidad**: No necesidad de mantener CSS personalizado
3. **Responsive**: Clases responsive integradas (`lg:`, `md:`, etc.)
4. **Performance**: CSS optimizado automáticamente
5. **Productividad**: Desarrollo más rápido con clases utilitarias
6. **Purging**: Eliminación automática de CSS no utilizado

## Responsive Design

La conversión mantiene el diseño responsive usando las clases de Tailwind:

- `grid-cols-1 lg:grid-cols-[280px_1fr]`: Una columna en móvil, dos en desktop
- Se puede ajustar fácilmente para diferentes breakpoints (`sm:`, `md:`, `xl:`)

## Archivos Creados

- `index_viajes_tailwind.html`: Versión con Tailwind CSS
- `CONVERSION_GUIDE.md`: Esta guía de conversión

## Instrucciones de Uso

1. Abre `index_viajes_tailwind.html` en tu navegador
2. El archivo incluye Tailwind CSS via CDN
3. Para producción, considera instalar Tailwind localmente para mejor performance
