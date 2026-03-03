'use client';

import React from 'react';
import Link from 'next/link';

// Definimos los servicios con sus respectivas imágenes
const LISTA_SERVICIOS = [
  { nombre: "Consultoría financiera", img: "/imag-5.jpg" },
  { nombre: "Planificación financiera", img: "/imag-6.jpg" },
  { nombre: "Gestión de riesgos", img: "/imag-7.jpg" },
  { nombre: "Servicios Contables", img: "/imag-8.jpg" },
  { nombre: "Contabilidad Pro", img: "/imag-9.jpg" },
  { nombre: "Declaraciones de renta", img: "/imag-10.jpg" },
  { nombre: "Outsourcing contable", img: "/imag-11.jpg" },
  { nombre: "Auditorías contables", img: "/imag-3.jpg" },
  { nombre: "Asesoría fiscal", img: "/imag-4.jpg" },
  { nombre: "Gestión de Inversiones", img: "/imag-2.jpg" },
];

export default function Servicios() {
  return (
    <section id="servicios" style={{ padding: '80px 40px', backgroundColor: '#000' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '40px', letterSpacing: '2px' }}>Nuestros Servicios</h2>
        <div style={{ width: '60px', height: '2px', background: '#D4AF37', margin: '15px auto' }}></div>
      </div>

      <div style={gridStyle}>
        {LISTA_SERVICIOS.map((servicio, index) => (
          /* Link dinámico: enviamos el nombre del servicio por la URL */
          <Link 
            key={index} 
            href={`/contacto?servicio=${encodeURIComponent(servicio.nombre)}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{ ...cardStyle, backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${servicio.img})` }}>
              <h3 style={titleStyle}>{servicio.nombre}</h3>
              <div style={btnStyle}>Saber más</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// --- ESTILOS ---
const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto'
};

const cardStyle: React.CSSProperties = {
  height: '250px',
  borderRadius: '12px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  transition: 'transform 0.4s ease, border-color 0.4s ease',
  cursor: 'pointer',
  padding: '20px',
  textAlign: 'center'
};

const titleStyle: React.CSSProperties = {
  color: '#f3e5ab',
  fontSize: '20px',
  fontWeight: 'bold',
  textShadow: '2px 2px 10px black',
  marginBottom: '15px'
};

const btnStyle: React.CSSProperties = {
  padding: '8px 20px',
  border: '1px solid #D4AF37',
  color: '#D4AF37',
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  backgroundColor: 'rgba(0,0,0,0.5)'
};