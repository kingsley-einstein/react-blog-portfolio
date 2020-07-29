import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Header, Landing, Footer, Portfolio } from "./components";
import "./App.scss";
import "./prism.css";
import { ChangeTheme } from "./actions/themeActions";

const App = ({ dispatch, theme }) => {
 const switchModes = () => {
  dispatch(ChangeTheme(!theme.darkMode));
 };
 const mode = theme.darkMode ? "dark-mode": "light-mode";
 const css = "container " + mode;
 return (
  <div className={css}>
   <Router>
    <div className="header-division">
     <Header onThemeChangerClick={switchModes} />
    </div>
    <div className="main-division">
     <div className="inner-main-division">
      <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/portfolio" exact component={Portfolio} />
     </Switch>
     </div>
    </div>
    <div className="footer-division">
     <Footer />
    </div>
   </Router>
  </div>
 );
};

const mapStateToProps = ({ theme }) => ({
 theme
});

export default connect(mapStateToProps)(App);
