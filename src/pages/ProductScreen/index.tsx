import HeadBar from "../../components/HeadBar";
import ImageSlider from "../../components/ImageSlider";
import RatingStars from "../../components/RatingStars";
import { productsDetails } from "../../constans";
import {useState} from "react";
const index = () => {
  const product = productsDetails[0];
  const [swiperRef,setSwiperRef] = useState(null);
  console.log(swiperRef)
  return (
    <div className="w-screen overflow-x-hidden">
      <HeadBar />
      <ImageSlider setRef={(ref)=>{setSwiperRef(ref)}}/>
      {/* product description, rating and price */}
      <div className="w-screen flex flex-col items-center">
      <div className="w-[95%] gap-y-4 flex flex-col mb-2">
        <p className="text-2xl font-semibold">{product.title}</p>
        <div className="flex flex-col gap-y-1">
        <p className="text-xs line-clamp-3 font-medium">{product.description}</p>
        <RatingStars ratedUsers={500} rating={4.5} />
        </div>
        <div>
          <p className="font-semibold text-xl"> {product.price} </p>
          <p className="font-normal text-[9px]"> Suggested Payment with 6 months special financing </p>
        </div>
      </div>

      {/* colours and vairants */}
      <p className="text-lg w-[95%] mb-2">Colours</p>
      <div className="grid grid-cols-2 gap-3 w-[95%]">
        {product.variants.map((vairant,index) => {
          return (
            <div key={index} className="p-4  flex flex-col justify-center items-center border-[1px] border-[#8B8B8B] gap-y-2 rounded-xl overflow-hidden">
                <div className="flex flex-col w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full flex flex-grow" style={{backgroundColor:vairant.color[0]}}/>
                    <div className="w-full flex flex-grow" style={{backgroundColor:vairant.color[1]}}/>
                </div>
                <p className="text-xs">{vairant.subTitle}</p>
            </div>
          );
        })}
      </div>
      </div>


        {/* buy now and add to card */}
        <div className="flex border-none fixed bottom-0 w-screen bg-[#F6F6F6] h-[8%]">
            <p className="flex flex-grow text-base font-semibold justify-center items-center">Add to cart</p>
            <p className="flex flex-grow justify-center items-center
            bg-[#003D29] text-white text-base font-semibold
            ">Buy Now</p>
        </div>
    </div>
  );
};

export default index;
