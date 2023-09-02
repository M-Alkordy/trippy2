
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import PopularDestinations from './components/PopularDestinations/PopularDestinations'
import RecentTrips from './components/RecentTrips/RecentTrips'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicePage from './pages/ServicePage'
import Test from './components/Axios/Axios'
function App() {

  return (
    <>
{/*       <NavBar elements ={[{name: "home" , path :"/"}, {name: "about" , path :"/about"} , {name: "service" , path :"/service"} , {name: "contact" , path :"/contact"} ]} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/service' element={<ServicePage />} />
      </Routes> */}
      <Test />
    </>
  )
}

export default App
