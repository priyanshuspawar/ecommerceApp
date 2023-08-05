import { products } from "../../constans";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ProductCardLarge from "../ProductCardLarge";


import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";
import img6 from "../../assets/images/img-6.jpg";
import img7 from "../../assets/images/img-7.jpg";
import img8 from "../../assets/images/img-8.jpg";
import img9 from "../../assets/images/img-9.jpg";


import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from "framer-motion";


interface props{
  change: (x:number,y:number)=>void
}

const index = ({change}:props) => {
  // const carousel = document.getElementById("wrapper");
  const arrImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  
  const newRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0,
  });

  
  const handleChange = (swiper:any) =>{
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    if(swiper.progress>0.05){
      progressBar.style.width = `${swiper.progress * 100}%`;
    }
    else{
      progressBar.style.width = `${0.05 * 100}%`;
    }
    
    
  }


  const drag =  (event:MouseEvent) =>{
    console.log("sss",event.clientX)
    change(event.clientX,event.clientY)
   setmousePosition({
    x:event.clientX,
    y:event.clientY
   }) 
  }

  useEffect(()=>{
   let divElement = ref.current;
   if(divElement){
    divElement.addEventListener("mousemove",drag)
   }
  },[])

  return (
    <div className="relative " ref={ref}>
    <div className="w-full flex flex-col relative gap-y-14 my-8" >

    <Swiper className="w-[85%]"
      slidesPerView={3} spaceBetween={0}
      onTransitionEnd={handleChange}
      // onTransitionEnd={(swiper)=>{console.log(swiper.activeIndex)}}
      >

       {products.map((product,index) => (
        <SwiperSlide className="flex w-[31%]">
                  <ProductCardLarge key={index}
                     ProductTitle={product.ProductTitle} ProductImage={product.ProductImage} Description={product.Description} Rating={product.Rating} RatedUsers={product.RatedUsers} Price={product.Price} currency={product.currency}
                   />



        

          </SwiperSlide>
        ))}



      </Swiper>

      <div className=" w-[85%] h-1 bg-[#D3D2D2]">
        <div
          className="progress-bar h-1 bg-black w-[10%] transition transform-gpu duration-100"
          ref={newRef}
          style={{ transition:'width 0.3s ease-in-out'}}
        ></div>
      </div>
{/* 
      <motion.div
          className=" h-[90px] w-[90px] flex absolute z-50 rounded-full border-[#003D29] border-4 items-center justify-center"
          // variants={variants}
          // animate={"default"}
          style={{translateX:mousePosition.x, translateY:mousePosition.y}}
        
        >
          <p className="text-[#003D29] font-bold text-xl">Drag</p>
        </motion.div> */}






    </div>

    </div>
  );
};

export default index;
