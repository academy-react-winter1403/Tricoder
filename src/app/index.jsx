
import { Fragment } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/common/header/Header'
import { Footer } from '../components/common/footer/Footer'
import StudentPanel from './layouts/StudentPanelLayout/StudentPanel'
import CourseDetailPage from '../pages/courseDetail/CourseDetail'


function App() {

  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>


  
  )
}

export default App
