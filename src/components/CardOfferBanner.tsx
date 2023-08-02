import { ReactComponent as Card3 } from "../assets/card3.svg";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";



const CardOfferBanner = () => {
  return (
    <div className="bg-[#FFE6CC] my-24 flex w-full h-80 px-48 relative items-center">
        <div className="flex flex-col">
        <p className="font-extrabold text-6xl text-[#333333]">Get 5% Cash Back</p>
        <p className="text-[#333333] font-medium text-xl pl-3">on Shopcart.com</p>
        </div>

        {/* cards */}
        <div className="flex absolute right-[10%] top-0 w-96 h-60">
            <img src={card1} className="absolute aspect-video top-[108px] right-[160px] -rotate-[12deg]" />
            <img src={card2} className="absolute aspect-video right-[165px]  top-[82px] -rotate-[18deg]"/>
            <Card3 className="absolute aspect-video top-[60px] right-44 -rotate-[26deg]"/>
        </div>

    </div>
  )
}

export default CardOfferBanner