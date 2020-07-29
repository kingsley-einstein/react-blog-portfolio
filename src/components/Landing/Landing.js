import React from "react";
import MarkDown from "react-markdown";
import { connect } from "react-redux";
import "./Landing.scss";
import Loader from "../Loading/Loading";
import CodeRenderer from "../CodeRenderer/CodeRenderer";
import SelfWriteText from "../SelfWriteText/SelfWriteText";
import MetaDataEffect from "../../effects/metadataEffects";

const RenderedImage = ({ src, alt }) => (
 <img 
  className="round-avatar" 
  src={src} 
  alt={alt} 
 />
);

const RenderedCodeBlock = ({ value, language }) => (
 <CodeRenderer 
  language={language} 
  value={value} 
 />
);

const renderers = {
 image: RenderedImage,
 code: RenderedCodeBlock
};

const markDownSource = "meta/landing.md";

class Landing extends React.Component {
 componentDidMount() {
  this.props.dispatch(MetaDataEffect(markDownSource));
  // console.log(this.props.data);
 }

 render = () => (
  <div className="landing-flex">
   <div>
    { this.props.loading ? <Loader /> : this.props.error ? <span>{this.props.error}</span> : <MarkDown source={this.props.data} renderers={renderers} />}
    <SelfWriteText value="Building stuffs because they matter." />
   </div>
  </div>
 );
}

const mapStateToProps = ({ metadata }) => ({
 data: metadata.data,
 error: metadata.error,
 loading: metadata.loading
});

export default connect(mapStateToProps)(Landing);
