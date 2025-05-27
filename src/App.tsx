
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
import Program from './pages/Program'
import GlobalPresence from './pages/GlobalPresence'
import JoinPage from './pages/JoinPage'
import Blog from './pages/Blog'
import Disclaimer from './pages/Disclamer'

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
          <Route path='/programs' element={<Program />} />
          <Route path='/global-presence' element={<GlobalPresence />} />
          <Route path='/join' element={<JoinPage />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App
