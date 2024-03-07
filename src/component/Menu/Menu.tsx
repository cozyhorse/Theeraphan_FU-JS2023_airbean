import { useEffect, useState } from "react";
import add from "../../assets/misc/add.svg";
import { BeansMenu } from "../../ts-files/MenuInterface";
import "./menu.scss";
import { useOrdersStore } from "../../store/ordersStore";

const fetchBeans = async () => {
  const rsp = await fetch(
    "https://airbean-api-xjlcn.ondigitalocean.app/api/beans"
  );
  const data = await rsp.json();
  console.log("beans", data.menu);
  return await data.menu;
};

const Menu = () => {
    const [beans, setBeans] = useState<BeansMenu[]>([]);
    const {storedOrders, addCoffe, sumTotal} = useOrdersStore();

  useEffect(() => {
    const PrintBeans = async () => {
        const data: BeansMenu[] = await fetchBeans();
        console.log("first",data)
        setBeans(data);
      }

      PrintBeans()
  }, []);

  useEffect(() => {
    console.log("storedOrders array", storedOrders);
  },[storedOrders])

  const AddCoffeOrders = (title:string, price:number, id:string) => {
    addCoffe ? addCoffe(title, price, id) : console.log("Adding failed")

    sumTotal();
  }


  return (
    <>
      <section className="global-wrapper menu-wrapper">
        <h1>Meny</h1>
        {beans.map((bean:BeansMenu, index:number) => (
            <section key={index} className="menu-item">
            <div className="item-container">
              <img onClick={(() => AddCoffeOrders(bean.title, bean.price, bean.id!))} className="add-icon" src={add} alt="" />
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


