import React, { useEffect } from "react";
import Prism from "prismjs";

const CodeRenderer = ({ value, language }) => {
 useEffect(() => {
  Prism.highlightAll();
 }, [value]);
 return (
  <pre>
   <code className={`language-${language}`}>
    {value}
   </code>
  </pre>
 );
}

export default CodeRenderer;
