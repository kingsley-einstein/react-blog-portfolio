import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import "./Footer.scss";

const useStyles = makeStyles(theme => {
 return {
  appBar: {
   top: "auto",
   bottom: 0
  }
 }
});

const Footer = () => {
 const classes = useStyles();
 return (
  <div className="footer">
   <AppBar color="primary" position="fixed" className={classes.appBar}>
    <Toolbar>
    <div className="separator"></div>
     <div className="centered-icons">
      <i className="fab fa-instagram legible"></i>
      <i className="fab fa-facebook legible"></i>
      <i className="fab fa-twitter legible"></i>
      <i className="fab fa-github legible"></i>
     </div>
     <div className="separator"></div>
    </Toolbar>
   </AppBar>
  </div>
 );
}

export default Footer;
