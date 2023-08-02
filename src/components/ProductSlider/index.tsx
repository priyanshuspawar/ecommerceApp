import { ScrollMotionValues, motion } from "framer-motion";
import { products } from "../../constans";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard";

const index = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<any>(null);

  useEffect(() => {
    // setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className=" flex justify-center">
      <motion.div ref={carousel} className="flex overflow-hidden w-[83%]">
        <motion.div
          drag={"x"}
          dragConstraints={{ right: 0,left:-width }}
          className="flex gap-6"
        >
          {products.map((product) => {
            return (
              <ProductCard
                ProductTitle={product.ProductTitle} ProductImage={product.ProductImage} Description={product.Description} Rating={product.Rating} RatedUsers={product.RatedUsers} Price={product.Price} currency={product.currency}
              />

              // <div
              //   key={product.id}
              //   className="flex-shrink-0 w-96 h-80 mr-10 bg-red-600"
              //   id={product.ProductTitle}
              // />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default index;
