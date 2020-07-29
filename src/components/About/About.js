import React from "react";
import MarkDown from "react-markdown";

const About = ({ source }) => {
 return (
  <div>
   {/* <MarkDown source={source} /> */}
   {source}
  </div>
 );
};
export default About;
