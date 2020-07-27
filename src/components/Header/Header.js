import React from "react";
import { connect } from "react-redux";
import "./Header.scss";

const Header = ({ onThemeChangerClick, darkMode }) => (
 <div className="header-flex">
  <button className="theme-changer" onClick={onThemeChangerClick}>
   <i className={`fa ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
  </button>
  <div className="separator"></div>
 </div>
);

const mapStateToProps = ({ theme }) => ({
 darkMode: theme.darkMode
});

export default connect(mapStateToProps)(Header);
