import {ReactComponent as HamBurgerMenu} from "../../assets/hamBugerMenu.svg"

import { ReactComponent as Logo }  from "../../assets/logo.svg";
import SearchBar from "../SearchBar";
import MainButton from "./MainButton";
import NavOptions from "./NavOptions";

import accountImg from "../../assets/account.png";
import cartImg from "../../assets/cart.png";


interface props{
  onClick: ()=>void
}


const index = ({onClick}:props) => {
  return (
    <div className="flex flex-row h-18 mb-3 items-center z-30 justify-between lg:justify-around overflow-hidden w-screen px-6 bg-white border-b-2">
        <div className="flex justify-center items-center h-full">
        <Logo className="self-center"/>
        </div>
        <div className=" h-full w-fit gap-10 hidden lg:flex
         items-center  2xl:w-[45%]">
        <NavOptions/>
        <SearchBar/>
        </div>

        {/* ham burger menu */}
        <div className="lg:hidden" onClick={onClick}>
          <HamBurgerMenu/>

        </div>
 



        <div className="lg:flex flex-row gap-6 hidden">
        <MainButton title={"Account"} buttonImg={accountImg}/>
        <MainButton title={"Cart"} buttonImg={cartImg}/>
        </div>
    </div>
  )
}

export default index