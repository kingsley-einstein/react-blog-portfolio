const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
 addBabelPlugin(
  ["prismjs", {
   "languages": ["java", "javascript", "css", "markup", "typescript", "shell-session", "batch"]
  }]
 )
);
