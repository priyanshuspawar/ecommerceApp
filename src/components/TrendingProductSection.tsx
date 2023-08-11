import furniture from "../assets/discountBanner.png";
import CapsuleButton2 from "./CapsuleButton2";
import trendingBanner2 from "../assets/trendingBanner2.png";

const TrendingProductSection = () => {
  return (
    <div className="w-screen flex items-center flex-col my-6">
        <p className="sectionTitle w-[90%]">Trending Products For You!</p>
    <div className="flex w-[90%] gap-x-8 gap-y-4 items-center flex-col">
        <div className="rounded-xl overflow-hidden group
        flex flex-grow flex-col
        
        ">
            <div className="flex w-full overflow-hidden">
                <img src={furniture} className="object-cover group-hover:scale-110 duration-150 transition transform-gpu ease-in"  width={"100%"} height={"100%"}/>
            </div>
            <div className="w-full bg-[#F5F6F6] p-4">
                <p className="font-semibold text-[#231F1E] text-xl">Furniture Village</p>
                <p className="text-[#231F1E] mb-6 font-medium text-sm">Delivery with in 24 hour</p>
                <CapsuleButton2 title={"Shop Now"}/>
            </div>
        </div>




        <div className="rounded-xl overflow-hidden group
        flex flex-grow flex-col
        ">
            <div className="flex w-full overflow-hidden">
                <img src={trendingBanner2} className="object-cover group-hover:scale-110 duration-150 transition transform-gpu ease-in" width={"100%"} height={"100%"}/>
            </div>
            <div className="w-full bg-[#F5F6F6] p-4">
                <p className="font-semibold text-[#231F1E] text-xl">Fashion World</p>
                <p className="text-[#231F1E] mb-6 font-medium text-sm">Delivery with in 24 hour</p>
                <CapsuleButton2 title={"Shop Now"}/>
            </div>
        </div>

    </div>
    </div>
  )
}

export default TrendingProductSection