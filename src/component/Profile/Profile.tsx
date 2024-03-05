import avatar from "../../assets/misc/Profile.svg"
import "./profile.scss";


const Profile = () => {
  return (
    <>
    <section className="global-wrapper profile-wrapper">
        <section className="avatar">
            <img src={avatar} alt="" />
            <p>NAMN EFTERNAMN</p>
            <p>name.lastname@email.com</p>
        </section>
        <section className="orderhistory">
            <p>Orderhistorik</p>
            

        </section>



    </section>
    </>
  )
}

export default Profile