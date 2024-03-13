import avatar from "../../assets/misc/Profile.svg";

import "./profilesignedin.scss"


const ProfileSignedIn = () => {
    return (
        <>
          <section className="global-wrapper profile-wrapper">
            <section className="avatar">
              <img src={avatar} alt="" />
              <p>NAMN EFTERNAMN</p>
              <p>name.lastname@email.com</p>
            </section>
            <section className="orderhistory">
              <h4>Orderhistorik</h4>
              <div className="info-container">
                <article>
                  <p>#AB83498249872</p>
                  <p>date/date/date</p>
                </article>
                <article>
                  <p className="dates">00/00/00</p>
                  <p className="total">298392123123</p>
                </article>
              </div>
              <div className="info-container">
                <article>
                  <p>#AB83498249872</p>
                  <p>date/date/date</p>
                </article>
                <article>
                  <p className="dates">00/00/00</p>
                  <p className="total">298392123123</p>
                </article>
              </div>
              <article className="totale">
                <p>Totalt spenderat</p>
                <p>1231 Kr</p>
              </article>
            </section>
          </section>
        </>
      );
}

export default ProfileSignedIn