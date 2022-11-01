import { motion } from "framer-motion";

//create a function with children that returns a motion.div
const ImageCreation = ({ children }) => {

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    //create a motion div that rotates 180 degrees
    <>
      <br />
      <motion.div initial={variants.hidden} whileInView={variants.visible}>
        {children}
      </motion.div>
    </>
  );
};

export default ImageCreation;
