import { useRef } from "react";
import discountBanner from "../assets/discountBanner.png";
import { motion, useScroll, useTransform } from "framer-motion";
import CapsuleButton from "./CapsuleButton";

const DiscountBanner = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.2, 1]);
  const height = window.innerHeight*0.435;

  return (
    <div className="flex items-center overflow-hidden w-screen relative flex-col justify-center"
      style={{height:height}}
    >
      <motion.div
        style={{ scale }}
        ref={ref}
        className="flex relative w-full h-full transition transform-gpu duration-100 ease-in"
      >
        <img
          src={discountBanner}
          width={"100%"}
          height={"100%"}
          className="object-cover"
        />
      </motion.div>

      {/* discount tile */}
      <div className="flex flex-col pl-6 bg-[#003D29] absolute z-10 justify-evenly w-[85%] h-[80%]
      ">
        <div>
        <p className="font-semibold text-2xl text-white mb-4">Get 5% Cash Back On $200
        </p>
        <p className="text-sm text-white mb-2 pr-6">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        </div>
        <CapsuleButton borderEnable={true} />
      </div>
    </div>
  );
};

export default DiscountBanner;
