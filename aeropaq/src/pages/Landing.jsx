import Hero from '../components/sections/Hero'
import Servicios from '../components/sections/Servicios'
import Cobertura from '../components/sections/Cobertura'
import ComoFunciona from '../components/sections/ComoFunciona'
import SobreNosotros from '../components/sections/SobreNosotros'
import FAQ from '../components/sections/FAQ'
import Contacto from '../components/sections/Contacto'

export default function Landing() {
  return (
    <main style={{ paddingTop: 'var(--navbar-h)' }}>
      <Hero />
      <Servicios />
      <Cobertura />
      <ComoFunciona />
      <SobreNosotros />
      <FAQ />
      <Contacto />
    </main>
  )
}