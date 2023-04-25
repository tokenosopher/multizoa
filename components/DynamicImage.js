import { motion } from "framer-motion";
import Image from "next/image";


//create a function with children that returns a motion.div
const DynamicImage = ({ image, alt }) => {

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    //create a motion div that rotates 180 degrees
    <>
      <br />
      <motion.div initial={variants.hidden} whileInView={variants.visible}>
        <Image src={image} alt={alt} placeholder={"blur"} blurDataURL={image.base64}/>
      </motion.div>
    </>
  );
};

export default DynamicImage;
