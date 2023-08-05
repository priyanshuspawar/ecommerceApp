import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";
import CategorySecion from "../../components/CategorySection";
import DealSecion from "../../components/DealSection";
import ProductSlider from "../../components/ProductSlider";
import HeadBar from "../../components/HeadBar";
import ChooseBrand from "../../components/ChooseBrand";
import DiscountBanner from "../../components/DiscountBanner";
import BestDealSection from "../../components/BestDealSection";
import CardOfferBanner from "../../components/CardOfferBanner";
import BestSelling from "../../components/BestSelling";
import TrendingProductSection from "../../components/TrendingProductSection";
import Services from "../../components/Services";
import { motion } from "framer-motion";
import { useState,useRef, useEffect } from "react";
import DragHandler from "../../components/ProductSlider/DragHandler";


const index = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [diff,setDiff] = useState(0);
  const [mousePosition,setmousePosition] = useState({
    x:0,y:0
  })
  const change = (x:number,y:number) =>{
    // setmousePosition({
    //   x:x,
    //   y:y
    // })
  }
  const move = (Event:MouseEvent)=>{
  
    setmousePosition({
      x:Event.pageX-45,
      y:Event.pageY-45
    })
  }

  useEffect(()=>{
    window.addEventListener("mousemove",move)
  },[])
  return (
    <div className="flex flex-col w-screen overflow-hidden relative">
      <motion.div
          className=" h-[90px] w-[90px] flex absolute z-[5] rounded-full border-[#003D29] border-4 items-center justify-center"
          // variants={variants}
          // animate={"default"}
          style={{translateX:mousePosition.x, translateY:mousePosition.y}}
        
        >
          <p className="text-[#003D29] font-bold text-xl">Drag</p>
        </motion.div> 
      
      <HeadBar/>
        <NavBar/>
        <HeroSection/>
        <CategorySecion/>
        <div className="peer">
        <ProductSlider change={()=>{}}/>
        </div>        
    {/* <motion.div style={{translateX:mousePosition.x,translateY:mousePosition.y}} className="w-10 h-10 bg-black absolute z-50 hidden peer-hover:flex">hello</motion.div> */}
    
    </div>
  )
}

export default index