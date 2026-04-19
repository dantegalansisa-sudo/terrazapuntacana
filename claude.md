# CLAUDE.md — Terraza Bar & Car Wash Paseo de Las Palmas
## Proyecto NEXIX Tech Studio — Bar · Car Wash · Entretenimiento · Punta Cana, RD
## ⚡ SKILL: https://github.com/Leonxlnx/taste-skill

---

## 1. DATOS REALES DEL CLIENTE

```
Empresa:      Terraza Bar & Car Wash Paseo de Las Palmas
Subtítulo:    Car Wash · Música · Ambiente · Buena Vibra
Tagline:      "¡Ven, lava tu carro y disfruta el momento!"
Instagram:    @terrazabarpaseo | 1,161 seguidores | 84 publicaciones
Teléfono:     (809) 778-8888
Dirección:    Calle Feliz Sánchez, Camino Ciudad La Palma, Punta Cana 23302
Google Maps:  maps.app.goo.gl/3YoAQgSiUvAWCyQs7
Google Rating: 5.0 ⭐ (2 opiniones)
Horario:      Abierto · Cierra a las 12:00 AM
Servicios:    Terraza Bar · Car Wash · DJ en Vivo · Karaoke · Música en Vivo
Logo:         /public/images/logo/paseo-logo.png
```

---

## 2. CONCEPTO VISUAL — "TROPICAL NIGHT"

**El negocio:** Una experiencia única en Punta Cana — lavas tu carro,
te tomas un cóctel en la terraza y disfrutas de DJ en vivo o karaoke.
No es solo un bar, no es solo un car wash — es una experiencia completa.

**El reto de diseño:**
Negocio nocturno con colores CLAROS y elegantes.
Solución: paleta tropical cálida — crema + naranja + verde palma.
Feel: resort boutique tropical de noche, no oscuro ni pesado.

**Referentes:** Nobu Restaurant · Soho House · Nikki Beach
**Tipografía:** Serif elegante para títulos + sans limpio para cuerpo

---

## 3. PALETA — TROPICAL NIGHT LIGHT

```css
:root {
  /* Fondos cálidos — NO negro */
  --bg:           #FFFAF4;   /* crema muy cálido */
  --bg-surface:   #FFF5E9;   /* naranja muy pálido */
  --bg-warm:      #FEF0DC;   /* crema dorado */
  --bg-dark:      #1C1008;   /* marrón muy oscuro — para hero overlay */
  --bg-night:     #0D1F0A;   /* verde noche profundo — footer */

  /* Naranja del logo — acento principal */
  --orange:       #E8640A;
  --orange-bright:#F07020;
  --orange-pale:  rgba(232,100,10,0.1);
  --orange-glow:  rgba(232,100,10,0.15);

  /* Verde palma — acento secundario */
  --green:        #2D5016;
  --green-mid:    #3D6B20;
  --green-light:  #5A9E35;
  --green-pale:   rgba(45,80,22,0.08);

  /* Dorado — ambiente nocturno cálido */
  --gold:         #D4A853;
  --gold-dim:     rgba(212,168,83,0.6);
  --gold-pale:    rgba(212,168,83,0.1);

  /* Texto */
  --text:         #1A1208;   /* marrón muy oscuro — no negro puro */
  --text-sec:     #5C4A2A;   /* marrón medio */
  --text-muted:   #A0896A;   /* beige */
  --text-white:   #FFFAF4;

  /* Bordes */
  --border:         rgba(26,18,8,0.08);
  --border-warm:    rgba(212,168,83,0.2);
  --border-orange:  rgba(232,100,10,0.25);

  /* Gradientes */
  --gradient-hero:    linear-gradient(
    to bottom,
    rgba(13,31,10,0.2) 0%,
    rgba(28,16,8,0.55) 50%,
    rgba(13,31,10,0.85) 100%
  );
  --gradient-orange:  linear-gradient(135deg, #E8640A 0%, #F09030 100%);
  --gradient-green:   linear-gradient(135deg, #2D5016 0%, #3D6B20 100%);
  --gradient-warm:    linear-gradient(160deg, #FFFAF4 0%, #FEF0DC 100%);
  --gradient-card:    linear-gradient(145deg, #FFFFFF 0%, #FFFAF4 100%);
  --gradient-night:   linear-gradient(160deg, #1C1008 0%, #0D1F0A 100%);

  /* Sombras */
  --shadow-card:    0 4px 24px rgba(26,18,8,0.08);
  --shadow-hover:   0 16px 48px rgba(26,18,8,0.15);
  --shadow-orange:  0 8px 32px rgba(232,100,10,0.25);
  --shadow-warm:    0 8px 32px rgba(212,168,83,0.2);
}
```

---

## 4. TIPOGRAFÍAS — TROPICAL ELEGANCE

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400&display=swap" rel="stylesheet">
```

```css
:root {
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans:  'DM Sans', system-ui, sans-serif;
  --font-mono:  'DM Mono', monospace;
}

/* Hero title — serif elegante italic */
.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(56px, 9vw, 120px);
  font-weight: 400;
  font-style: italic;
  letter-spacing: -1px;
  line-height: 0.95;
  color: var(--text-white);
}

/* Section titles */
.section-title {
  font-family: var(--font-serif);
  font-size: clamp(40px, 5vw, 68px);
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1;
  color: var(--text);
}

/* Label técnico */
.label-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--orange);
  display: inline-flex; align-items: center; gap: 10px;
}
.label-tag::before {
  content: ''; width: 24px; height: 1px;
  background: var(--orange); display: block;
}
```

---

## 5. ESPACIADO NEXIX

```css
:root {
  --section-padding:   120px 0;
  --container-width:   1280px;
  --container-padding: 0 64px;
}
@media (max-width: 768px) {
  :root { --section-padding: 72px 0; --container-padding: 0 20px; }
}
```

---

## 6. ESTRUCTURA DE ARCHIVOS

```
src/
├── components/
│   ├── CustomCursor.tsx
│   ├── RevealText.tsx
│   ├── MagneticButton.tsx
│   ├── AnimatedCounter.tsx
│   ├── ScrollProgress.tsx
│   ├── ServiceCard.tsx
│   ├── GalleryGrid.tsx
│   └── WhatsAppButton.tsx
├── hooks/
│   ├── useMouse.ts
│   └── useScrollProgress.ts
├── sections/
│   ├── HeroSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ServicesSection.tsx
│   ├── GallerySection.tsx
│   ├── EventsSection.tsx
│   ├── CarWashSection.tsx
│   ├── LocationSection.tsx
│   └── FooterSection.tsx
├── App.tsx
├── App.css
└── index.css
```

---

## 7. SECCIONES DETALLADAS

---

### 7.1 NAVBAR

```tsx
// Fondo: transparente sobre hero
// Al scroll: rgba(255,250,244,0.96) + blur + sombra cálida
// Logo: /public/images/logo/paseo-logo.png
// Links: Experiencia | Servicios | Eventos | Car Wash | Ubicación
// CTA: "Reservar Mesa" → naranja, pill, MagneticButton
// Sticky

.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 64px; height: 72px;
  display: flex; align-items: center; justify-content: space-between;
  transition: background 0.4s, box-shadow 0.4s;
}
.navbar--scrolled {
  background: rgba(255,250,244,0.96);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 20px rgba(26,18,8,0.08);
}
.navbar__logo {
  font-family: var(--font-serif);
  font-size: 20px; font-weight: 700; font-style: italic;
  color: var(--text-white); transition: color 0.3s;
}
.navbar--scrolled .navbar__logo { color: var(--text); }
```

---

### 7.2 HERO SECTION — IMAGEN COMPLETA + SERIF ELEGANTE

```tsx
<section className="hero">

  {/* Imagen full screen de la terraza */}
  <div className="hero__bg">
    <img
      src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1800&q=90"
      alt="Terraza Bar Paseo de Las Palmas"
    />
    <div className="hero__overlay" />
  </div>

  {/* Partículas de luz — bokeh effect CSS */}
  <div className="hero__bokeh">
    <div className="bokeh bokeh--1" />
    <div className="bokeh bokeh--2" />
    <div className="bokeh bokeh--3" />
  </div>

  <div className="hero__content section-container">

    <motion.span className="label-tag"
      style={{color:'var(--gold)', marginBottom:'28px', display:'block'}}>
      Punta Cana · República Dominicana
    </motion.span>

    {/* Título serif italic elegante */}
    <RevealText tag="h1" className="hero-title" delay={0.2}>
      Donde el Ambiente
    </RevealText>
    <RevealText tag="h1" className="hero-title hero-title--accent" delay={0.35}>
      Es la Experiencia
    </RevealText>

    {/* Línea dorada */}
    <motion.div className="hero__line"
      initial={{ width: 0 }} animate={{ width: 100 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    />

    <motion.p className="hero__subtitle">
      Terraza Bar · Car Wash · DJ en Vivo · Karaoke
    </motion.p>

    <motion.div className="hero__actions">
      <MagneticButton className="btn-orange" href="tel:8097788888">
        📞 Reservar Mesa
      </MagneticButton>
      <MagneticButton className="btn-ghost-white" href="#servicios">
        Explorar →
      </MagneticButton>
    </motion.div>

    {/* Info rápida */}
    <motion.div className="hero__info">
      <div className="info-item">
        <span>🕐</span>
        <span>Hasta las 12:00 AM</span>
      </div>
      <div className="info-sep" />
      <div className="info-item">
        <span>📍</span>
        <span>Camino Ciudad La Palma, Punta Cana</span>
      </div>
      <div className="info-sep" />
      <div className="info-item">
        <span>⭐</span>
        <span>5.0 en Google</span>
      </div>
    </motion.div>

  </div>

  {/* Scroll indicator */}
  <motion.div className="hero__scroll"
    animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
    <div className="scroll-line" />
    <span className="label-tag" style={{fontSize:'9px', color:'rgba(255,250,244,0.5)'}}>
      SCROLL
    </span>
  </motion.div>

</section>
```

```css
.hero {
  min-height: 100vh; position: relative; overflow: hidden;
  display: flex; align-items: flex-end; padding-bottom: 80px;
  background: var(--bg-night);
}
.hero__bg { position: absolute; inset: 0; }
.hero__bg img {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.55) saturate(1.1);
}
.hero__overlay {
  position: absolute; inset: 0;
  background: var(--gradient-hero);
}
/* Bokeh lights */
.bokeh {
  position: absolute; border-radius: 50%;
  filter: blur(60px); opacity: 0.15; pointer-events: none;
  animation: float-bokeh 8s ease-in-out infinite;
}
.bokeh--1 { width: 300px; height: 300px; background: var(--orange); top: 20%; right: 15%; animation-delay: 0s; }
.bokeh--2 { width: 200px; height: 200px; background: var(--gold); top: 60%; right: 30%; animation-delay: 3s; }
.bokeh--3 { width: 250px; height: 250px; background: var(--green-light); top: 40%; left: 10%; animation-delay: 6s; }
@keyframes float-bokeh {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -20px) scale(1.1); }
  66% { transform: translate(-15px, 15px) scale(0.95); }
}
.hero__content { position: relative; z-index: 3; padding-top: 80px; }
.hero-title { color: var(--text-white); display: block; }
.hero-title--accent {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255,250,244,0.7);
}
.hero__line {
  height: 2px; background: var(--gradient-orange);
  margin: 32px 0; border-radius: 2px;
}
.hero__subtitle {
  font-family: var(--font-mono); font-size: 13px;
  letter-spacing: 4px; text-transform: uppercase;
  color: rgba(255,250,244,0.6); margin-bottom: 40px;
}
.hero__info {
  display: flex; align-items: center; gap: 24px;
  margin-top: 48px; padding-top: 32px;
  border-top: 1px solid rgba(255,250,244,0.15);
}
.info-item {
  display: flex; align-items: center; gap: 8px;
  font-size: 13px; color: rgba(255,250,244,0.65);
  font-family: var(--font-sans);
}
.info-sep { width: 1px; height: 20px; background: rgba(255,250,244,0.2); }
.hero__scroll {
  position: absolute; right: 64px; bottom: 48px;
  display: flex; flex-direction: column; align-items: center;
  gap: 12px; z-index: 3;
}
.scroll-line {
  width: 1px; height: 50px;
  background: linear-gradient(to bottom, var(--gold), transparent);
}
.hero__actions { display: flex; gap: 16px; align-items: center; }
```

---

### 7.3 EXPERIENCE SECTION — QUIÉNES SOMOS

```tsx
// Fondo: var(--bg-warm) — crema dorado
// Layout: texto izquierda + imagen derecha

<span className="label-tag">La Experiencia</span>
<RevealText tag="h2" className="section-title">
  Más que un Bar,<br />
  un Destino
</RevealText>

<p className="exp__body">
  En Paseo de Las Palmas encontrarás el lugar perfecto
  para relajarte después de un largo día. Nuestra terraza
  te recibe con buena música, cócteles artesanales y un
  ambiente que te hace sentir en casa.
</p>
<p className="exp__body">
  Y mientras disfrutas, nosotros nos encargamos de dejar
  tu carro reluciente. Así de simple, así de perfecto.
</p>

// Stats:
const stats = [
  { number: 5, suffix: '.0 ⭐', label: 'Rating en Google' },
  { number: 1161, suffix: '+', label: 'Seguidores Instagram' },
  { number: 7, suffix: ' días', label: 'Abierto toda la semana' },
];

// Imagen: foto de la terraza del local
// /public/images/terraza.jpg
// Placeholder: https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=700&q=85
```

---

### 7.4 SERVICES SECTION

```tsx
// ID: servicios
// Fondo: var(--bg) blanco
// Grid 2x2 — 4 servicios principales

const services = [
  {
    icon: '🍹',
    title: 'Terraza Bar',
    desc: 'Cócteles artesanales, bebidas nacionales e internacionales. Asientos en terraza con la mejor vibra de Punta Cana.',
    features: ['Cócteles Premium', 'Bebidas Nacionales', 'Ambiente Exclusivo'],
    color: 'var(--orange)',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',
  },
  {
    icon: '🚗',
    title: 'Car Wash',
    desc: 'Lava tu carro mientras disfrutas de la terraza. Servicio profesional de lavado y detailing.',
    features: ['Lavado Exterior', 'Detailing Interior', 'Aspirado Incluido'],
    color: 'var(--green)',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80',
  },
  {
    icon: '🎧',
    title: 'DJ en Vivo',
    desc: 'Los mejores DJs de la región animan tu noche con lo mejor de la música electrónica, salsa y reggaetón.',
    features: ['DJs Residentes', 'Música en Vivo', 'Noches Temáticas'],
    color: 'var(--gold)',
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80',
  },
  {
    icon: '🎤',
    title: 'Karaoke',
    desc: 'Noches de karaoke donde tú eres la estrella. Amplio repertorio en español e inglés.',
    features: ['Sábados de Karaoke', 'Repertorio Amplio', 'Premios Especiales'],
    color: 'var(--orange)',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80',
  },
];

// Cards con imagen + overlay + contenido
// Hover: imagen scale(1.05), borde naranja
```

```css
.services-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 24px; margin-top: 64px;
}
.service-card {
  border-radius: 20px; overflow: hidden; position: relative;
  border: 1px solid var(--border); box-shadow: var(--shadow-card);
  transition: transform 0.4s, box-shadow 0.4s;
}
.service-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-hover); }
.service-card__img { width: 100%; height: 220px; object-fit: cover; transition: transform 0.5s; }
.service-card:hover .service-card__img { transform: scale(1.05); }
.service-card__body { padding: 28px; background: var(--gradient-card); }
.service-card__icon { font-size: 32px; margin-bottom: 12px; display: block; }
.service-card__title {
  font-family: var(--font-serif); font-size: 28px; font-weight: 500;
  color: var(--text); margin-bottom: 10px;
}
.service-card__desc { font-size: 15px; line-height: 1.7; color: var(--text-sec); margin-bottom: 16px; }
.service-card__features { display: flex; flex-wrap: wrap; gap: 8px; }
.feature-chip {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px;
  text-transform: uppercase; color: var(--orange);
  background: var(--orange-pale); border: 1px solid var(--border-orange);
  padding: 4px 10px; border-radius: 100px;
}
```

---

### 7.5 GALLERY SECTION

```tsx
// Fondo: var(--bg-surface)
// Masonry grid asimétrico — estilo editorial

<span className="label-tag">Galería</span>
<RevealText tag="h2" className="section-title">
  Momentos que<br />Quedan
</RevealText>

// 6 imágenes en grid asimétrico:
// Col 1: 1 imagen grande (doble alto)
// Col 2: 2 imágenes medianas
// Col 3: 1 imagen grande + 1 pequeña

// Imágenes placeholder (reemplazar con fotos reales del local):
const galleryImages = [
  'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=600&q=80', // terraza bar
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80', // bar noche
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',    // cocteles
  'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80', // dj
  'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80', // car wash
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80', // karaoke
];

// Hover: overlay naranja semitransparente + ícono zoom
```

```css
.gallery-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr;
  grid-template-rows: 280px 280px;
  gap: 12px; margin-top: 64px;
}
.gallery-item { border-radius: 16px; overflow: hidden; position: relative; cursor: none; }
.gallery-item:first-child { grid-row: 1 / 3; } /* doble alto */
.gallery-item img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.5s ease;
}
.gallery-item:hover img { transform: scale(1.06); }
.gallery-overlay {
  position: absolute; inset: 0;
  background: rgba(232,100,10,0.0);
  display: flex; align-items: center; justify-content: center;
  transition: background 0.3s;
}
.gallery-item:hover .gallery-overlay { background: rgba(232,100,10,0.25); }
```

---

### 7.6 EVENTS SECTION

```tsx
// Fondo: var(--gradient-night) — noche tropical elegante
// Cards de eventos recurrentes

<span className="label-tag" style={{color:'var(--gold)'}}>Agenda</span>
<RevealText tag="h2" className="section-title" style={{color:'var(--text-white)'}}>
  Noches que No<br />Olvidarás
</RevealText>

const events = [
  {
    day: 'Viernes',
    title: 'DJ Night',
    desc: 'Los mejores DJs de Punta Cana. Electrónica, reggaetón y lo mejor del momento.',
    icon: '🎧',
    time: 'Desde las 8:00 PM',
    badge: 'Cada Viernes',
  },
  {
    day: 'Sábado',
    title: 'Sábado de Karaoke',
    desc: 'Tu noche, tu voz. Karaoke en vivo con premios y diversión para todos.',
    icon: '🎤',
    time: 'Desde las 7:00 PM',
    badge: 'Cada Sábado',
  },
  {
    day: 'Diario',
    title: 'Happy Hour',
    desc: 'Bebidas a precio especial mientras lavas tu carro. La mejor combinación.',
    icon: '🍹',
    time: '4:00 PM – 7:00 PM',
    badge: 'Todos los días',
  },
];

// Cards oscuras con borde dorado sutil
// Día en serif grande dorado
// Badge naranja en corner
```

---

### 7.7 CAR WASH SECTION

```tsx
// Fondo: var(--bg-warm)
// Layout: imagen izquierda + info derecha

<span className="label-tag">Car Wash</span>
<RevealText tag="h2" className="section-title">
  Tu Carro Reluciente,<br />
  Tú Relajado
</RevealText>

<p>
  La combinación perfecta: deja tu carro en nuestras manos
  y siéntate en la terraza a disfrutar. Cuando termines tu
  trago, tu carro estará como nuevo.
</p>

const carWashServices = [
  { icon: '🚗', title: 'Lavado Exterior', desc: 'Lavado completo a presión' },
  { icon: '🧹', title: 'Aspirado Interior', desc: 'Limpieza profunda interior' },
  { icon: '✨', title: 'Detailing', desc: 'Acabado brillante premium' },
  { icon: '🪟', title: 'Vidrios', desc: 'Cristales impecables' },
];

// Lista con íconos en naranja
// CTA: "Consultar Precios" → WhatsApp
```

---

### 7.8 LOCATION SECTION

```tsx
// ID: ubicacion
// Fondo: var(--bg)
// 2 cols: mapa embed + info

const info = {
  address:  'Calle Feliz Sánchez, Camino Ciudad La Palma, Punta Cana 23302',
  phone:    '(809) 778-8888',
  hours:    'Todos los días hasta las 12:00 AM',
  ig:       '@terrazabarpaseo',
  maps:     'maps.app.goo.gl/3YoAQgSiUvAWCyQs7',
  rating:   '5.0 ⭐ en Google',
};

// Servicios disponibles como chips:
// Asientos en terraza · Música en vivo · Karaoke · Car Wash
```

---

### 7.9 FOOTER

```tsx
// Fondo: var(--bg-night) — verde noche muy oscuro
// Borde top: 1px naranja tenue

// Col 1: Logo + tagline + redes
// Col 2: Servicios (links)
// Col 3: Contacto + horario
// Col 4: Ubicación + Google Maps link

// Bottom: © 2025 Terraza Bar & Car Wash Paseo de Las Palmas
// Diseñado por NEXIX Tech Studio
```

---

## 8. CSS GLOBAL

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; cursor: none !important; }
html { scroll-behavior: smooth; scrollbar-width: thin; scrollbar-color: var(--orange) var(--bg-surface); }
body { font-family: var(--font-sans); background: var(--bg); color: var(--text); overflow-x: hidden; -webkit-font-smoothing: antialiased; }
::selection { background: var(--orange); color: white; }

/* Cursor — naranja tropical */
.cursor-dot {
  position: fixed; top: 0; left: 0; width: 8px; height: 8px;
  border-radius: 50%; background: var(--orange);
  pointer-events: none; z-index: 99999;
}
.cursor-ring {
  position: fixed; top: 0; left: 0; width: 36px; height: 36px;
  border-radius: 50%; border: 1.5px solid var(--orange);
  pointer-events: none; z-index: 99998; opacity: 0.5;
  transition: width 0.3s, height 0.3s, opacity 0.3s;
}
.cursor-ring.cursor--hover { width: 54px; height: 54px; opacity: 1; background: var(--orange-glow); }

.scroll-progress {
  position: fixed; top: 0; left: 0; height: 3px;
  background: var(--gradient-orange);
  box-shadow: 0 0 10px rgba(232,100,10,0.8);
  z-index: 9997; transform-origin: left;
}

.section-container { max-width: var(--container-width); margin: 0 auto; padding: var(--container-padding); }

/* Botones */
.btn-orange {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--gradient-orange); color: white;
  font-family: var(--font-sans); font-size: 15px; font-weight: 600;
  padding: 15px 36px; border-radius: 100px; text-decoration: none;
  box-shadow: var(--shadow-orange);
  transition: transform 0.25s, box-shadow 0.25s;
}
.btn-orange:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(232,100,10,0.4); }

.btn-ghost-white {
  font-family: var(--font-sans); font-size: 15px; font-weight: 500;
  color: rgba(255,250,244,0.8); text-decoration: none;
  border-bottom: 1px solid rgba(255,250,244,0.3); padding-bottom: 4px;
  transition: color 0.2s, border-color 0.2s;
}
.btn-ghost-white:hover { color: var(--gold); border-color: var(--gold); }

.btn-outline {
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent; color: var(--orange);
  font-family: var(--font-sans); font-size: 15px; font-weight: 600;
  padding: 13px 32px; border-radius: 100px; text-decoration: none;
  border: 2px solid var(--orange);
  transition: background 0.25s, color 0.25s;
}
.btn-outline:hover { background: var(--orange); color: white; }

/* WhatsApp */
.whatsapp-float {
  position: fixed; bottom: 28px; right: 28px;
  width: 58px; height: 58px; border-radius: 50%;
  background: #25D366; display: flex; align-items: center;
  justify-content: center; font-size: 26px; text-decoration: none;
  box-shadow: 0 4px 24px rgba(37,211,102,0.4); z-index: 9999;
  transition: transform 0.3s;
}
.whatsapp-float:hover { transform: scale(1.1); }

@media (max-width: 768px) {
  * { cursor: auto !important; }
  .cursor-dot, .cursor-ring { display: none; }
  .services-grid { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
  .gallery-item:first-child { grid-row: auto; }
  .hero__scroll { display: none; }
  .info-sep { display: none; }
  .hero__info { flex-direction: column; gap: 12px; }
}
```

---

## 9. REGLAS ABSOLUTAS NEXIX

1. `padding: 120px 0` todas las secciones
2. `max-width: 1280px; padding: 0 64px` contenedores
3. **NUNCA Tailwind**
4. **Paleta CLARA** — fondos crema/naranja pálido, NO negro
5. **Hero** — imagen full screen con overlay suave, serif italic elegante
6. **Bokeh lights** CSS en hero — naranja + dorado + verde
7. **Cursor naranja** tropical
8. **ScrollProgress naranja** con glow
9. **Playfair Display serif** en todos los títulos
10. **WhatsApp** CTA principal — tel: 8097788888
11. `npm run build` sin errores TypeScript

---

## 10. INSTRUCCIÓN PARA CLAUDE CODE

```
Use this skill https://github.com/Leonxlnx/taste-skill

Lee el CLAUDE.md completo.
Proyecto: Terraza Bar & Car Wash Paseo de Las Palmas — Punta Cana, RD
Concepto: TROPICAL NIGHT — elegante, cálido, claro, vibrante
Paleta: Crema #FFFAF4 + Naranja #E8640A + Verde #2D5016 + Dorado #D4A853
Tipografía: Playfair Display (serif) + DM Sans + DM Mono

ORDEN DE CONSTRUCCIÓN:

1. index.html → SEO + Google Fonts (Playfair Display + DM Sans + DM Mono)
   Title: "Terraza Bar & Car Wash | Paseo de Las Palmas — Punta Cana"

2. index.css → variables CSS completas + reset + cursor naranja

3. hooks/useMouse.ts + hooks/useScrollProgress.ts

4. components/ScrollProgress.tsx → naranja 3px con glow
5. components/CustomCursor.tsx → dot naranja + ring naranja
6. components/RevealText.tsx → word mask reveal serif
7. components/MagneticButton.tsx → radio 100px
8. components/AnimatedCounter.tsx
9. components/WhatsAppButton.tsx → flotante verde

10. sections/HeroSection.tsx
    → Imagen full: https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1800&q=90
    → Overlay: gradiente oscuro suave de arriba a abajo
    → 3 bokeh lights CSS: naranja + dorado + verde (blur 60px, opacity 0.15)
    → Título Playfair italic 2 líneas:
       "Donde el Ambiente" — blanco
       "Es la Experiencia" — outline blanco (text-stroke)
    → Línea naranja 100px animada
    → Subtítulo mono: "Terraza Bar · Car Wash · DJ en Vivo · Karaoke"
    → 2 CTAs: "📞 Reservar Mesa" naranja + "Explorar →" ghost blanco
    → Info row: 🕐 horario · 📍 dirección · ⭐ rating
    → Scroll indicator derecha con línea dorada

    ↓ DETENTE. Muéstrame el Hero. Espera aprobación.

Continuación:
11. ExperienceSection → quiénes somos + stats + imagen terraza
12. ServicesSection → 4 servicios en grid 2x2
13. GallerySection → masonry asimétrico 6 fotos
14. EventsSection → 3 eventos noche tropical oscura
15. CarWashSection → fondo crema + lista de servicios
16. LocationSection → mapa + info contacto
17. FooterSection → verde noche + borde naranja
18. App.tsx → integrar todo
19. npm run build → cero errores TypeScript
```

---

*NEXIX Tech Studio — Terraza Bar & Car Wash Paseo de Las Palmas*
*Concepto: TROPICAL NIGHT*
*Crema #FFFAF4 + Naranja #E8640A + Verde #2D5016 + Dorado #D4A853*
*Playfair Display + DM Sans + DM Mono*
*Skill: https://github.com/Leonxlnx/taste-skill*