import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ProductDetails' element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
