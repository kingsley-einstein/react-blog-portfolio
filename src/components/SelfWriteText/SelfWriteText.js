import React from "react";
import { connect } from "react-redux";
import { WriteText } from "../../actions/writeTextActions";
import "./SelfWriteText.scss";

let index = 0;

const SelfWriteText = ({ value, data, dispatch }) => {
 const iterate = () => {
  if (index < value.length) {
   const t = data + value.charAt(index);
   index++;
   setTimeout(() => {
    dispatch(WriteText(t));
   }, 70);
   // setTimeout(iterate, 50);
  }
 };
 iterate();
 return (
  <span className="self-type-text">{data}</span>
 );
}

const mapStateToProps = ({ selfWriteText }) => ({
 data: selfWriteText.data
});

export default connect(mapStateToProps)(SelfWriteText);
