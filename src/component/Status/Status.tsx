import { useEffect, useState } from "react"
import drone from "../../assets/misc/drone.svg"
import { useOrdersStore } from "../../store/ordersStore"
import { DataBack } from "../../ts-files/MenuInterface"
import { useNavigate } from "react-router-dom"
import "./status.scss"



const Status = () => {
  const {storedETA} = useOrdersStore();
  const [etaData, setEtaData] = useState([] as DataBack);

useEffect(() => {
setEtaData(storedETA);
//console.log("etaData", etaData)
}, [storedETA, etaData])

const navigate = useNavigate()


  return (
    <>
    <section className="global-wrapper status-wrapper">
    <p>Ordernummer <b>#{etaData.orderNr}</b></p>
    <img src={drone} alt="" />
    <div className="eta-wrapper">
    <p>Din beställning är på väg!</p>
    <p><b>{etaData.eta}</b> minuter</p>
    </div>
    <button onClick={()=> navigate("/menu")} >Ok, cool!</button>
</section>
    </>
  )
}

export default Status