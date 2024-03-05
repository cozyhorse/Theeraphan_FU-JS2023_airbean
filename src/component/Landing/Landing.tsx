import "./landing.scss"
import header_left from "../../assets/Landing_assets/header_left.svg"
import header_right from "../../assets/Landing_assets/header_right.svg"
import header_welcome from "../../assets/Landing_assets/header_welcome.svg"



const Landing = () => {
  return (
    <>
    <div className="global-wrapper wrapper">
    <img className="header header_left" src={header_left} alt="" />
    <img className="header header_welcome" src={header_welcome} alt="" />
    <img className="header header_right" src={header_right} alt="" />
    </div>
    </>
  )
}

export default Landing