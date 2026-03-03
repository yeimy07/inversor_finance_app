'use client';

import React from 'react';

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" style={sectionWrapper}>
      <div style={container}>
        
        {/* FILA 1: IMAGEN Y TEXTO PRINCIPAL */}
        <div style={flexRow}>
          {/* Lado de la Imagen con un marco dorado sutil */}
          <div style={imageContainer}>
            <div style={goldFrame}></div>
            <img 
              src="/somos.png" 
              alt="Equipo Lion Heart Capital" 
              style={imageStyle} 
            />
          </div>

          {/* Lado del Texto */}
          <div style={textSide}>
            <span style={overline}>NUESTRA IDENTIDAD</span>
            <h2 style={titleStyle}>¿Quiénes somos?</h2>
            <div style={divider}></div>
            <p style={paragraphStyle}>
              Somos <strong>Lion Heart Capital S.A.S.</strong>, una firma colombiana especializada en gestión de inversiones, consultoría financiera y planificación patrimonial. 
            </p>
            <p style={paragraphStyle}>
              Nuestro enfoque es ayudar a personas y empresas a invertir de forma estructurada, transparente y alineada a su perfil de riesgo, combinando activos tradicionales con alternativas vanguardistas, siempre bajo criterios de <strong>gestión responsable</strong>.
            </p>
          </div>
        </div>

        {/* FILA 2: DIFERENCIADORES EN GRID (Más dinámico) */}
        <div style={gridDiferenciadores}>
          <div style={cardDiferenciadora}>
            <span style={iconStyle}>🛡️</span>
            <h4>Estrategia Real</h4>
            <p>No vendemos promesas, construimos estructuras sólidas para su futuro.</p>
          </div>
          <div style={cardDiferenciadora}>
            <span style={iconStyle}>🎯</span>
            <h4>Personalización</h4>
            <p>Adaptamos cada portafolio al perfil y objetivos de cada cliente.</p>
          </div>
          <div style={cardDiferenciadora}>
            <span style={iconStyle}>🤝</span>
            <h4>Acompañamiento</h4>
            <p>Soporte continuo y educación financiera en cada paso del camino.</p>
          </div>
          <div style={cardDiferenciadora}>
            <span style={iconStyle}>💡</span>
            <h4>Claridad</h4>
            <p>Priorizamos que usted entienda qué tiene, por qué lo tiene y qué esperar.</p>
          </div>
        </div>

        {/* FRASE FINAL IMPACTANTE */}
        <div style={quoteBox}>
          <p style={quoteText}>
            "Creemos que invertir bien no es tomar más riesgo, sino tomar decisiones mejor informadas."
          </p>
        </div>

      </div>
    </section>
  );
}

// --- ESTILOS SOPHISTICATED ---

const sectionWrapper: React.CSSProperties = {
  padding: '120px 20px',
  backgroundColor: '#000',
  color: '#fff',
  overflow: 'hidden'
};

const container: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const flexRow: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '60px',
  alignItems: 'center',
  marginBottom: '80px'
};

const imageContainer: React.CSSProperties = {
  flex: '1 1 450px',
  position: 'relative',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '4px',
  position: 'relative',
  zIndex: 2,
  filter: 'grayscale(20%)' // Le da un toque más serio y elegante
};

const goldFrame: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  left: '-20px',
  width: '100%',
  height: '100%',
  border: '1px solid #D4AF37',
  zIndex: 1
};

const textSide: React.CSSProperties = {
  flex: '1 1 500px',
};

const overline = {
  color: '#D4AF37',
  letterSpacing: '4px',
  fontSize: '12px',
  fontWeight: 'bold' as const,
  display: 'block',
  marginBottom: '10px'
};

const titleStyle = {
  fontSize: '42px',
  color: '#f3e5ab',
  margin: '0 0 20px 0',
  fontFamily: 'serif'
};

const divider = {
  width: '60px',
  height: '3px',
  backgroundColor: '#D4AF37',
  marginBottom: '30px'
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: '1.8',
  color: '#ccc',
  marginBottom: '20px'
};

const gridDiferenciadores: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '30px',
  marginTop: '40px'
};

const cardDiferenciadora: React.CSSProperties = {
  padding: '30px',
  backgroundColor: '#0a0a0a',
  border: '1px solid #1a1a1a',
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'transform 0.3s ease'
};

const iconStyle = {
  fontSize: '30px',
  display: 'block',
  marginBottom: '15px'
};

const quoteBox: React.CSSProperties = {
  marginTop: '80px',
  textAlign: 'center',
  padding: '40px',
  borderTop: '1px solid rgba(212, 175, 55, 0.2)'
};

const quoteText: React.CSSProperties = {
  fontSize: '22px',
  fontStyle: 'italic',
  color: '#D4AF37',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.5'
};