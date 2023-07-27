import { motion, AnimatePresence } from "framer-motion"
import herobg from "../../assets/herobg.png"
import ladder from "../../assets/ladders.png"
import bottomLeft from "../../assets/bottomLeft.png";
import bottomRight from "../../assets/bottomRight.png";
import middle from "../../assets/middle.png";
import TopMost from "../../assets/TopMost.png";
import { slideAnimation } from "../../config/motion"
import { heroScreenText } from "../../constans"
import CapsuleButton from "../CapsuleButton"


const index = () => {
  return (
    <AnimatePresence>
      <motion.div className="flex scrollbar-hide items-center">
        

        {/* right section */}
        <img src={herobg} height={"100%"} width={"100%"} className=""/>
        <motion.img src={ladder} className="absolute" height={"100%"} width={"100%"} {...slideAnimation("right")}/>
        <img src={TopMost} className="absolute z-10 right-[10%] top-[21%]"/>
        <img src={middle} className="absolute z-10 right-[29%] mb-20"/>
        <img src={bottomLeft} className="absolute z-10 right-[38%] bottom-32"/>
        <img src={bottomRight} className="absolute z-10 right-[12%] bottom-32"/>


        {/* left section */}
        <motion.div className="absolute flex flex-col gap-16 pb-12  pl-16">
          <motion.p className="text-6xl font-bold w-9/12 text-[#003D29] leading-[75px]">
            {heroScreenText.title}
          </motion.p>
          
          <motion.p className="text-xl font-normal text-[#003D29] w-6/12">
            {heroScreenText.description}
          </motion.p>
          {/* learn more */}
          <CapsuleButton/>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default index