---
description: 
---

# REGLAS DE FLUJO DE TRABAJO PARA MANTENER FIDELIDAD AL LAYOUT DE REFERENCIA

Este documento establece el procedimiento para que el agente de Antigravity utilice el archivo `branding-dna.md` y la imagen `image_1.png` para generar el sitio web con una fidelidad absoluta, sin inventar parámetros de diseño.

## Procedimiento de Generación

**Paso 1: Lectura Obligatoria de Contexto**
Antes de cualquier generación de pantalla o sección, el agente *debe* leer el archivo `branding-dna.md`.

**Paso 2: Referencia Continua a la Imagen**
El agente *debe* referenciar continuamente la imagen `image_1.png` para la colocación, estructura y espaciado de todos los elementos.

**Paso 3: Generación por Secciones**
Para mayor precisión, el sitio debe regenerarse sección por sección. El agente no debe intentar generar todo el sitio de una sola vez si eso compromete la fidelidad.

**Paso 4: Verificación de Fidelidad**
Después de cada generación, el agente *debe* realizar una verificación automática para asegurar que:
- La tipografía coincide en estilo (ej., Serif Extrema para títulos).
- Los colores son los correctos de la paleta.
- El radio de borde es el especificado.
- No se han inventado sombras, gradientes o efectos no presentes en la referencia.

## Comandos de Ejecución Precisa (Plantillas para el Usuario)

**Usa estas plantillas de comandos para que el agente ejecute tus órdenes con precisión.**

- **Regenerar una Sección Específica:**
    > *"Usa la herramienta `edit_screens` de Stitch para regenerar la sección 'CL MENÚ' basándote fielmente en `image_1.png`. Reclica la cuadrícula de 6 bloques con sus colores de fondo y iconos de línea fina específicos definidos en `branding-dna.md`. El texto del título para 'Diseño & Marca' debe usar la Serif Extrema (Nostra). No inventes ningún estilo adicional."*

- **Crear una Variación Consistente:**
    > *"Genera 3 variantes de la tarjeta de plan Premium usando `generate_variants`. El diseño debe mantener el radio de borde de 32px y el color crema de fondo. El precio `$300` debe ser la sans-serif semibold. No cambies la tipografía ni los colores principales definidos en `branding-dna.md`."*

- **Extender el Diseño a una Nueva Página:**
    > *"Crea una nueva página de 'Prensa' para este sitio. El layout debe ser de una sola columna. El encabezado debe usar la Serif Extrema (Nostra) y los asteriscos de acento. La paleta de colores debe ser la crema principal con acentos naranjas. El footer debe ser idéntico al footer naranja de `image_1.png`."*
