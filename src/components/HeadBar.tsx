import {ReactComponent as Phone} from "../assets/phone.svg";
import {ReactComponent as Arrow} from "../assets/downarrow.svg";
const HeadBar = () => {
  return (
    <div className="bg-[#003D29] flex w-full py-2 justify-around">
        <div className="flex gap-1 items-center justify-center">
          <Phone fill="white"/>
          <p className="text-white text-sm">+0012345678900</p>
        </div>
        <p className="text-white text-sm">Get 50% off on Selected items | Shop Now</p>
        <div className="flex items-center justify-center gap-x-2">
        <p className="text-white text-sm">Eng</p>
        <Arrow fill="white"/>
        
        
        <p className="text-white text-sm">Location</p>
        <Arrow fill="white"/>
        </div>
    </div>
  )
}

export default HeadBar