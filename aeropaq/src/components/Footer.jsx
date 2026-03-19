export default function Footer() {
  return (
    <footer style={{
      background: '#0f1923',
      color: '#aab0bb',
      padding: '40px 24px',
      textAlign: 'center',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <p style={{ color: '#fff', fontWeight: 600, marginBottom: 8 }}>
          ✈ Aero<span style={{ color: '#F47B20' }}>Paq</span>
        </p>
        <p>Envíos nacionales e internacionales desde Guatemala</p>
        <p style={{ marginTop: 16, fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} AeroPaq · Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}