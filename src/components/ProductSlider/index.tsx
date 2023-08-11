import { products } from "../../constans";
import ProductCardLarge from "../ProductCardLarge";

import "swiper/css";
import "swiper/css/pagination";



import { Swiper, SwiperSlide } from "swiper/react";


interface props{
  title: string;
}

const index = ({title}:props) => {
  
  const handleChange = (swiper: any) => {
    const progressBar = document.querySelector(".progress-bar") as HTMLElement;
    if (swiper.progress > 0.05) {
      progressBar.style.width = `${swiper.progress * 100}%`;
    } else {
      progressBar.style.width = `${0.20 * 100}%`;
    }
  };


  return (
    <div className="relative my-6">

      <div className="w-full flex justify-center">
      <p className="font-bold text-2xl mb-4 w-[90%] self-center">{title}</p>
      </div>


      <div className="w-full flex flex-col relative gap-y-1">
        <Swiper
          className="w-[90%] mb-4"
          slidesPerView={2}
          spaceBetween={13}
          onTransitionEnd={handleChange}
        >
          {products.map((product, index) => (
            <SwiperSlide className="flex w-[31%]" key={index}>
              <ProductCardLarge
                key={index}
                ProductTitle={product.ProductTitle}
                ProductImage={product.ProductImage}
                Description={product.Description}
                Rating={product.Rating}
                RatedUsers={product.RatedUsers}
                Price={product.Price}
                currency={product.currency}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
       <div className="w-full flex justify-center items-center">
        <div className=" w-[85%] h-1 bg-[#D3D2D2]">
          <div
            className="progress-bar h-1 bg-black w-[20%] transition transform-gpu duration-100"
            
            style={{ transition: "width 0.1s ease-in-out" }}
          ></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default index;
