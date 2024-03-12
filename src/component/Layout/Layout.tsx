
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./layout.scss"



const Layout = () => {
  const [loadBackground, setLoadBackground] = useState("");
  const [loadheader, setLoadHeader] = useState(true);
  const [loadfooter, setLoadFooter] = useState(true);
  const location = useLocation();

  const backgroundBasedOnPath = () => {
    const currentPath = location.pathname;

    if(currentPath === "/menu"){
      setLoadBackground(`rgba(243, 228, 225, 1)`)
      setLoadHeader(true)
      setLoadFooter(true)
    }

    if(currentPath === "/about"){
      setLoadBackground(`rgba(243, 228, 225, 1)`)
      setLoadHeader(true)
      setLoadFooter(true)
    }

    if(currentPath === "/profile"){
      setLoadBackground(`rgba(47, 41, 38, 1)`)
      setLoadHeader(true)
      setLoadFooter(false)
    }

    if(currentPath === "/status"){
      setLoadBackground(`rgba(229, 103, 78, 1)`)
      setLoadHeader(false)
        setLoadFooter(false)
    }

    if(currentPath === "/"){
      setLoadBackground(`rgba(56, 132, 109, 1)`)
      setLoadHeader(false)
      setLoadFooter(false)
    }

  }

  useEffect(()=> {
    backgroundBasedOnPath()
  }, [location])

  return (
   <div style={{background: loadBackground}}>
   {loadheader && <Header />}
   <main>
    <Outlet />
   </main>
   {loadfooter && <Footer />}
   </div>
  )
}

export default Layout