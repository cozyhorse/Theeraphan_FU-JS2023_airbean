import { useEffect, useState } from "react"
import drone from "../../assets/misc/drone.svg"
import { useOrdersStore } from "../../store/ordersStore"
import "./status.scss"
import { DataBack } from "../../ts-files/MenuInterface"



const Status = () => {
  const {storedETA} = useOrdersStore();
  const [etaData, setEtaData] = useState<DataBack>([]);

useEffect(() => {
setEtaData(storedETA);
console.log("etaData", etaData)
}, [storedETA])


  return (
    <>
    <section className="global-wrapper status-wrapper">
    <p>Ordernummer <b>#{etaData.orderNr}</b></p>
    <img src={drone} alt="" />
    <div className="eta-wrapper">
    <p>Din beställning är på väg!</p>
    <p><b>{etaData.eta}</b> minuter</p>
    </div>
    <button>Ok, cool!</button>
</section>
    </>
  )
}

export default Status