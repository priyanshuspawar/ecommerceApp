import { useRef } from "react";
import RatingStars from "./RatingStars";

import AddToCartButton from "./AddToCartButton";
import { DragHandler } from "./ProductSlider/DragHandler";
import { motion } from "framer-motion";

interface props {
  ProductTitle: string;
  ProductImage: string;
  Description: string;
  Rating: number;
  RatedUsers: number;
  Price: Number;
  currency: string;
}

const ProductCardLarge = (props: props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = DragHandler(ref, 2);
 

  return (
    <div ref={ref} className="flex bg-white flex-col flex-grow overflow-hidden">
      <div className="w-full h-[70%] bg-[#F5F6F6] cursor-none flex-shrink-0 relative overflow-hidden rounded-xl group">
        <motion.div
          className={
            "w-[90px] items-center justify-center h-[90px] absolute z-50 group-hover:flex hidden flex-grow bg-transparent border-2 border-green-950 rounded-full"
          }
          // variants={variants}
          animate={{ x: x - 40, y: y }}
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 80,
            restDelta: 0.001,
          }}
        >
          <p>Drag</p>
        </motion.div>

        <img
          src={props.ProductImage}
        className="object-contain aspect-square m-auto pointer-events-none group-hover:scale-[115%] transition transform-gpu duration-150 ease-in"
          width={"80%"}
          height={"80%"}
        />

     <div className="flex p-6 absolute right-8 top-0">
           <div className="absolute z-50 flex-grow w-full h-full bg-transparent peer" />
           <div className="flex items-center justify-center peer-hover:bg-[#F9DCDC]  bg-white rounded-full absolute h-full w-full">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 z-10"
               fill="#FFFFFF"
               viewBox="0 0 24 24"
               stroke="#4F4F4F"
               strokeWidth={2}
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
               />
             </svg>
           </div>
         </div>
      </div>

      <div>
        {/* product details */}
        <div className="px-1 mb-3 pointer-events-none pt-3">
          <div className="flex justify-between">
            <p className="font-semibold text-lg">{props?.ProductTitle}</p>
            <div className="flex">
              <p className="font-bold text-sm">$</p>
              <p className="font-bold text-lg">{`${props?.Price}`}</p>
              <p className="font-bold text-sm">.00</p>
            </div>
          </div>
          <p className="font-light text-xs mb-1">{props?.Description}</p>
          <RatingStars rating={props?.Rating} ratedUsers={props?.RatedUsers} />
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCardLarge;
