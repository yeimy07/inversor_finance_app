'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { Suspense } from 'react';

// --- CONFIGURACIÓN DE FRASES MOTIVADORAS ---
const FRASES = [
  "No busques el éxito inmediato; busca el crecimiento exponencial que solo el tiempo puede otorgar.",
  "La disciplina es el puente entre metas y logros. Su futuro comienza con una decisión hoy.",
  "Invertir en conocimiento rinde los mejores intereses. No gestionamos números, diseñamos su legado.",
  "Estrategia sobre impulso. En Lion Heart Capital, no vendemos promesas, construimos legados sostenibles."
];

// Componente que contiene la lógica y el formulario
function ContactoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const servicio = searchParams.get('servicio') || 'Servicio Especializado';

  // Selección de frase
  const fraseMotivadora = FRASES[1]; 

  return (
    <div style={pageWrapperStyle}>
      {/* Botón para volver atrás */}
      <button onClick={() => router.back()} style={backButtonStyle}>
        ← Volver
      </button>

      <div style={mainContainerStyle}>
        
        {/* LADO IZQUIERDO: IMAGEN E INFORMACIÓN DEL SERVICIO */}
        <div style={contentSideStyle}>
          <div style={{
            ...imageBackgroundStyle,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("/finance.jpg")`
          }}>
            <div style={textOverlayStyle}>
              <span style={overlineStyle}>LION HEART CAPITAL</span>
              <h1 style={titleStyle}>{servicio}</h1>
              <div style={dividerStyle}></div>
              
              <p style={descriptionStyle}>
                En <strong>Lion Heart Capital</strong>, nuestro servicio de {servicio} está diseñado 
                para proporcionarle la máxima seguridad financiera. Utilizamos análisis avanzado y 
                estrategias personalizadas para asegurar que cada decisión contribuya a su 
                crecimiento patrimonial de forma estructurada y transparente.
              </p>

              <div style={phraseBoxStyle}>
                <p style={phraseStyle}>"{fraseMotivadora}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: FORMULARIO */}
        <div style={formSideStyle}>
          <div style={glassCardStyle}>
            <h2 style={{ color: '#fff', fontSize: '26px', marginBottom: '10px' }}>Inicie su Transformación</h2>
            <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '30px' }}>Complete los datos y un consultor senior se comunicará con usted en menos de 24 horas.</p>
            
            <form style={formLayoutStyle}>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>NOMBRE COMPLETO</label>
                <input placeholder="Ej. Juan Pérez" style={inputStyle} />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>CORREO CORPORATIVO</label>
                <input type="email" placeholder="juan@empresa.com" style={inputStyle} />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>WHATSAPP / TELÉFONO</label>
                <input type="tel" placeholder="+57 300..." style={inputStyle} />
              </div>

              <button type="button" style={submitButtonStyle}>
                SOLICITAR ASESORÍA DE ALTO NIVEL
              </button>
            </form>
            
            <p style={securityNoticeStyle}>🔒 Su información está protegida por Lion Heart Capital S.A.S.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// COMPONENTE PRINCIPAL QUE EXPORTA NEXT.JS
export default function ContactoServicio() {
  return (
    <Suspense fallback={
      <div style={{ backgroundColor: '#000', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D4AF37' }}>
        Cargando formulario de Lion Heart Capital...
      </div>
    }>
      <ContactoContent />
    </Suspense>
  );
}

// --- ESTILOS ---

const pageWrapperStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#000',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'serif',
  padding: '0'
};

const mainContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '1.2fr 0.8fr',
  alignItems: 'stretch',
  overflow: 'hidden'
};

const contentSideStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  alignItems: 'stretch'
};

const backButtonStyle: React.CSSProperties = {
  position: 'absolute', 
  top: '30px', 
  left: '30px', 
  background: 'rgba(212, 175, 55, 0.2)',
  border: '1px solid #D4AF37',
  color: '#D4AF37', 
  cursor: 'pointer', 
  fontSize: '12px', 
  letterSpacing: '2px', 
  padding: '10px 25px', 
  borderRadius: '30px', 
  zIndex: 200,
  transition: '0.3s',
  fontWeight: 'bold'
};

const imageBackgroundStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center'
};

const textOverlayStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '0 80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: '100%'
};

const overlineStyle = { color: '#D4AF37', letterSpacing: '4px', fontSize: '12px', fontWeight: 'bold' as const };
const titleStyle = { fontSize: '50px', margin: '15px 0', color: '#f3e5ab', lineHeight: '1.1' };
const dividerStyle = { width: '80px', height: '4px', background: '#D4AF37', marginBottom: '30px' };
const descriptionStyle = { fontSize: '18px', lineHeight: '1.6', color: '#ccc', marginBottom: '40px', maxWidth: '600px' };

const phraseBoxStyle = { borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '20px', maxWidth: '500px' };
const phraseStyle = { color: '#D4AF37', fontSize: '18px', fontStyle: 'italic' as const };

const formSideStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  backgroundColor: '#0a0a0a'
};

const glassCardStyle: React.CSSProperties = {
  backgroundColor: 'rgba(20, 20, 20, 0.8)',
  padding: '50px',
  borderLeft: '3px solid #D4AF37',
  width: '100%',
  maxWidth: '500px',
};

const formLayoutStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '20px' };
const inputGroupStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '8px' };
const labelStyle = { fontSize: '10px', letterSpacing: '2px', color: '#D4AF37', fontWeight: 'bold' as const };

const inputStyle = { 
  padding: '15px', 
  background: '#151515', 
  border: '1px solid #333', 
  color: 'white', 
  borderRadius: '4px',
  outline: 'none'
};

const submitButtonStyle = { 
  padding: '18px', 
  background: '#D4AF37', 
  color: 'black', 
  fontWeight: 'bold' as const, 
  border: 'none', 
  cursor: 'pointer', 
  borderRadius: '4px',
  marginTop: '10px',
  letterSpacing: '1px'
};

const securityNoticeStyle = { textAlign: 'center' as const, fontSize: '11px', color: '#555', marginTop: '20px' };