import { useRef } from "react";
import discountBanner from "../assets/discountBanner.png";
import { motion, useScroll, useTransform } from "framer-motion";
import CapsuleButton from "./CapsuleButton";

const DiscountBanner = () => {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end start","center end"]
  // });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.2, 1]);

  return (
    <div className="flex items-center overflow-hidden w-screen h-3/4 relative my-6">
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
      <div className="flex flex-col bg-[#003D29] absolute z-10 right-48 justify-evenly px-16 w-[30%] h-[50%]
      ">
        <div>
        <p className="font-extrabold text-[45px] leading-tight text-white mb-4 whitespace-break-spaces">Get 5% Cash Back On $200
        </p>
        <p className="font-medium text-xl text-white mb-2">
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
