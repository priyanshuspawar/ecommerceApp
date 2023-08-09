import furniture from "../assets/discountBanner.png";
import CapsuleButton2 from "./CapsuleButton2";
import trendingBanner2 from "../assets/trendingBanner2.png";

const TrendingProductSection = () => {
  return (
    <div className="w-screen flex items-center flex-col my-6">
        <p className="font-bold text-3xl mb-6 w-[85%]">Trending Products For You!</p>
    <div className="flex w-[85%] gap-x-8 items-center">
        <div className="rounded-xl overflow-hidden group
        flex flex-grow flex-col
        
        ">
            <div className="flex w-full overflow-hidden">
                <img src={furniture} className="object-cover group-hover:scale-110 duration-150 transition transform-gpu ease-in"  width={"100%"} height={"100%"}/>
            </div>
            <div className="w-full bg-[#F5F6F6] p-6">
                <p className="font-semibold text-[#231F1E] mb-2 text-2xl">Furniture Village</p>
                <p className="text-[#231F1E] mb-4 font-medium text-lg">Delivery with in 24 hour</p>
                <CapsuleButton2 title={"Shop Now"}/>
            </div>
        </div>




        <div className="rounded-xl overflow-hidden group
        flex flex-grow flex-col
        ">
            <div className="flex w-full overflow-hidden">
                <img src={trendingBanner2} className="object-cover group-hover:scale-110 duration-150 transition transform-gpu ease-in" width={"100%"} height={"100%"}/>
            </div>
            <div className="w-full bg-[#F5F6F6] p-6">
                <p className="font-semibold text-[#231F1E] mb-2 text-2xl">Fashion World</p>
                <p className="text-[#231F1E] mb-4 font-medium text-lg">Delivery with in 24 hour</p>
                <CapsuleButton2 title={"Shop Now"}/>
            </div>
        </div>

    </div>
    </div>
  )
}

export default TrendingProductSection