import menu_icon from "../../assets/Global_assets/navicon.svg"
import bag_icon from "../../assets/Global_assets/bag-icon.svg"
import "./header.scss"
import Dropdown from "../Dropdown/Dropdown"
import { useState } from "react"
import { useOrdersStore } from "../../store/ordersStore"



const Header = () => {
  const [openOrderTab, setOpenOrderTab] = useState(false);
  const {storedOrders} = useOrdersStore();

  return (
    <>
    <div className="global-wrapper header-wrapper">
        <div className="header-iconwrapper">
            <img className="icon menu_icon" src={menu_icon} alt="" />
            <div className="bag-wrapper">
                <div className="orders-count">{storedOrders ? storedOrders?.length : null}</div>
            <img onClick={() => setOpenOrderTab((prev) => !prev)} className="icon bag-icon" src={bag_icon} alt="" />
            </div>
        </div>
        {
          openOrderTab && <Dropdown />
        }
    </div>
    </>
  )
}

export default Header