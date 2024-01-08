import logo from "../../Files/Logo.png";
import avatar from "../../Files/Avatar.png";
import {
  SearchNormal1Linear,
  FilterLinear,
  HeartBold,
  NotificationBold,
  Setting2Bold,
} from "react-iconsax-icons";
import "../../css/header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand px-4 py-3">
        <div className="d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <div className="searchContainer">
            <div className="search">
              <SearchNormal1Linear className="icon searchIcon" />
              <input type="search" placeholder="search somthing there" />
            </div>
            <div className="filterSearch">
              <FilterLinear className="icon filterIcon" />
            </div>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <HeartBold className="icon" />
          </li>
          <li className="nav-item nav-link notifIcon">
            <NotificationBold className="icon" />
          </li>
          <li className="nav-item nav-link">
            <Setting2Bold className="icon" />
          </li>
          <li className="nav-item">
            <img className="avatar" src={avatar} alt="#" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
