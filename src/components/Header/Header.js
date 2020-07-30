import React from "react";
import { NavLink as Anchor } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";

const Header = ({ onThemeChangerClick, darkMode }) => (
 <div className="header header-flex">
  <button className="theme-changer" onClick={onThemeChangerClick}>
   <i className={`fa ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
   <div className="tip">
    { darkMode ? <span>Switch to light mode </span> : <span>Switch to dark mode</span> }
   </div>
  </button>
  <div className="separator"></div>
  <div className="links">
   <Anchor to="/" exact activeClassName="active" className="regular">Home</Anchor>
   <Anchor to="/portfolio" exact activeClassName="active" className="regular">Portfolio</Anchor>
   <Anchor to="/" exact activeClassName="active" className="regular">Articles</Anchor>
   <Anchor to="/" exact className="special">
    <i className="fa fa-envelope"></i>
    <span>Contact Me</span>
   </Anchor>
  </div>
  <button className="hamburger">
   <div></div>
   <div></div>
   <div></div>
  </button>
 </div>
);

const mapStateToProps = ({ theme }) => ({
 darkMode: theme.darkMode
});

export default connect(mapStateToProps)(Header);
