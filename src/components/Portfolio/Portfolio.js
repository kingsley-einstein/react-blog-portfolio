import React from "react";
import { connect } from "react-redux";
import About from "../About/About";
import TechAndRepos from "../TechAndRepos/TechAndRepos";
import "./Portfolio.scss";
import { SwitchComponent } from "../../actions/carouselActions";

class Portfolio extends React.Component {

 componentDidMount() {
  this.props.dispatch(SwitchComponent("left"));
 }

 renderRightComponent = () => {
  this.props.dispatch(SwitchComponent("right"));
 }

 renderLeftComponent = () => {
  this.props.dispatch(SwitchComponent("left"));
 }
 render() {
  const { portfolioCarousel } = this.props;
  const leftOrTopComponent = 
   portfolioCarousel.currentComponent === "left" ? "left-or-top-component show" : "left-or-top-component";
  const rightOrBottomComponent =
   portfolioCarousel.currentComponent === "right" ? "right-or-bottom-component show" : "right-or-bottom-component";
  const leftOrTopSwitchingDiv =
   portfolioCarousel.currentComponent === "right" ? "switching-left-div show" : "switching-left-div";
  const rightOrBottomSwitchingDiv =
   portfolioCarousel.currentComponent === "left" ? "switching-right-div show" : "switching-right-div";
  const mobileRightOrBottomSwitchingDiv = 
   portfolioCarousel.currentComponent === "left" ? "switching-bottom-div show" : "switching-bottom-div";
   return(
    <div className="component-flex">
     {/* <div className={leftOrTopSwitchingDiv} onClick={this.renderLeftComponent}>
      <i className="fa fa-arrow-left"></i>
     </div> */}
      <div>
       <div className="spread"></div>
      <div className={leftOrTopComponent}>
       <About source="Hello component" />
      </div>
       <div className={rightOrBottomComponent}>
        <TechAndRepos />
       </div>
      </div>
      <div className="spread"></div>
     <div className={rightOrBottomSwitchingDiv} onClick={this.renderRightComponent}>
      <i className="fa fa-arrow-right"></i>
     </div>
     <div className={mobileRightOrBottomSwitchingDiv} onClick={this.renderRightComponent}>
      <i className="fa fa-arrow-down"></i>
     </div>
    </div>
   );
 }
}

const mapStateToProps = ({ portfolioCarousel }) => ({
 portfolioCarousel
});

export default connect(mapStateToProps)(Portfolio);
