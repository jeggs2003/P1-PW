# AeroPaq — Sitio Web Oficial

Plataforma web estática para la empresa de paquetería AeroPaq. Permite conocer los servicios, cobertura, cotizar envíos nacionales e internacionales y contactar a la empresa.

🌐 **Sitio en producción:** [https://sparkly-crepe-ccbd13.netlify.app](https://sparkly-crepe-ccbd13.netlify.app)  
📁 **Repositorio:** [https://github.com/jeggs2003/P1-PW](https://github.com/jeggs2003/P1-PW)

---

## Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.x | Librería principal de UI |
| Vite | 8.x | Empaquetador y servidor de desarrollo |
| React Router DOM | 6.x | Manejo de rutas del lado del cliente |
| CSS puro | — | Estilos y diseño responsive |
| Google Apps Script | — | Backend para formulario de contacto |
| Netlify | — | Hosting y despliegue continuo |

---

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

---

## Cómo ejecutar el proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/jeggs2003/P1-PW.git
cd P1-PW
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 4. Generar build de producción
```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

---

## Estructura del proyecto
```
aeropaq/
├── public/
│   ├── _redirects              # Regla de redirección para Netlify (SPA)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navegación fija con menú hamburguesa responsive
│   │   ├── Footer.jsx          # Pie de página
│   │   └── sections/
│   │       ├── Hero.jsx        # Sección principal con animación de avión
│   │       ├── Servicios.jsx   # Cards de servicios ofrecidos
│   │       ├── Cobertura.jsx   # Zonas y países con cobertura
│   │       ├── ComoFunciona.jsx# Pasos del proceso de envío
│   │       ├── SobreNosotros.jsx # Historia, misión, visión y valores
│   │       ├── FAQ.jsx         # Preguntas frecuentes con acordeón interactivo
│   │       └── Contacto.jsx    # Formulario con validaciones e integración Google Sheets
│   ├── pages/
│   │   ├── Landing.jsx         # Página principal con todas las secciones
│   │   └── Cotizador.jsx       # Cotizador de envíos con stepper de 3 pasos
│   ├── styles/
│   │   ├── global.css          # Variables CSS y estilos base
│   │   ├── navbar.css          # Estilos de navegación
│   │   ├── hero.css            # Estilos del hero con animación
│   │   └── cotizador.css       # Estilos del cotizador
│   ├── utils/
│   │   └── cotizadorLogic.js   # Lógica de cálculo de tarifas por destino
│   ├── images/                 # Imágenes del proyecto
│   ├── App.jsx                 # Componente raíz con definición de rutas
│   └── main.jsx                # Punto de entrada de la aplicación
├── netlify.toml                # Configuración de build para Netlify
├── index.html
└── package.json
```

---

## Funcionalidades

### Landing page
- Hero con animación de avión flotante
- Sección de servicios: Envíos nacionales, internacionales, recolección a domicilio y servicio exprés
- Cobertura: Guatemala, Centroamérica, Sudamérica, Norte América y Europa
- Proceso de envío en 4 pasos: Solicitud → Recolección → Despacho → Entrega
- Sobre nosotros: historia, misión, visión y valores
- FAQ con acordeón interactivo
- Formulario de contacto con validaciones y guardado en Google Sheets
- Diseño responsive para escritorio y móvil

### Cotizador de envíos
- Stepper de 3 pasos guiado
- Selección de destino por categorías: misma ciudad, otro departamento, Centroamérica, Sudamérica y México, Norte América, Europa
- Campos de peso y dimensiones opcionales con validaciones
- Selección de nivel de servicio: estándar o exprés
- Extras: recolección a domicilio y seguro contra pérdida
- Resultado con desglose de costo base, costo por peso, extras y total estimado
- Tiempo estimado de entrega según destino y nivel de servicio

---

## Decisiones técnicas

**Vite sobre Create React App** — Vite ofrece tiempos de build significativamente menores y está activamente mantenido. CRA está deprecado desde el 2023.

**CSS puro sin frameworks** — Se utilizaron variables CSS como (`--color-primary`, `--color-accent`, etc.) para mantener consistencia visual en todo el proyecto.

**React Router v6** — El manejo de rutas del lado del cliente con dos rutas principales: `/` para el landing y `/cotizador` para el cotizador. Se agregó `public/_redirects` para que Netlify sirva correctamente las rutas de una SPA.

**Google Apps Script para contacto** — Al ser un sitio completamente estático sin backend, se utilizó Google Apps Script como webhook. El formulario envía los datos en formato JSON y el script los guarda en Google Sheets. El teléfono se guarda con un apóstrofe inicial para evitar que Sheets lo interprete como fórmula.

**Lógica del cotizador separada** — Las tarifas y tiempos se aislaron en `utils/cotizadorLogic.js` para facilitar futuras modificaciones de precios sin tocar los componentes de UI.

**Netlify con `npm install && npm run build`** — Se configuró así en `netlify.toml` para garantizar que las `devDependencies` (incluyendo Vite) se instalen antes del build, evitando el error `vite: not found` (exit code 127).

---

## Despliegue

El sitio está desplegado en Netlify con integración continua desde GitHub. Cada push a la rama `main` dispara un nuevo deploy automáticamente.

**Build command:** `npm install && npm run build`  
**Publish directory:** `dist`

---

## Autores

| Nombre | Carné |
|---|---|
| Katherine Andrea Mayen Rivera | 1129222 |
| Javier Estuardo Godinez Gudiel | 1179222 |
  
Universidad Rafael Landívar 
