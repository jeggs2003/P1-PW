import './SobreNosotros.css'
import aboutUsImg from '../../images/corporativo-aeropaq.png';

export default function SobreNosotros() {
  return (
    <section className="section sobre-nosotros" id="sobre-nosotros">
      <div className="container sobre__container">
        <div className="sobre__img">
          <div className="sobre__img-container">
            <img 
              src={aboutUsImg}
              alt="Edificio Corporativo AeroPaq" 
              className="sobre__img-actual"
            />
          </div>
        </div>
        <div className="sobre__content">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre nosotros</h2>
          <p className="sobre__historia">
            AeroPaq nació en Guatemala con el objetivo de simplificar el envío de paquetes 
            para personas y empresas[cite: 9, 10]. Desde el principio operamos con un compromiso 
            claro: rapidez, seguridad y atención personalizada[cite: 20].
          </p>
          <div className="sobre__valores">
            <div className="valor">
              <strong>Misión</strong>
              <p>Conectar a las personas con soluciones de envío confiables y accesibles[cite: 20].</p>
            </div>
            <div className="valor">
              <strong>Visión</strong>
              <p>Ser la empresa de paquetería preferida en Centroamérica[cite: 20].</p>
            </div>
            <div className="valor">
              <strong>Valores</strong>
              <p>Confianza · Rapidez · Compromiso · Innovación [cite: 20]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}