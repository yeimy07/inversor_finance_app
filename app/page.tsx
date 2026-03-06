'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Servicios from './servicios';
import QuienesSomos from './quieneSomos';

// --- CONFIGURACIÓN DEL CARRUSEL DE IMAGENES ---
const SLIDES = [
  { id: 1, imagen: "/leon-gold.jpg", titulo: "Inversiones Inteligentes para un Futuro Sostenible", subtitulo: "Donde la Tecnología y la Estrategia Maximizan tu Capital", size: '45%' },
  { id: 2, imagen: "/imag-1.jpg", titulo: "Interés compuesto", subtitulo: "El interés compuesto es la recompensa para quienes saben esperar lo que otros quieren hoy", size: 'cover' },
  { id: 3, imagen: "/imag-2.jpg", titulo: "Decisiones de Valor", subtitulo: "Tu futuro financiero comienza con una decisión hoy.", size: 'cover' },
  { id: 4, imagen: "/imag-3.jpg", titulo: "Conocimiento Aplicado", subtitulo: "Invertir en conocimiento produce los mejores intereses.", size: 'cover' },
  { id: 5, imagen: "/imag-4.jpg", titulo: "Seguridad Patrimonial", subtitulo: "Liderazgo y estrategia para proteger tu patrimonio.", size: 'cover' }
];

// Asumiendo que PREGUNTAS está definido en otro lugar o aquí, lo mantengo como referencia lógica
const PREGUNTAS = []; 

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0); 
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', correo: '', respuestas: {} });
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  // --- LÓGICA DEL CARRUSEL ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: 'white', fontFamily: "'Times New Roman', serif", scrollBehavior: 'smooth' }}>
      
      {/* SECCIÓN 1: PORTADA CON CARRUSEL */}
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${slide.imagen}")`,
              backgroundSize: slide.size,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transition: 'opacity 1.5s ease-in-out',
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 1 : 0,
            }}
          />
        ))}

        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* NAV SIN BOTÓN ACCEDER */}
          <nav style={navStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="/leon-gold.jpg" alt="Logo" style={{ width: '45px', borderRadius: '50%', border: '1px solid #D4AF37' }} />
              <div>
                <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#D4AF37' }}>Lion Heart</div>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#c5a059' }}>CAPITAL S.A.S</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '35px', fontSize: '15px', alignItems: 'center' }}>
              <a href="#quienes-somos" style={{ color: '#f3e5ab', textDecoration: 'none' }}>¿Quiénes somos?</a>
              <a href="#servicios" style={{ color: '#f3e5ab', textDecoration: 'none' }}>Nuestros Servicios</a>
              <a href="#nosotros" style={{ color: '#f3e5ab', textDecoration: 'none' }}>Nosotros</a>
            </div>
          </nav>

          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
            <h1 style={{ fontSize: '65px', color: '#f3e5ab', textShadow: '2px 2px 15px black' }}>
              {SLIDES[currentSlide].titulo}
            </h1>
            <p style={{ fontSize: '22px', color: '#ddd', fontStyle: 'italic', marginBottom: '40px' }}>
              {SLIDES[currentSlide].subtitulo}
            </p>
            <button onClick={() => setShowModal(true)} style={outlineButtonStyle}> EMPIEZA AHORA </button>
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
              {SLIDES.map((_, i) => (
                <div 
                  key={i} 
                  onClick={() => setCurrentSlide(i)}
                  style={{ 
                    width: '100px', height: '10px', borderRadius: '50%', 
                    backgroundColor: currentSlide === i ? '#D4AF37' : '#555',
                    cursor: 'pointer', transition: '0.3s', width: '10px'
                  }} 
                />
              ))}
            </div>
          </main>
        </div>
      </div>

      <QuienesSomos />
      <Servicios />

      <section id="nosotros" style={{ padding: '60px 60px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div style={cardStyle}>
            <h2 style={titleUnderline}>MISIÓN</h2>
            <p style={cardTextStyle}>
              En Lion Heart Capital S.A.S., somos una empresa innovadora en el sector financiero que combina el poder de las nuevas tecnologías con un enfoque estratégico para ofrecer soluciones de inversión inteligentes.
            </p>
          </div>
          <div style={cardStyle}>
            <h2 style={titleUnderline}>VISIÓN</h2>
            <p style={cardTextStyle}>
              Ser reconocidos como líderes en el mercado global de finanzas e inversiones, integrando tecnología de vanguardia e inteligencia artificial para transformar la manera en que las personas gestionan su capital.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- ESTILOS ---
const navStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: 'rgba(0,0,0,0.85)', borderBottom: '1px solid #D4AF37' };
const outlineButtonStyle = { background: 'transparent', border: '2px solid #D4AF37', padding: '18px 50px', color: '#D4AF37', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' };
const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(10px)' };
const modalContentStyle = { backgroundColor: '#0a0a0a', padding: '40px', borderRadius: '15px', border: '1px solid #D4AF37', width: '450px', position: 'relative' };
const goldActionButton = { width: '100%', padding: '12px', borderRadius: '5px', border: 'none', background: '#D4AF37', color: 'black', fontWeight: 'bold', cursor: 'pointer' };
const inputStyle = { padding: '12px', borderRadius: '5px', border: '1px solid #333', background: '#111', color: 'white', outline: 'none' };
const optionButtonStyle = { padding: '15px', textAlign: 'left', borderRadius: '8px', border: '1px solid #222', background: '#151515', color: '#ddd', cursor: 'pointer' };
const closeButtonStyle = { position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#D4AF37', fontSize: '20px', cursor: 'pointer' };
const cardStyle = { padding: '45px', backgroundColor: 'rgba(15, 15, 15, 0.8)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)', backdropFilter: 'blur(10px)' };
const titleUnderline = { color: '#D4AF37', borderBottom: '1px solid #D4AF37', display: 'inline-block', marginBottom: '20px' };
const cardTextStyle = { fontSize: '16px', lineHeight: '1.8', textAlign: 'justify' };


