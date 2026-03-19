import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Cotizador from './pages/Cotizador'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cotizador" element={<Cotizador />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App