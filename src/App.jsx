
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
import Effect from './components/useEffect/useEffect'
import CdnBootstrap from './components/Bootsrtap/CdnBootstrap'
import Bootstrap from './components/Bootsrtap/Bootstrap'
import { createContext, useState } from 'react'
import GrandParent from './components/SendInfoByProps/GrandParent'
import Parent from './components/memo/Parent'

export const UserName = createContext(null)

function App() {
  const [name, setname] = useState("Mohammed");

  return (
    <>
      {/*       <NavBar elements ={[{name: "home" , path :"/"}, {name: "about" , path :"/about"} , {name: "service" , path :"/service"} , {name: "contact" , path :"/contact"} ]} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/service' element={<ServicePage />} />
      </Routes> */}
      {/* <Test /> */}
      {/* <Effect /> */}
      {/* <CdnBootstrap /> */}
      {/* <Bootstrap /> */}
{/*       <UserName.Provider value={name}>
        <GrandParent />
      </UserName.Provider> */}
      <Parent />
    </>
  )
}

export default App
