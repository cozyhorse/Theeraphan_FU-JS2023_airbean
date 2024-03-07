import Vector_up from "../../assets/misc/Vector_up.svg";
import Vector_down from "../../assets/misc/Vector_down.svg";
import "./dropdown.scss";

const Dropdown = () => {
  return (
    <>
      <div className="dropdown-orders ">
        <section className="menu-item">
          <div className="item-container">
            <div className="text-container">
              <h3>BryggKafefe</h3>
              <p>12 kr</p>
            </div>
          </div>
          <div className="counters">
            <img src={Vector_up} alt="" />
            <p>3</p>
            <img src={Vector_down} alt="" />
          </div>
        </section>
        <div className="summary">
          <div>
            <h3>Total </h3>
            <p>inkl moms + drönarleverans</p>
          </div>
          <h4>122 kr</h4>
        </div>
        <button>Take my Money!</button>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Dropdown;
