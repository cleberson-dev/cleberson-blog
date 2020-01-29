import React from "react";
import SVG from "react-inlinesvg";

const SVGIcon = ({ src, color = '#FFFFFF', alt='' }) => (
  <SVG
    src={src}
    preProcessor={code => code.replace(/fill="\[here\]"/g, `fill="${color}"`)}
    description={alt} 
  />
);

export default SVGIcon;