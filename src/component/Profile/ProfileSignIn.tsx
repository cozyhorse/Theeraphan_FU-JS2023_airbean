import GroupLogoMini from "../../assets/misc/GroupLogoMini.svg";

import "./profilesignin.scss";



const ProfileSignIn = () => {
  return (
    <div className={`reg-wrapper`}>
      <section>
        <img src={GroupLogoMini} alt="" />
        <h1>Välkommen till AirBean-familjen!</h1>
        <h3>
          Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
        </h3>
      </section>
      <form>
        <label htmlFor="name">Namn</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <section>
          <input className="radiobtn" type="radio" name="gdpr" />
          <label className="gdpr" htmlFor="gdpr">
            GDPR Ok!
          </label>
        </section>
      </form>
      <button>Brew me a cup!</button>
    </div>
  );
};

export default ProfileSignIn;
