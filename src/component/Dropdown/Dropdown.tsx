import Vector_up from "../../assets/misc/Vector_up.svg";
import Vector_down from "../../assets/misc/Vector_down.svg";
import { useOrdersStore } from "../../store/ordersStore";
import { useEffect, useState } from "react";
import { BeansMenu } from "../../ts-files/MenuInterface";
import "./dropdown.scss";
import { useNavigate } from "react-router-dom";

type props = {
  onClick: () => void
}

const Dropdown = ({onClick}: props) => {
  const {storedOrders, sumTotal, incrementItem, decrementItem, confirmAndSendOrder} = useOrdersStore();
  const [totalPrice, setTotalPrice,] = useState<number>();

  useEffect(()=> {
    const totalprice = sumTotal();
    setTotalPrice(totalprice)

  },[sumTotal, storedOrders])

  const navigate = useNavigate()

  const handleOrder = ():void => {
    confirmAndSendOrder();
    navigate("status");

  };


  return (
    <>
      <div className="dropdown-orders ">
      {
        storedOrders.map((order: BeansMenu) => (
          <section className="menu-item">
          <div className="item-container">
            <div className="text-container">
              <h3>{order.title}</h3>
              <p>{order.price} kr</p>
            </div>
          </div>
          <div className="counters">
            <img className="arrow" onClick={() => incrementItem(order.id)} src={Vector_up} alt="" />
            <p>{order.quantity}</p>
            <img className="arrow" onClick={() => decrementItem(order.id)} src={Vector_down} alt="" />
          </div>
        </section>
        ))
      }
        <div className="summary">
          <div>
            <h3>Total </h3>
            <p>inkl moms + drönarleverans</p>
          </div>
          <h4>{totalPrice} kr</h4>
        </div>
        <button 
        onClick={() => {handleOrder(); onClick()}}
        >Take my Money!</button>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Dropdown;
