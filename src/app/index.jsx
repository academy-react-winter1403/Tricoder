import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/common/header/Header'
import { Footer } from '../components/common/footer/Footer'


function App() {

  const location = useLocation()
  console.log(location);

  return (
    <main className={`flex flex-col ${location.pathname === '/' ? "heroBG" : ""}   `}>
      <Header />
      <Outlet />
      <Footer />
    </main>







  )
}

export default App
