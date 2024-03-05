import drone from "../../assets/misc/drone.svg"

import "./status.scss"
const Status = () => {
  return (
    <>
    <section className="global-wrapper status-wrapper">
        <p>Ordernummer <b>#87FD87F</b></p>
        <img src={drone} alt="" />
        <div className="eta-wrapper">
        <p>Din beställning är på väg!</p>
        <p>placeholder time</p>
        </div>
        <button>Ok, cool!</button>
    </section>
    </>
  )
}

export default Status