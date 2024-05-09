import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [selectedMenu, updateSelectedMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => updateSelectedMenu("home")}
          className={selectedMenu == "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => updateSelectedMenu("menu")}
          className={selectedMenu == "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => updateSelectedMenu("mobile")}
          className={selectedMenu == "mobile" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => updateSelectedMenu("contact")}
          className={selectedMenu == "contact" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
