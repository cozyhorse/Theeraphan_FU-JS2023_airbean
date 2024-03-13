import menu_icon from "../../assets/Global_assets/navicon.svg";
import bag_icon from "../../assets/Global_assets/bag-icon.svg";

import Dropdown from "../Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { useOrdersStore } from "../../store/ordersStore";
import "./header.scss";
import Nav from "../Nav/Nav";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [openOrderTab, setOpenOrderTab] = useState(false);
  const [openNavTab, setOpenNavTab] = useState(false);
  const { storedOrders, sumQuantity } = useOrdersStore();
  const [quantity, setQuantity] = useState<number>();

  const location = useLocation();

  const hideBag = () => {
    const currentPath = location.pathname;
    const bag = document.querySelector(".bag-wrapper")

    if(currentPath === "/profile"){
      bag?.classList.add("hidden")
    }else{
      bag?.classList.remove("hidden")
    }

  }

  useEffect(() => {
    hideBag()
  }, [location])

  useEffect(() => {
    const updateQuantity = sumQuantity();
    setQuantity(updateQuantity);
  }, [storedOrders, sumQuantity]);

  return (
    <>
      <div className="global-wrapper header-wrapper" style={openNavTab ? {zIndex: "9"} : {}}>
        <div 
        className="header-iconwrapper"
        style={openNavTab ? {justifyContent: "end"} : {}}
        >
          {
            !openNavTab ? (<img 
              className="icon menu_icon"
              style={openOrderTab ? {zIndex: "-1"} : {}} 
              src={menu_icon} alt="" 
              onClick={() => setOpenNavTab((prev) => !prev)}
              />) : null
          }
          <div className="bag-wrapper">
            {storedOrders?.length ? (
              <div className="orders-count">{quantity}</div>
            ) : null}
            <img
              onClick={() => setOpenOrderTab((prev) => !prev)}
              className="icon bag-icon"
              src={bag_icon}
              alt=""
            />
          </div>
        </div>
        {openOrderTab && <Dropdown onClick={() => setOpenOrderTab((false))} />}
        {openNavTab && <Nav onClick={() => setOpenNavTab((false))} />}
      </div>
    </>
  );
};

export default Header;
