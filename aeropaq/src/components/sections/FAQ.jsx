import { useState } from 'react'
import './FAQ.css'

const preguntas = [
  { q: '¿Cuánto tarda un envío nacional?', a: 'Los envíos nacionales estándar tardan entre 1 y 3 días hábiles. Con servicio exprés, la entrega es en 24 horas.' },
  { q: '¿Cómo puedo rastrear mi paquete?', a: 'Puedes rastrear tu paquete contactándonos por WhatsApp o teléfono con tu número de guía.' },
  { q: '¿Qué artículos no puedo enviar?', a: 'No se permiten materiales peligrosos, armas, dinero en efectivo, ni artículos ilegales según la legislación guatemalteca.' },
  { q: '¿Tienen seguro contra pérdida?', a: 'Sí, ofrecemos seguro opcional contra pérdida y accidentes. Puedes agregarlo al cotizar tu envío.' },
  { q: '¿Hacen recolección a domicilio?', a: 'Sí, contamos con servicio de recolección a domicilio con costo adicional. Disponible en área metropolitana y principales ciudades.' },
]

export default function FAQ() {
  const [abierto, setAbierto] = useState(null)

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="section-title">Preguntas frecuentes</h2>
        <p className="section-subtitle">Resolvemos tus dudas más comunes</p>
        <div className="faq__lista">
          {preguntas.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${abierto === i ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__pregunta"
                onClick={() => setAbierto(abierto === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon">{abierto === i ? '−' : '+'}</span>
              </button>
              {abierto === i && (
                <p className="faq__respuesta">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}