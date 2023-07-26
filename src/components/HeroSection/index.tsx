import { motion, AnimatePresence } from "framer-motion"
import herobg from "../../assets/herobg.png"
import ladder from "../../assets/ladders.png"
import { slideAnimation } from "../../config/motion"
import { heroScreenText } from "../../constans"
const index = () => {
  return (
    <AnimatePresence>
      <motion.div className="flex scrollbar-hide items-center">
        
        <img src={herobg} height={"100%"} width={"100%"} className=""/>
        <motion.img src={ladder} className="absolute" height={"100%"} width={"100%"} {...slideAnimation("right")}/>
        <motion.div className="absolute flex flex-col gap-16 pb-12  pl-16">
          <motion.p className="text-6xl font-bold w-9/12 text-[#003D29] leading-[75px]">
            {heroScreenText.title}
          </motion.p>
          
          <motion.p className="text-xl font-normal text-[#003D29] w-6/12">
            {heroScreenText.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default index