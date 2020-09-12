import React from "react";
import { NavLink as Anchor } from "react-router-dom";
import { connect } from "react-redux";
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import "./Header.scss";

const useStyles = makeStyles(theme => ({
 appBar: {
  zIndex: theme.zIndex.drawer + 1
 },
 drawer: {
  flexShrink: 0
 },
 c: {
  overflow: "auto"
 }
}))

const Header = ({ onThemeChangerClick, darkMode }) => {
 const classes = useStyles();
 const [open, setDrawerState] = React.useState(false);
 const toggleState = () => {
  setDrawerState(!open);
 };
 return (
  <div className="header header-flex">
   <AppBar position="static" color="primary" className={classes.appBar}>
    <Toolbar>
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
    <button className="hamburger" onClick={toggleState}>
     <div></div>
     <div></div>
     <div></div>
    </button>
    </Toolbar>
   </AppBar>
   <div className="top-drawer">
     <Drawer variant="persistent" anchor="top" open={open} className={classes.drawer}>
      <Toolbar>
       <div className={classes.c}>
        <List>
         <ListItem button component="a" href="/">
          <ListItemText primary="Home" />
         </ListItem>
         <ListItem button component="a" href="/portfolio">
          <ListItemText primary="Portfolio" />
         </ListItem>
        </List>
       </div>
      </Toolbar>
     </Drawer>
    </div>
  </div>
 );
}

const mapStateToProps = ({ theme }) => ({
 darkMode: theme.darkMode
});

export default connect(mapStateToProps)(Header);
