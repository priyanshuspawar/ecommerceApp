import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProductScreenNavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    let lastScroll = 50;
    const touchmove = () => {
      const currentScroll = window.scrollY;
      if (currentScroll >= lastScroll) {
        setIsVisible(false);
      }
      else {
        setIsVisible(true);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", touchmove);

    return () => {
      window.removeEventListener("scroll", touchmove);
    };
  }, []);
  return (
    <div>
      {isVisible && (
        <motion.div 
        initial={{opacity:0,translateY:0}}
        animate={{opacity:1,translateY:"2px",transition:{ease:"easeIn",duration:0.2}}}
        
        className="lg:hidden top-8 z-50 flex justify-between items-center p-4 fixed w-screen bg-white bg-opacity-90">
          <ArrowLeftIcon className="w-6 h-6 text-black" />
          <div className="flex gap-x-6">
            <MagnifyingGlassIcon className="w-6 h-6 text-black" />
            <ShoppingCartIcon className="w-6 h-6 text-black" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductScreenNavBar;
