'use client';

import React from 'react';
{/* Esta imagen es simulada, versión de prueba*/}
export default function Dashboard() {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', padding: '40px' }}>
      {/* Header del Dashboard */}
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', borderBottom: '1px solid #D4AF37', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ color: '#D4AF37', fontSize: '28px' }}>Bienvenido, Inversionista</h1>
          <p style={{ color: '#888' }}>Estado de tu portafolio | Lion Heart Capital</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ display: 'block', color: '#D4AF37', fontWeight: 'bold' }}>Perfil: MODERADO</span>
          <button style={{ background: 'none', border: '1px solid #333', color: '#555', marginTop: '5px', cursor: 'pointer' }}>Cerrar Sesión</button>
        </div>
      </header>

      {/* Grid de Contenido */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* Gráfica y Datos Principales */}
        <div style={{ background: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #222' }}>
          <h3 style={{ marginBottom: '20px' }}>Rendimiento de Activos (Café y Oro)</h3>
          <div style={{ height: '200px', background: 'linear-gradient(transparent, rgba(212,175,55,0.1))', borderLeft: '2px solid #D4AF37', borderBottom: '2px solid #D4AF37', position: 'relative' }}>
            <p style={{ position: 'absolute', top: '45%', left: '40%', color: '#444' }}>[ Gráfica en tiempo real - Próximo Avance ]</p>
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
            <div style={{ flex: 1, background: '#000', padding: '15px', borderRadius: '10px', border: '1px solid #D4AF37' }}>
              <p style={{ fontSize: '12px', color: '#888' }}>Capital Inicial</p>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>$10,000,000 COP</p>
            </div>
            <div style={{ flex: 1, background: '#000', padding: '15px', borderRadius: '10px', border: '1px solid #D4AF37' }}>
              <p style={{ fontSize: '12px', color: '#888' }}>Valor Estimado</p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#D4AF37' }}>$11,250,000 COP</p>
            </div>
          </div>
        </div>

        {/* Menú de Funciones*/}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button style={menuButtonStyle}>🎮 Juegos Financieros</button>
          <button style={menuButtonStyle}>🔍 Explorar Mercados</button>
          <button style={menuButtonStyle}>📰 Noticias y Análisis</button>
          <button style={menuButtonStyle}>👤 Ver Perfil</button>
          <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'rgba(212,175,55,0.05)', borderRadius: '10px', border: '1px dashed #D4AF37' }}>
            <p style={{ fontSize: '13px', color: '#D4AF37' }}>✨ <strong>Novedad:</strong> IA Advisor activado para tu perfil.</p>
          </div>
        </aside>

      </div>
    </div>
  );
}

const menuButtonStyle = {
  width: '100%',
  padding: '15px',
  background: '#111',
  border: '1px solid #333',
  color: '#ccc',
  textAlign: 'left' as const,
  borderRadius: '8px',
  cursor: 'pointer',
  transition: '0.3s'
};