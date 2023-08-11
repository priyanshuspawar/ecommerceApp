import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../index.css";
import { productsDetails } from '../constans';

interface props{
    setRef:()=>void
}
import {useRef, useState} from "react"

const ImageSlider = ({setRef}:props) => {
    // const ref = useRef(null)
    const [ref2,setref2] = useState<typeof Swiper>();
    // console.log("@@",ref.current)
    console.log("@@",ref2)
  return (
    <div>
      <Swiper
        // ref={ref}
        onSwiper={setref2}
        pagination={{
          dynamicBullets: true,
        //   bulletActiveClass:"text-red-500"
        }}
        className='w-screen'
        modules={[Pagination]}
      >
        {productsDetails[0].variants.map((variant,index )=>{
            return(
                <SwiperSlide className='' key={index}>
                <div className='flex w-full h-full justify-center bg-[#F6F6F6]'>
                    <img src={variant.image} width={"90%"} height={"90%"}/>
                </div>
                </SwiperSlide>
            )
        })}
      </Swiper>

    </div>
  );
};

export default ImageSlider;
