import { useEffect, useState,useRef } from "react";


import { motion, useMotionValue, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Element from "./Element";

import {Swiper ,SwiperSlide } from "swiper/react";

function DragHandler() {

  const [showing, setShowing] = useState(false);
  const newRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);



  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const arrSlide = ["s1", "s1", "s1", "s1", "s1", "s1", "s1", "s1", "s1", "s1"];
  
  
  const mouseEnter = (i:number) => {
    // setShowing(true)
    
  };

  const mouseMove = (event: MouseEvent) => {
    // console.log(ref.current?.offsetWidth,ref.current?.clientWidth,event.clientX)
    if(event){
      setMousePosition({
        x:event.clientX,
        y:event.clientY
      })
    }
  };
  const mouseOut = ()=>{
    setShowing(false)
  }
  const variants = {
    default: {
      x: mousePosition.x-40,
      y: mousePosition.y-40,
    },
    transition:{
      type:"spring",
      duration: "0.5"
    }
  };

  useEffect(()=>{
    newRef.current?.addEventListener("mousemove",mouseMove);
    
  },[])


  return (
    <div className="w-screen h-80 flex relative">
      
      <Swiper className="w-[100%] h-56 peer" onDragEnter={(event)=>{console.log(event)
      ;
      }}
      slidesPerView={3}
          >
        {arrSlide.map((e,i)=>{
          return(
            
              <SwiperSlide  onMouseMove={()=>mouseEnter(i)} key={i}>
                <div ref={ref}>
                <Element/>
                </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <motion.div
        className="w-[80px] block h-[80px] items-center justify-center rounded-full bg-white pointer-events-none absolute z-50"
        // style={{display:"flex"}}
        variants={variants}
        animate={"default"}
      >
        helllo
      </motion.div>
    </div>
  );
}

export default DragHandler;
