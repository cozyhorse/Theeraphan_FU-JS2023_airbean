
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./layout.scss"



const Layout = () => {
  const [loadBackground, setLoadBackground] = useState("");
  const [loadComponent, setLoadComponent] = useState(true);
  const location = useLocation();

  const backgroundBasedOnPath = () => {
    const currentPath = location.pathname;

    if(currentPath === "/menu"){
      setLoadBackground(`rgba(243, 228, 225, 1)`)
      setLoadComponent(true)
    }

    if(currentPath === "/about"){
      setLoadBackground(`rgba(243, 228, 225, 1)`)
      setLoadComponent(true)
    }

    if(currentPath === "/profile"){
      setLoadBackground(`rgba(47, 41, 38, 1)`)
      setLoadComponent(true)
    }

    if(currentPath === "/status"){
      setLoadBackground(`rgba(229, 103, 78, 1)`)
      setLoadComponent(false)
    }

    if(currentPath === "/"){
      setLoadBackground(`rgba(229, 103, 78, 1)`)
      setLoadComponent(false)
    }

  }

  useEffect(()=> {
    backgroundBasedOnPath()
  }, [location])

  return (
   <div style={{background: loadBackground}}>
   {loadComponent && <Header />}
   <main>
    <Outlet />
   </main>
   {loadComponent && <Footer />}
   </div>
  )
}

export default Layout