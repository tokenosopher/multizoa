import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface DynamicImageProps {
  image: any;
  alt: string;
  src?: string;
}


const DynamicImage : React.FC<DynamicImageProps> = ({ image, alt, src }) => {

  const variants = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5, duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  const router = useRouter();

  return (
    //create a motion div that rotates 180 degrees
    <>
      <br />
      <motion.div initial={variants.hidden} whileInView={variants.visible} style={{cursor: src ? "pointer" : "auto"}}>
        <div onClick={() => router.push(src)}>
          <Image src={image} alt={alt} placeholder={"blur"} blurDataURL={image.base64} />
        </div>
      </motion.div>
    </>
  );
};

export default DynamicImage;
