import './ComoFunciona.css'

const pasos = [
  { num: '01', titulo: 'Solicitud',   desc: 'Ingresa los datos de tu envío en nuestra plataforma o llámanos.' },
  { num: '02', titulo: 'Recolección', desc: 'Nuestro equipo pasa a recoger el paquete en la dirección indicada.' },
  { num: '03', titulo: 'Despacho',    desc: 'El paquete es procesado y despachado desde nuestra bodega central.' },
  { num: '04', titulo: 'Entrega',     desc: 'Tu destinatario recibe el paquete en el tiempo acordado.' },
]

export default function ComoFunciona() {
  return (
    <section className="section como-funciona" id="como-funciona">
      <div className="container">
        <h2 className="section-title">¿Cómo funciona?</h2>
        <p className="section-subtitle">Tu envío en 4 simples pasos</p>
        <div className="pasos__grid">
          {pasos.map((p, i) => (
            <div className="paso" key={i}>
              <div className="paso__num">{p.num}</div>
              {i < pasos.length - 1 && <div className="paso__linea" />}
              <h3 className="paso__titulo">{p.titulo}</h3>
              <p className="paso__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}