import React from "react";
import {motion} from "framer-motion";

const ImageCreation = ({src, alt}) => {
  return <motion.img src={src} alt={alt}></motion.img>;
};

export default ImageCreation;
