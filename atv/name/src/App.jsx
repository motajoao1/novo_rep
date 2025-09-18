import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Servicos from './pages/Servicos'
import './App.css'

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/name' element={<Servicos />} />
            <Route path='/name' element={<SobreNos />} />
            <Route path='/name' element={<FaleComigo />} />
           
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
