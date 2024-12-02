import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
