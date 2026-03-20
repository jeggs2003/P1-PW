import { useState } from 'react'
import { calcularCotizacion } from '../utils/cotizadorLogic'
import '../styles/cotizador.css'

const pasos = ['Datos del envío', 'Nivel de servicio', 'Resultado']

const initialForm = {
  destino:     'misma_ciudad',
  peso:        '',
  alto:        '',
  ancho:       '',
  largo:       '',
  servicio:    'estandar',
  recoleccion: false,
  seguro:      false,
}

function validarPaso1(form) {
  const errores = {}
  if (!form.peso || isNaN(form.peso) || parseFloat(form.peso) <= 0)
    errores.peso = 'Ingresa un peso válido mayor a 0'
  if (form.alto && (isNaN(form.alto) || parseFloat(form.alto) <= 0))
    errores.alto = 'Ingresa una altura válida'
  if (form.ancho && (isNaN(form.ancho) || parseFloat(form.ancho) <= 0))
    errores.ancho = 'Ingresa un ancho válido'
  if (form.largo && (isNaN(form.largo) || parseFloat(form.largo) <= 0))
    errores.largo = 'Ingresa un largo válido'
  return errores
}

export default function Cotizador() {
  const [paso, setPaso]           = useState(0)
  const [form, setForm]           = useState(initialForm)
  const [errores, setErrores]     = useState({})
  const [resultado, setResultado] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    if (errores[name]) setErrores(er => ({ ...er, [name]: '' }))
  }

  const siguiente = () => {
    if (paso === 0) {
      const errs = validarPaso1(form)
      if (Object.keys(errs).length > 0) { setErrores(errs); return }
    }
    if (paso === 1) {
      const res = calcularCotizacion(form)
      setResultado(res)
    }
    setPaso(p => p + 1)
  }

  const reiniciar = () => {
    setForm(initialForm)
    setResultado(null)
    setErrores({})
    setPaso(0)
  }

  return (
    <main className="cotizador-page">
      <div className="container">
        <h1 className="cotizador-page__title">Cotizador de envíos</h1>
        <p className="cotizador-page__sub">
          Obtén un estimado del costo y tiempo de entrega
        </p>

        {/* Stepper */}
        <div className="stepper">
          {pasos.map((label, i) => (
            <div key={i} className={`stepper__step ${i <= paso ? 'stepper__step--active' : ''}`}>
              <div className="stepper__circle">{i < paso ? '✓' : i + 1}</div>
              <span className="stepper__label">{label}</span>
              {i < pasos.length - 1 && <div className="stepper__line" />}
            </div>
          ))}
        </div>

        <div className="cotizador__card">

          {/* P1 — Datos envio */}
          {paso === 0 && (
            <div className="cotizador__paso">
              <h2>Datos del envío</h2>

              <div className="form-group">
                <label>Tipo de destino *</label>

                <div className="destino-group">
                  <p className="destino-categoria">Nacional</p>
                  <div className="radio-group">
                    {[
                      { value: 'misma_ciudad',      label: 'Misma ciudad' },
                      { value: 'otro_departamento', label: 'Otro departamento' },
                    ].map(op => (
                      <label
                        key={op.value}
                        className={`radio-card ${form.destino === op.value ? 'radio-card--active' : ''}`}
                      >
                        <input
                          type="radio" name="destino"
                          value={op.value} checked={form.destino === op.value}
                          onChange={handleChange}
                        />
                        {op.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="destino-group">
                  <p className="destino-categoria">Internacional</p>
                  <div className="radio-group">
                    {[
                      { value: 'centroamerica',     label: 'Centroamérica',      desc: 'El Salvador, Honduras, Nicaragua, Costa Rica, Panamá, Belice' },
                      { value: 'sudamerica_mexico', label: 'Sudamérica y México', desc: 'México, Colombia, Perú, Chile, Argentina y más' },
                      { value: 'norteamerica',      label: 'Norte América',       desc: 'Estados Unidos y Canadá' },
                      { value: 'europa',            label: 'Europa',              desc: 'España, Italia, Alemania y más' },
                    ].map(op => (
                      <label
                        key={op.value}
                        className={`radio-card radio-card--tall ${form.destino === op.value ? 'radio-card--active' : ''}`}
                      >
                        <input
                          type="radio" name="destino"
                          value={op.value} checked={form.destino === op.value}
                          onChange={handleChange}
                        />
                        <strong>{op.label}</strong>
                        <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                          {op.desc}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="peso">Peso (kg) *</label>
                <input
                  id="peso" name="peso" type="number"
                  min="0.1" step="0.1" placeholder="Ej. 2.5"
                  value={form.peso} onChange={handleChange}
                  className={errores.peso ? 'input--error' : ''}
                />
                {errores.peso && <span className="form-error">{errores.peso}</span>}
              </div>

              <div className="form-group">
                <label>Dimensiones (opcional)</label>
                <div className="dims-row">
                  {['alto', 'ancho', 'largo'].map(dim => (
                    <div key={dim} className="form-group">
                      <label htmlFor={dim} style={{ fontSize: '0.8rem', textTransform: 'capitalize' }}>
                        {dim} (cm)
                      </label>
                      <input
                        id={dim} name={dim} type="number"
                        min="0" step="0.1" placeholder="0"
                        value={form[dim]} onChange={handleChange}
                        className={errores[dim] ? 'input--error' : ''}
                      />
                      {errores[dim] && <span className="form-error">{errores[dim]}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* P2 — Nivel serv */}
          {paso === 1 && (
            <div className="cotizador__paso">
              <h2>Nivel de servicio</h2>

              <div className="form-group">
                <label>Tipo de servicio *</label>
                <div className="radio-group">
                  {[
                    { value: 'estandar', label: 'Estándar', desc: 'Económico, tiempo regular' },
                    { value: 'expres',   label: 'Exprés',   desc: 'Más rápido, costo mayor' },
                  ].map(op => (
                    <label
                      key={op.value}
                      className={`radio-card radio-card--tall ${form.servicio === op.value ? 'radio-card--active' : ''}`}
                    >
                      <input
                        type="radio" name="servicio"
                        value={op.value} checked={form.servicio === op.value}
                        onChange={handleChange}
                      />
                      <strong>{op.label}</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                        {op.desc}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Servicios adicionales</label>
                <div className="checkbox-group">
                  <label className={`check-card ${form.recoleccion ? 'check-card--active' : ''}`}>
                    <input
                      type="checkbox" name="recoleccion"
                      checked={form.recoleccion} onChange={handleChange}
                    />
                    <div>
                      <strong>Recolección a domicilio</strong>
                      <span>+Q15.00</span>
                    </div>
                  </label>
                  <label className={`check-card ${form.seguro ? 'check-card--active' : ''}`}>
                    <input
                      type="checkbox" name="seguro"
                      checked={form.seguro} onChange={handleChange}
                    />
                    <div>
                      <strong>Seguro contra pérdida</strong>
                      <span>+Q25.00</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* P3 — Resultado */}
          {paso === 2 && resultado && (
            <div className="cotizador__paso cotizador__resultado">
              <div className="resultado__check">✓</div>
              <h2>Tu cotización</h2>

              <div className="resultado__grid">
                <div className="resultado__card">
                  <h3>Desglose de costo</h3>
                  <div className="desglose">
                    <div className="desglose__row">
                      <span>Costo base</span>
                      <strong>Q{resultado.costoBase.toFixed(2)}</strong>
                    </div>
                    <div className="desglose__row">
                      <span>Costo por peso</span>
                      <strong>Q{resultado.costoPeso.toFixed(2)}</strong>
                    </div>
                    {resultado.costoExtras > 0 && (
                      <div className="desglose__row">
                        <span>Extras</span>
                        <strong>Q{resultado.costoExtras.toFixed(2)}</strong>
                      </div>
                    )}
                    <div className="desglose__row desglose__row--total">
                      <span>Total estimado</span>
                      <strong>Q{resultado.total.toFixed(2)}</strong>
                    </div>
                  </div>
                </div>

                <div className="resultado__card">
                  <h3>Tiempo estimado</h3>
                  <div className="tiempo">
                    <span className="tiempo__icon">🕐</span>
                    <p className="tiempo__valor">{resultado.tiempo}</p>
                  </div>
                  <p className="resultado__nota">
                    * Los tiempos son estimados y pueden variar según la zona y disponibilidad.
                  </p>
                </div>
              </div>

              <button className="btn btn--outline" onClick={reiniciar}>
                Hacer otra cotización
              </button>
            </div>
          )}

          {/* Botones de navegación */}
          {paso < 2 && (
            <div className="cotizador__nav">
              {paso > 0 && (
                <button className="btn btn--outline" onClick={() => setPaso(p => p - 1)}>
                  ← Atrás
                </button>
              )}
              <button className="btn btn--primary" onClick={siguiente}>
                {paso === 1 ? 'Ver cotización' : 'Siguiente →'}
              </button>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}