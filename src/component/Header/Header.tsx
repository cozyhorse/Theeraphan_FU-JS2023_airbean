import menu_icon from "../../assets/Global_assets/navicon.svg"
import bag_icon from "../../assets/Global_assets/bag-icon.svg"
import "./header.scss"


const Header = () => {
  return (
    <>
    <div className="header-wrapper">
        <div className="header-iconwrapper">
            <img className="icon menu_icon" src={menu_icon} alt="" />
            <div className="bag-wrapper">
                <div className="orders-count">7</div>
            <img className="icon bag-icon" src={bag_icon} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Header