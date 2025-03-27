
import { Fragment } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/common/footer/Footer'
import { Header } from '../components/common/header/Header'

function App() {

  return (
    <div>
      <Header />
      
      <Outlet />
      <Footer />
    </div>

  )
}

export default App
