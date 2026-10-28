# Lion Heart Capital: plataforma de inversión inteligente 🦁

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)

SaaS orientado a **democratizar la educación financiera y la gestión de activos**. Además de mostrar inversiones, la plataforma busca funcionar como un **asesor inteligente**: perfila al usuario según su tolerancia al riesgo y le recomienda estrategias acordes a ese perfil.

> **Estado:** MVP en desarrollo. El sitio institucional y la página de contacto por servicio están listos; el dashboard del inversionista es una maqueta con datos simulados.

## Funcionalidades

| Sección | Ruta | Estado |
|---|---|---|
| **Landing** con carrusel, misión y visión | `/` | ✅ Lista |
| **¿Quiénes somos?** y **Servicios** | `/#quienes-somos`, `/#servicios` | ✅ Lista |
| **Contacto por servicio** (el servicio elegido llega por query string) | `/contacto?servicio=…` | ✅ Lista |
| **Dashboard del inversionista** (portafolio, perfil, menú de módulos) | `/dashboard` | 🧪 Maqueta |
| Perfilamiento de riesgo, IA Advisor, juegos financieros | — | 🗺️ Planeado |

## Tecnologías

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** con validación estricta en el build
- **Tailwind CSS 4**
- **Supabase** como backend (cliente en `lib/supabase.ts`)

## Cómo ejecutarlo

Requisitos: Node.js 20 o superior.

```bash
git clone https://github.com/yeimy07/inversor_finance_app.git
cd inversor_finance_app
npm install
cp .env.example .env.local   # completa con las credenciales de tu proyecto Supabase
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto en Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave pública (*anon*) del proyecto |

### Scripts

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (incluye verificación de tipos) |
| `npm start` | Sirve el build de producción |
| `npm run lint` | ESLint |

## Estructura

```
inversor_finance_app/
├── app/
│   ├── page.tsx          # Landing: carrusel, misión y visión
│   ├── quieneSomos.tsx   # Sección "¿Quiénes somos?"
│   ├── servicios.tsx     # Tarjetas de servicios → /contacto
│   ├── contacto/         # Página de contacto por servicio
│   ├── dashboard/        # Panel del inversionista (maqueta)
│   └── layout.tsx
├── lib/supabase.ts       # Cliente de Supabase
└── public/               # Imágenes y logotipos
```

## Hoja de ruta

- [ ] Cuestionario de perfil de riesgo (conservador / moderado / agresivo) guardado en Supabase.
- [ ] Autenticación de usuarios.
- [ ] Dashboard con datos reales de mercado (café, oro, índices).
- [ ] Módulo de recomendaciones con IA según el perfil.
- [ ] Diseño responsive para móvil.

## Despliegue

El proyecto está preparado para desplegarse en [Vercel](https://vercel.com/): importa el repositorio y configura las variables de entorno de Supabase.

## Autora

**Yeimy Alejandra Sánchez Gil**, ingeniera informática · Medellín, Colombia
[GitHub @yeimy07](https://github.com/yeimy07)
