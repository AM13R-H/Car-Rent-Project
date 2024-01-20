import logo from "../../Files/Logo.png";
import "../../css/footer.css";

function Footer() {
  return (
    <>
      <div className="footer px-4 py-2">
        <div className="row pb-2">
          <div className="logo col-lg-6 col-md-5 pb-2">
            <img className="logoImg" src={logo} alt="" />
            <p>
              Our vision is to provide convenience
              <br />
              and help increase your sales business.
            </p>
          </div>
          <div className="footerContainer col-lg-6 col-md-7 pb-2">
            <div className="about">
              <h5>About</h5>
              <ul>
                <li>
                  <a href="">How it works</a>
                </li>
                <li>
                  <a href="">Featured</a>
                </li>
                <li>
                  <a href="">Partnership</a>
                </li>
                <li>
                  <a href="">Bussiness</a>
                </li>
              </ul>
            </div>
            <div className="community">
              <h5>Community</h5>
              <ul>
                <li>
                  <a href="">Events</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Podcast</a>
                </li>
                <li>
                  <a href="">Invite a friend</a>
                </li>
              </ul>
            </div>
            <div className="socials">
              <h5>socials</h5>
              <ul>
                <li>
                  <a href="">Discord</a>
                </li>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">Twitter</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="privacy d-flex justify-content-between">
          <p>©2022 MORENT. All rights reserved</p>
          <ul>
            <li className="mr-5">
              <a href="">Privacy & Policy</a>
            </li>
            <li>
              <a href="">Terms & Condition</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
