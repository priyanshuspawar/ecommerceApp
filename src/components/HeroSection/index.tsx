import { motion, AnimatePresence } from "framer-motion"
import herobg from "../../assets/herobg.png"
// import ladder from "../../assets/ladders.png"
// import bottomLeft from "../../assets/bottomLeft.png";
// import bottomRight from "../../assets/bottomRight.png";
// import middle from "../../assets/middle.png";
// import TopMost from "../../assets/TopMost.png";
// import { slideAnimation } from "../../config/motion"
import { heroScreenText } from "../../constans"
import CapsuleButton from "../CapsuleButton"


const index = () => {
  const height = window.innerHeight*0.55;
  return (
    <AnimatePresence>
        <motion.div className={"flex flex-col relative"}
        style={{height:height}}
        >
          <div className="flex w-screen h-full">
            <img src={herobg} width={"100%"} height={"100%"}
            />
          </div>

           {/* right section */}
        {/* <div className="hidden">
        <motion.img src={ladder} className="absolute hidden" height={"100%"} width={"100%"} {...slideAnimation("right")}/>
        <img src={TopMost} className="absolute z-10 right-[10%] top-[18%]"/>
        <img src={middle} className="absolute z-10 right-[29%] mb-20"/>
        <img src={bottomLeft} className="absolute z-10 right-[38%] bottom-32"/>
        <img src={bottomRight} className="absolute z-10 right-[12%] bottom-[25%]"/>
        </div> */}



        {/* left section */}
        <motion.div className="absolute flex flex-col gap-8 top-0 h-full justify-center pl-4">
          <motion.p className="text-3xl leading-10 font-bold text-[#003D29]">
            {heroScreenText.title}
          </motion.p>
          
          <motion.p className="text-sm font-normal text-[#003D29] whitespace-pre-wrap">
            {heroScreenText.description}
          </motion.p>
          {/* learn more */}
          <div className="">
          <CapsuleButton height="50px" width="38%" />
          </div>
        </motion.div>
     
          
        </motion.div>
    </AnimatePresence>
  )
}

export default index