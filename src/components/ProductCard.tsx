import { useEffect, useState } from "react";
import RatingStars from "./RatingStars";
import { AnimatePresence, motion } from "framer-motion";
interface props {
  ProductTitle: string;
  ProductImage: string;
  Description: string;
  Rating: number;
  RatedUsers: Number;
  Price: Number;
  currency: string;
}

const ProductCard = (props: props) => {
  const [mousePosition,setmousePosition] = useState({
    x:0,
    y:0
  })
  useEffect(()=>{
    const mouseMove = (event: MouseEvent) => {
      setmousePosition({
        x: event.clientX,
        y: event.clientY
      })
    }
    window.addEventListener("mousemove",mouseMove);

    return ()=>{
      window.removeEventListener("mousemove",mouseMove);
    }
  },[])

  const variants ={
    default:{
      x: mousePosition.x-260,
      y: mousePosition.y-390
    },
    transition:{
      type: "spring", duration: 0.8 , mass:0.5
    }
  }



  return (
    <div className="flex flex-col relative overflow-hidden w-[25%] h-2/5">
    <div className="flex flex-col">
      <AnimatePresence>
      <motion.div className="w-[100%] overflow-hidden group flex items-center justify-center object-contain bg-[#F5F6F6]">
        <img src={props.ProductImage}  className="object-contain group-hover:scale-125 transition transform-gpu duration-100 ease-in-out"
        width={"70%"} height={"70%"}
        />
        <motion.div className="h-[20%] w-[20%] hidden group-hover:flex absolute z-20 rounded-full border-[#003D29] border-4 items-center justify-center"
        variants={variants} animate={"default"}
        >
          <p className="text-[#003D29] font-bold text-xl">Drag</p>
        </motion.div>
      </motion.div>


      <div className="p-2 bg-white rounded-full absolute right-4 top-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FFFFFF" viewBox="0 0 24 24" stroke="#4F4F4F" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
      </AnimatePresence>



    </div>
        <div className="flex justify-between">
        <p className="font-semibold text-lg">{props?.ProductTitle}</p> 
        <p className="font-bold text-lg">{`${props?.Price}`}</p>
      </div>
      <p className="font-light text-xs">{props?.Description}</p>
      <RatingStars rating={props?.Rating}/>

 </div>



  );
};

export default ProductCard;
