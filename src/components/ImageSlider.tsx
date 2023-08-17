import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../index.css";
import { productsDetails } from '../constans';

interface props{
    setRef:(e:any)=>void
}


const ImageSlider = ({setRef}:props) => {
    // const ref = useRef(null)
   

  return (
    <div className='lg:w-[94%] lg:mb-4'>
      <Swiper
        // ref={ref}
        onSwiper={setRef}
        pagination={{
          dynamicBullets: true,
        //   bulletActiveClass:"text-red-500"
        }}
        className='flex flex-grow'
        modules={[Pagination]}
      >
        {productsDetails[0].variants.map((variant,index )=>{
            return(
                <SwiperSlide className='flex flex-grow' key={index}>
                <div className='flex justify-center flex-grow bg-[#F6F6F6] p-6'>
                    <img src={variant.image} width={"100%"} height={"100%"} className=''/>
                </div>
                </SwiperSlide>
            )
        })}
      </Swiper>

    </div>
  );
};

export default ImageSlider;
