import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Landing from './component/Landing/Landing';
import Menu from './component/Menu/Menu';
import Nav from './component/Nav/Nav';
import Profile from './component/Profile/Profile';
import Status from './component/Status/Status';
import "./component/App/app.scss"



function App() {

  return (
    <>
    <div className='app-container'>
    <Header />
    <Menu />
    <Footer />  
    </div>
    </>
  )
}

export default App
