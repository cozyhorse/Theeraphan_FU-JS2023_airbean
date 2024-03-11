
import closebtn from "../../assets/misc/close.svg";
import { navigations } from "../../ts-files/NavItems";
import { NavLink } from "react-router-dom";
import "./nav.scss";

type props = {
  onClick: () => void
}

const Nav = ({onClick}: props) => {

  return (
    <>
    <div className='global-wrapper nav-wrapper'>
    <img onClick={onClick} src={closebtn} alt="" />
    <ul className='nav-ul'>
{ navigations.map((nav, index) => (
  <li key={index} onClick={onClick} className="nav-item"><NavLink to={nav.href}>{nav.label}</NavLink></li>
))}

    </ul>
    </div>
    </>
  )
}

export default Nav