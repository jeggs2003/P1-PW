import './Cobertura.css'

const zonas = [
  { region: '🇬🇹 Guatemala', detalle: 'Todos los departamentos' },
  { region: '🌎 Centroamérica', detalle: 'El Salvador, Honduras, Nicaragua, Costa Rica, Panamá, Belice' },
  { region: '🌍 Sudamérica', detalle: 'México, Colombia, Venezuela, Perú, Ecuador, Chile, Argentina' },
  { region: '🇺🇸 Norte América', detalle: 'Estados Unidos y Canadá' },
  { region: '🌐 Europa', detalle: 'España, Italia, Alemania y más' },
]

export default function Cobertura() {
  return (
    <section className="section cobertura" id="cobertura">
      <div className="container">
        <h2 className="section-title">Cobertura</h2>
        <p className="section-subtitle">Llegamos a más de 22 países en todo el mundo</p>
        <div className="cobertura__grid">
          {zonas.map((z, i) => (
            <div className="cobertura__card" key={i}>
              <p className="cobertura__region">{z.region}</p>
              <p className="cobertura__detalle">{z.detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}