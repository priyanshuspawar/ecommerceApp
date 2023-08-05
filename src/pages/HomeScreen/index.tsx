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
      x:Event.clientX,
      y:Event.clientY
    })
  }
  useEffect(()=>{
    window.addEventListener("mousemove",move)
  },[])
  return (
    <section className="">
      <header>
        <HeadBar/>
        <NavBar/>
        </header>
        <main className="">
          <HeroSection/>
          <CategorySecion/>

          {/* <DragHandler/> */}
          {/* <div ref={ref} className="w-screen">
            <ProductSlider change={change}/>
            <motion.div style={{translateX:mousePosition.x,translateY:mousePosition.y}} className="w-10 h-10 bg-black absolute z-50 flex">hello</motion.div>
          </div> */}
          <ChooseBrand/>
          <DealSecion/>
          <DiscountBanner/>
          <BestDealSection/>

          <CardOfferBanner/>

          <ChooseBrand/>
          <BestSelling/>

          <div className="my-20"/>
          <TrendingProductSection/>
          <Services/>
   
        </main>
        <motion.div style={{translateX:mousePosition.x,translateY:mousePosition.y}} className="w-10 h-10 bg-black absolute z-50 flex">hello</motion.div>
    </section>
  )
}

export default index