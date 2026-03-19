import { useState } from 'react'
import './Contacto.css'

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzXPy1mnOee3j2GyIhPBQO4aFtDmomeAMJI5tAla8_Rw73ipy5Wqz50GlQV2_Oxhz2JWA/exec'

const initialForm = { nombre: '', correo: '', telefono: '', mensaje: '' }

function validar(form) {
  const errores = {}
  if (!form.nombre.trim()) errores.nombre = 'El nombre es requerido'
  if (!form.correo.trim()) errores.correo = 'El correo es requerido'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
    errores.correo = 'Ingresa un correo válido'
  if (!form.telefono.trim()) errores.telefono = 'El teléfono es requerido'
  else if (!/^\+?[\d\s\-]{8,15}$/.test(form.telefono))
    errores.telefono = 'Ingresa un teléfono válido'
  if (!form.mensaje.trim()) errores.mensaje = 'El mensaje es requerido'
  else if (form.mensaje.trim().length < 10)
    errores.mensaje = 'El mensaje debe tener al menos 10 caracteres'
  return errores
}

export default function Contacto() {
  const [form, setForm]       = useState(initialForm)
  const [errores, setErrores] = useState({})
  const [estado, setEstado]   = useState('idle') // idle | loading | ok | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errores[name]) setErrores(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nuevosErrores = validar(form)
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
    setEstado('loading')
    try {
      await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      setEstado('ok')
      setForm(initialForm)
    } catch {
      setEstado('error')
    }
  }

  return (
    <section className="section contacto" id="contacto">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">
          Escríbenos y te respondemos a la brevedad
        </p>

        <div className="contacto__wrapper">
          {/* Info lateral */}
          <div className="contacto__info">
            <div className="contacto__info-item">
              <span>📞</span>
              <div>
                <strong>Teléfono</strong>
                <p>+502 5825-5444</p>
              </div>
            </div>
            <div className="contacto__info-item">
              <span>💬</span>
              <div>
                <strong>WhatsApp</strong>
                <p>+502 5825-5444</p>
              </div>
            </div>
            <div className="contacto__info-item">
              <span>📧</span>
              <div>
                <strong>Correo</strong>
                <p>info@aeropaq.com</p>
              </div>
            </div>
            <div className="contacto__info-item">
              <span>🕐</span>
              <div>
                <strong>Horario</strong>
                <p>Lunes a viernes, 8am – 6pm</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form className="contacto__form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo *</label>
                <input
                  id="nombre" name="nombre" type="text"
                  placeholder="Katherine Mayen"
                  value={form.nombre} onChange={handleChange}
                  className={errores.nombre ? 'input--error' : ''}
                />
                {errores.nombre && <span className="form-error">{errores.nombre}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="correo">Correo electrónico *</label>
                <input
                  id="correo" name="correo" type="email"
                  placeholder="kmayen@correo.com"
                  value={form.correo} onChange={handleChange}
                  className={errores.correo ? 'input--error' : ''}
                />
                {errores.correo && <span className="form-error">{errores.correo}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                id="telefono" name="telefono" type="text"
                placeholder="+502 58255444"
                value={form.telefono} onChange={handleChange}
                className={errores.telefono ? 'input--error' : ''}
              />
              {errores.telefono && <span className="form-error">{errores.telefono}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje" name="mensaje" rows={5}
                placeholder="¿En qué podemos ayudarte?"
                value={form.mensaje} onChange={handleChange}
                className={errores.mensaje ? 'input--error' : ''}
              />
              {errores.mensaje && <span className="form-error">{errores.mensaje}</span>}
            </div>

            <button
              type="submit"
              className="btn btn--primary contacto__btn"
              disabled={estado === 'loading'}
            >
              {estado === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {estado === 'ok' && (
              <p className="form-success">
                ✅ Mensaje enviado correctamente. Te contactaremos pronto.
              </p>
            )}
            {estado === 'error' && (
              <p className="form-error-global">
                ❌ Hubo un error al enviar. Intenta de nuevo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}