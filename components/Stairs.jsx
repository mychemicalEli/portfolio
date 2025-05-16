import { animate, motion } from "framer-motion";

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top:"100%",
    },
    finish:{
        top: ["100%, 0%"],
    },
};

const Stairs = () => {
  return <>
  {/* render 6 motion divs for each step of the stair */}
  </>
  ;
};

export default Stairs;
