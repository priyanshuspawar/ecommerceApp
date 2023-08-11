import { motion } from "framer-motion";
import { ReactComponent as Downarrow } from "../assets/downarrow.svg";
interface props{
    visible: boolean;
}

const DropDown = ({visible}:props) => {
  return (
    <motion.div className={"flex bg-white absolute overflow-hidden rounded-2xl w-screen flex-col items-center gap-y-6 py-4 shadow-xl z-10" 
}
    initial={{translateY:"0px"}}
    animate={{translateY:"120px"}}

    >
      <div className="flex items-center gap-x-2">
        <p>Category</p>
        <Downarrow/>
      </div>
      <p>Deals</p>
      <p>Whats New</p>
      <p>Delivery</p>
    </motion.div>
 
  );
};

export default DropDown;
