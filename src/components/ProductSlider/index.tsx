import { ScrollMotionValues, motion , useMotionValue,PanInfo} from "framer-motion";
import { products } from "../../constans";
import { useEffect, useRef, useState } from "react";
import ProductCardLarge from "../ProductCardLarge";
import ScrollContainer from "react-indiana-drag-scroll";


const index = () => {
  // const [width, setWidth] = useState(0);
  // const carousel = useRef<any>(null);
  // const dragOffset = useMotionValue(0);


  // const handleDrag = (event: MouseEvent | TouchEvent, info: PanInfo) => {
  //   // Update the drag offset when the drag starts
  //   if (info.offset.x === 0) {
  //     dragOffset.set(info.point.x);
  //   }
  // };




  // useEffect(() => {
  //   // setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (


    <div className="flex flex-col bg-white items-center justify-center">
      {/* <div
        className="flex overflow-x-scroll w-[85%] snap-x"
      >
        
        <div
          className="flex flex-nowrap "
        >
                    {products.map((product) => {
            return (
              <ProductCardLarge
                ProductTitle={product.ProductTitle} ProductImage={product.ProductImage} Description={product.Description} Rating={product.Rating} RatedUsers={product.RatedUsers} Price={product.Price} currency={product.currency}
              />
            );
          })}

        </div>
      </div> */}













</div>





















    // <div className="w-max">
    //   <p className="font-bold text-3xl mb-10  mt-16 ml-28">Todays Best Deals For You!</p>
    // <div className=" flex w-fit overflow-x-scroll snap-x">
    //   <div className="flex flex-nowrap">
    //     {products.map((product) => {
    //         return (
    //           <ProductCardLarge
    //             ProductTitle={product.ProductTitle} ProductImage={product.ProductImage} Description={product.Description} Rating={product.Rating} RatedUsers={product.RatedUsers} Price={product.Price} currency={product.currency}
    //           />
    //         );
    //       })}


    //   </div>


      /* <motion.div ref={carousel} className="flex overflow-hidden w-[83%]">
        <motion.div
          drag={"x"}
          dragConstraints={{ right: 0,left:-width }}
          onDrag={handleDrag}
          className="flex"
        >
          {products.map((product) => {
            return (
              <ProductCardLarge
                ProductTitle={product.ProductTitle} ProductImage={product.ProductImage} Description={product.Description} Rating={product.Rating} RatedUsers={product.RatedUsers} Price={product.Price} currency={product.currency}
              />
            );
          })}
        </motion.div>
      </motion.div> */
    /* </div> */
    // </div>
  );
};

export default index;
