import { useEffect, useState } from "react";
import add from "../../assets/misc/add.svg";
import { BeansMenu } from "../../ts-files/MenuInterface";
import "./menu.scss";

const fetchBeans = async () => {
  const rsp = await fetch(
    "https://airbean-api-xjlcn.ondigitalocean.app/api/beans"
  );
  const data = await rsp.json();
  console.log("beans", data.menu);
  return await data.menu;
};

const Menu = () => {
    const [beans, setBeans] = useState([]);

  useEffect(() => {
    const PrintBeans = async () => {
        const data = await fetchBeans();
        setBeans(data);
      }

      PrintBeans()
  }, []);

  const handleClick = (item) => {
    console.log("Horse", item)
  }


  return (
    <>
      <section className="global-wrapper menu-wrapper">
        <h1>Meny</h1>
        {beans.map((bean:BeansMenu, index) => (
            <section key={index} className="menu-item">
            <div className="item-container">
              <img onClick={(() => handleClick(bean.title))} className="add-icon" src={add} alt="" />
              <div className="text-container">
                <h3>{bean.title}</h3>
                <p>{bean.desc}</p>
              </div>
            </div>
            <h3 className="price">{bean.price} Kr</h3>
            </section>
        ))}

      </section>
    </>
  );
};

export default Menu;


