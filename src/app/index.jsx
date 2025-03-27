
import { Fragment } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import StudentPanel from './layouts/StudentPanelLayout/StudentPanel'
import CourseDetailPage from '../pages/courseDetail/CourseDetail'


function App() {
  
  return (
 <>


 <Fragment>
 <CourseDetailPage/>
      <Header/>
        <Outlet/>
        <Footer/>
    </Fragment>


  

 </>
  )
}

export default App
