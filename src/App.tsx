
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/navbar'
import HomePage from './pages/HomePage'
import OurTeam from './pages/OurTeam'
import AboutPage from './pages/AboutPage'
import Documentation from './pages/Documentation'
import FaqPage from './pages/Faq'
import Glossary from './pages/Glossary'

function App() {

  return (
    <>
      <Navbar />
      <div className="page_wrp">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/documentation' element={<Documentation />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/glossary' element={<Glossary />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App
