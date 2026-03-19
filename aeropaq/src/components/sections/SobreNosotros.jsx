import './SobreNosotros.css'

export default function SobreNosotros() {
  return (
    <section className="section sobre-nosotros" id="sobre-nosotros">
      <div className="container sobre__container">
        <div className="sobre__img">
          <div className="sobre__img-placeholder">🏢</div>
        </div>
        <div className="sobre__content">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre nosotros</h2>
          <p className="sobre__historia">
            AeroPaq nació en Guatemala con el objetivo de simplificar el envío de paquetes
            para personas y empresas. Desde el principio operamos con un compromiso
            claro: rapidez, seguridad y atención personalizada.
          </p>
          <div className="sobre__valores">
            <div className="valor">
              <strong>Misión</strong>
              <p>Conectar a las personas con soluciones de envío confiables y accesibles.</p>
            </div>
            <div className="valor">
              <strong>Visión</strong>
              <p>Ser la empresa de paquetería preferida en Centroamérica.</p>
            </div>
            <div className="valor">
              <strong>Valores</strong>
              <p>Confianza · Rapidez · Compromiso · Innovación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}