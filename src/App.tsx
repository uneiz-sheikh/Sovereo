
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/navbar'
import HomePage from './pages/HomePage'
import OurTeam from './pages/OurTeam'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <>
      <Navbar />
      <div className="page_wrp">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/team' element={<OurTeam />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App
