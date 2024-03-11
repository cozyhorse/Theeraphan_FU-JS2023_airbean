import menu_icon from "../../assets/Global_assets/navicon.svg";
import bag_icon from "../../assets/Global_assets/bag-icon.svg";

import Dropdown from "../Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { useOrdersStore } from "../../store/ordersStore";
import "./header.scss";

const Header = () => {
  const [openOrderTab, setOpenOrderTab] = useState(false);
  const { storedOrders, sumQuantity } = useOrdersStore();
  const [quantity, setQuantity] = useState<number>();

  useEffect(() => {
    const updateQuantity = sumQuantity();
    setQuantity(updateQuantity);
  }, [storedOrders, sumQuantity]);

  return (
    <>
      <div className="global-wrapper header-wrapper">
        <div className="header-iconwrapper">
          <img className="icon menu_icon" src={menu_icon} alt="" />
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
        {openOrderTab && <Dropdown />}
      </div>
    </>
  );
};

export default Header;
