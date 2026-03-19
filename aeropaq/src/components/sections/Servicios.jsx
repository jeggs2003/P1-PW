import './Servicios.css'

const servicios = [
  {
    icon: '📦',
    titulo: 'Envíos nacionales',
    desc: 'Cobertura en todos los departamentos de Guatemala. Entrega en 1 a 3 días hábiles.',
  },
  {
    icon: '✈️',
    titulo: 'Envíos internacionales',
    desc: 'Llegamos a más de 22 países en Latinoamérica, EE.UU. y Europa.',
  },
  {
    icon: '🏠',
    titulo: 'Recolección a domicilio',
    desc: 'Pasamos por tu paquete. Sin que tengas que salir de casa.',
  },
  {
    icon: '⚡',
    titulo: 'Servicio exprés',
    desc: 'Entrega en 24 horas para envíos urgentes dentro de la ciudad capital.',
  },
]

export default function Servicios() {
  return (
    <section className="section servicios" id="servicios">
      <div className="container">
        <h2 className="section-title">Nuestros servicios</h2>
        <p className="section-subtitle">
          Soluciones de envío para cada necesidad
        </p>
        <div className="servicios__grid">
          {servicios.map((s, i) => (
            <div className="servicio-card" key={i}>
              <span className="servicio-card__icon">{s.icon}</span>
              <h3 className="servicio-card__title">{s.titulo}</h3>
              <p className="servicio-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}