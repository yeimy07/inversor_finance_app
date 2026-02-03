'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// --- CONFIGURACIÓN DE PREGUNTAS DEL TEST PARA CALCULAR EL PERFIL DE RIESGO ---
const PREGUNTAS = [
  {
    id: 1,
    titulo: "¿Para qué quieres invertir tu dinero?",
    opciones: [
      { id: 'A', texto: "Proteger mis ahorros de la inflación", pts: 1 },
      { id: 'B', texto: "Comprar algo a mediano plazo (casa/estudio)", pts: 2 },
      { id: 'C', texto: "Aumentar mi patrimonio significativamente", pts: 3 }
    ]
  },
  {
    id: 2,
    titulo: "¿En cuánto tiempo planeas retirar este dinero?",
    opciones: [
      { id: 'A', texto: "En menos de un año", pts: 1 },
      { id: 'B', texto: "De 1 a 5 años", pts: 2 },
      { id: 'C', texto: "Más de 5 años", pts: 3 }
    ]
  },
  {
    id: 3,
    titulo: "Si tu inversión cae un 20% en un mes, ¿qué harías?",
    opciones: [
      { id: 'A', texto: "Me asusto y retiro todo", pts: 0 },
      { id: 'B', texto: "Me preocupo, pero espero recuperación", pts: 4 },
      { id: 'C', texto: "Aprovecho y compro más", pts: 7 }
    ]
  },
  {
    id: 4,
    titulo: "¿Qué tanto conoces sobre activos (acciones, criptos)?",
    opciones: [
      { id: 'A', texto: "No sé nada, busco guía total", pts: 1 },
      { id: 'B', texto: "Entiendo conceptos básicos", pts: 2 },
      { id: 'C', texto: "Tengo experiencia analizando gráficas", pts: 3 }
    ]
  },
  {
    id: 5,
    titulo: "¿Cómo describirías tu fuente de ingresos actual?",
    opciones: [
      { id: 'A', texto: "Estable (salario fijo)", pts: 1 },
      { id: 'B', texto: "Variable (independiente)", pts: 2 }
    ]
  },
  {
    id: 6,
    titulo: "¿Qué parte de tus ahorros representan estos 10 millones?",
    opciones: [
      { id: 'A', texto: "Es casi todo lo que tengo", pts: 1 },
      { id: 'B', texto: "Es una parte importante, tengo fondo de emergencia", pts: 2 },
      { id: 'C', texto: "Es dinero que me sobra", pts: 3 }
    ]
  }
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [step, setStep] = useState(0); 
  const [loading, setLoading] = useState(false); // Estado para la simulación de IA
  const [formData, setFormData] = useState({ nombre: '', correo: '', respuestas: {} });
  const router = useRouter();

  const obtenerPerfil = () => {
    const total = Object.values(formData.respuestas).reduce((a, b) => (a as number) + (b as number), 0);
    if (total <= 7) return { tipo: "CONSERVADOR", color: "#4ade80", desc: "Priorizas la seguridad y la preservación de tu capital." };
    if (total <= 14) return { tipo: "MODERADO", color: "#D4AF37", desc: "Buscas un equilibrio entre crecimiento y riesgo controlado." };
    return { tipo: "ARRIESGADO", color: "#f87171", desc: "Buscas altos rendimientos aceptando volatilidad importante." };
  };

  const seleccionarOpcion = (preguntaId, puntos) => {
    setFormData({ ...formData, respuestas: { ...formData.respuestas, [preguntaId]: puntos } });
    setStep(step + 1);
  };

  const handleFinalizar = () => {
    setLoading(true); // Activa el efecto de "Procesando"
    
    // Simulamos 2 segundos de cálculo de IA antes de redirigir a la pestaña de page.tsx en la carpeta dashboard
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 2500);
  };

  const cerrarModal = () => {
    setShowModal(false);
    setIsRegistering(false);
    setStep(0);
    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: '#000', color: 'white', fontFamily: "'Times New Roman', serif", scrollBehavior: 'smooth' }}>
      
      {/* SECCIÓN 1: PORTADA */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/leon-gold.jpg")',
        backgroundSize: '45%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        minHeight: '100vh', display: 'flex', flexDirection: 'column'
      }}>
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
            <a href="#nosotros" style={{ color: 'white', textDecoration: 'none' }}>Misión & Visión</a>
            <button onClick={() => setShowModal(true)} style={goldButtonStyle}> Acceder </button>
          </div>
        </nav>

        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h1 style={{ fontSize: '65px', color: '#f3e5ab', textShadow: '2px 2px 15px black' }}>
            Inversiones Inteligentes para <br /> un Futuro Sostenible
          </h1>
          <p style={{ fontSize: '22px', color: '#ddd', fontStyle: 'italic', marginBottom: '40px' }}>
            Donde la Tecnología y la Estrategia Maximizan tu Capital
          </p>
          <button onClick={() => setShowModal(true)} style={outlineButtonStyle}> EMPIEZA AHORA </button>
        </main>
      </div>

      {/* --- VENTANA MODAL --- */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            {!loading && <button onClick={cerrarModal} style={closeButtonStyle}>✕</button>}

            {/* Animación de Carga de IA, Solo es una proyección, simulación jeje */}
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div className="spinner"></div>
                <h3 style={{ color: '#D4AF37', marginTop: '20px' }}>Analizando Perfil con IA...</h3>
                <p style={{ color: '#888', fontSize: '14px' }}>Diseñando portafolio optimizado para {formData.nombre}</p>
                <style jsx>{`
                  .spinner {
                    border: 4px solid rgba(212, 175, 55, 0.1);
                    width: 50px; height: 50px;
                    border-radius: 50%;
                    border-left-color: #D4AF37;
                    margin: 0 auto;
                    animation: spin 1s linear infinite;
                  }
                  @keyframes spin { to { transform: rotate(360deg); } }
                `}</style>
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                  <img src="/leon-gold.jpg" style={{ width: '50px', borderRadius: '50%', border: '1px solid #D4AF37' }} alt="Logo" />
                  <h2 style={{ color: '#D4AF37', marginTop: '10px' }}>Lion Heart Capital</h2>
                </div>

                {!isRegistering ? (
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '30px' }}>Bienvenido a su terminal de inversión</p>
                    <button style={goldActionButton}> Iniciar Sesión </button>
                    <button onClick={() => setIsRegistering(true)} style={outlineActionButton}> Crear Cuenta Nueva </button>
                  </div>
                ) : (
                  <div>
                    {step === 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <h3 style={{ color: '#D4AF37', textAlign: 'center' }}>Crear Perfil de Inversionista</h3>
                        <input placeholder="Nombre Completo" style={inputStyle} onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
                        <input placeholder="Correo Electrónico" style={inputStyle} onChange={(e) => setFormData({...formData, correo: e.target.value})} />
                        <button disabled={!formData.nombre || !formData.correo} onClick={() => setStep(1)} style={{ ...goldActionButton, opacity: (!formData.nombre || !formData.correo) ? 0.5 : 1 }}> COMENZAR TEST </button>
                      </div>
                    )}

                    {step >= 1 && step <= 6 && (
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                           <span style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '2px' }}>PREGUNTA {step}/6</span>
                           <div style={{ width: '100px', height: '2px', background: '#333' }}>
                              <div style={{ width: `${(step/6)*100}%`, height: '100%', background: '#D4AF37', transition: '0.5s' }}></div>
                           </div>
                        </div>
                        <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>{PREGUNTAS[step-1].titulo}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {PREGUNTAS[step-1].opciones.map((opc) => (
                            <button key={opc.id} onClick={() => seleccionarOpcion(step, opc.pts)} style={optionButtonStyle}>
                              <span style={{ color: '#D4AF37', fontWeight: 'bold', marginRight: '10px' }}>{opc.id}.</span> {opc.texto}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step > 6 && (
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ color: '#aaa', fontSize: '11px', letterSpacing: '2px' }}>ANÁLISIS COMPLETADO</p>
                        <h2 style={{ color: obtenerPerfil().color, fontSize: '28px', margin: '10px 0' }}>{obtenerPerfil().tipo}</h2>
                        <p style={{ color: '#eee', fontSize: '14px', marginBottom: '25px' }}>{obtenerPerfil().desc}</p>
                        <button onClick={handleFinalizar} style={goldActionButton}> GENERAR MI PORTAFOLIO </button>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* SECCION de quienes somos */}
      <section id="quienes-somos" style={sectionContainerStyle}>
        <div style={infoCardStyle}>
           <h2 style={sectionTitleStyle}>¿Quiénes somos?</h2>
           <p style={paragraphStyle}>
             Somos <strong>Lion Heart Capital S.A.S.</strong>, una firma colombiana especializada en gestión de inversiones, consultoría financiera y planificación patrimonial. Nuestro enfoque es ayudar a personas y empresas a invertir de forma estructurada, transparente y alineada a su perfil de riesgo, combinando activos tradicionales (acciones, ETFs, renta fija) con alternativas como inmobiliario fraccionado y criptoactivos, siempre bajo criterios de gestión responsable.
            </p>
            <h3 style={{ color: '#D4AF37', fontSize: '24px', marginBottom: '20px' }}>Nos diferenciamos porque:</h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '17px', color: '#ddd', lineHeight: '2.5' }}>
              <li><span style={{ color: '#D4AF37' }}>✔</span> No vendemos promesas, construimos estrategias.</li>
              <li><span style={{ color: '#D4AF37' }}>✔</span> Adaptamos cada portafolio al perfil del cliente.</li>
              <li><span style={{ color: '#D4AF37' }}>✔</span> Acompañamiento continuo y educación financiera.</li>
              <li><span style={{ color: '#D4AF37' }}>✔</span> Priorizamos la educación financiera, para que el cliente entienda qué tiene, por qué lo tiene y qué esperar.</li>
            <p style={{ fontSize: '19px', lineHeight: '1.8', color: '#eee', marginBottom: '30px', textAlign: 'center' }}>
              En <strong>Lion Heart Capital S.A.S.</strong>, creemos que invertir bien no es tomar más riesgo, sino tomar decisiones mejor informadas.
            </p>
            </ul>
          </div>
        </section>
        

        {/* SECCION de Misión y visión  */}
        <section id="nosotros" style={{ padding: '0 60px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ padding: '45px', backgroundColor: 'rgba(15, 15, 15, 0.8)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)', backdropFilter: 'blur(10px)' }}>
              <h2 style={{ color: '#D4AF37', borderBottom: '1px solid #D4AF37', display: 'inline-block' }}>MISIÓN</h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'justify', marginTop: '20px' }}>
                En Lion Heart Capital S.A.S., somos una empresa innovadora en el sector financiero y de inversiones que combina el poder de las nuevas tecnologías con un enfoque estratégico para ofrecer soluciones de inversión inteligentes. Nuestro propósito es empoderar a nuestros clientes con herramientas avanzadas, análisis de alto impacto y estrategias personalizadas que maximicen su rentabilidad, minimicen riesgos y fomenten el crecimiento sostenible en un mundo financiero en constante evolución.
              </p>
            </div>
            <div style={{ padding: '45px', backgroundColor: 'rgba(15, 15, 15, 0.8)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)', backdropFilter: 'blur(10px)' }}>
              <h2 style={{ color: '#D4AF37', borderBottom: '1px solid #D4AF37', display: 'inline-block' }}>VISIÓN</h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'justify', marginTop: '20px' }}>
                Ser reconocidos como líderes en el mercado global de finanzas e inversiones, integrando tecnología de vanguardia e inteligencia artificial para transformar la manera en que las personas y las empresas gestionan su capital. Aspiramos a crear un ecosistema financiero innovador y accesible, que inspire confianza y fomente el progreso económico de nuestros clientes y aliados estratégicos, posicionándonos como un referente en inversiones inteligentes y sustentables.
              </p>
            </div>
          </div>
        </section>
      </div>
  );
}

// --- ESTILOS REUTILIZABLES ---
const navStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: 'rgba(0,0,0,0.85)', borderBottom: '1px solid #D4AF37' };
const goldButtonStyle = { background: 'linear-gradient(#d4af37, #8a6d3b)', border: 'none', padding: '10px 25px', color: 'white', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' };
const outlineButtonStyle = { background: 'transparent', border: '2px solid #D4AF37', padding: '18px 50px', color: '#D4AF37', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' };
const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(10px)' };
const modalContentStyle = { backgroundColor: '#0a0a0a', padding: '40px', borderRadius: '15px', border: '1px solid #D4AF37', width: '450px', position: 'relative' };
const goldActionButton = { width: '100%', padding: '12px', borderRadius: '5px', border: 'none', background: '#D4AF37', color: 'black', fontWeight: 'bold', cursor: 'pointer' };
const outlineActionButton = { width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #D4AF37', background: 'transparent', color: '#D4AF37', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' };
const inputStyle = { padding: '12px', borderRadius: '5px', border: '1px solid #333', background: '#111', color: 'white', outline: 'none' };
const optionButtonStyle = { padding: '15px', textAlign: 'left' as const, borderRadius: '8px', border: '1px solid #222', background: '#151515', color: '#ddd', cursor: 'pointer' };
const closeButtonStyle = { position: 'absolute' as const, top: '15px', right: '15px', background: 'none', border: 'none', color: '#D4AF37', fontSize: '20px', cursor: 'pointer' };
const sectionContainerStyle = { padding: '100px 60px', backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/leon-real.jpg")', backgroundSize: 'cover' };
const infoCardStyle = { backgroundColor: 'rgba(0,0,0,0.75)', padding: '60px', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.3)', maxWidth: '1000px', margin: '0 auto' };
const sectionTitleStyle = { color: '#D4AF37', fontSize: '40px', marginBottom: '30px', textAlign: 'center' as const };
const paragraphStyle = { fontSize: '19px', lineHeight: '1.8', color: '#eee', textAlign: 'center' as const };
const footerStyle = { padding: '60px', textAlign: 'center' as const, color: '#777', backgroundColor: '#000', borderTop: '1px solid #111' };