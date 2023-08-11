import { ReactComponent as Card3 } from "../assets/card3.svg";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import CapsuleButton from "./CapsuleButton";



const CardOfferBanner = () => {
  const height = window.innerHeight*0.3
  return (
    <div className="bg-[#FFE6CC] my-8 flex flex-col w-full relative justify-evenly pl-12" style={{height:height}}>
        <div className="flex flex-col justify-between h-[55%]">
        <p className="font-extrabold text-2xl text-[#333333]">Get 5% Cash Back</p>
        <p className="text-[#333333] font-medium text-base">on Shopcart.com</p>
        

        {/* cards */}
        <div className="absolute right-[10%] top-0 w-96 h-60 hidden">
            <img src={card1} className="absolute aspect-video top-[108px] right-[160px] -rotate-[12deg]" />
            <img src={card2} className="absolute aspect-video right-[165px]  top-[82px] -rotate-[18deg]"/>
            <Card3 className="absolute aspect-video top-[60px] right-44 -rotate-[26deg]"/>
        </div>

      <CapsuleButton width="37%"/>
      </div>
    </div>
  )
}

export default CardOfferBanner