import closebtn from "../../assets/misc/close.svg";
import "./nav.scss"



const Nav = () => {
  return (
    <>
    <div className='nav-wrapper'>
    <img src={closebtn} alt="" />
    <ul className='nav-ul'>
        <li className='nav-item'><a href="">Meny</a></li>
        <li className='nav-item'><a href="">Vårt kaffe</a></li>
        <li className='nav-item'><a href="">Min profil</a></li>
        <li className='nav-item'><a href="">Orderstatus</a></li>
    </ul>
    </div>
    </>
  )
}

export default Nav