import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__container">
        <div className="hero__text">
          <span className="hero__badge">Desde Guatemala para el mundo</span>
          <h1 className="hero__title">
            Envíos rápidos,<br />seguros y confiables
          </h1>
          <p className="hero__desc">
            Llevamos tus paquetes a cualquier destino nacional o internacional.
            Pasamos a tu domicilio por el paquete. Servicio exprés con seguimiento en tiempo real.
          </p>
          <div className="hero__actions">
            <Link to="/cotizador" className="btn btn--primary">
              Cotizar envío
            </Link>
            <a href="#servicios" className="btn btn--outline"
              onClick={e => {
                e.preventDefault()
                document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
              }}>
              Ver servicios
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>+3,000</strong>
              <span>envíos al mes</span>
            </div>
            <div className="hero__stat">
              <strong>22</strong>
              <span>países</span>
            </div>
            <div className="hero__stat">
              <strong>24h</strong>
              <span>entrega exprés</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__img-placeholder">
            <span>✈</span>
          </div>
        </div>
      </div>
    </section>
  )
}