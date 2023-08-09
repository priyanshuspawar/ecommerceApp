

import { ReactComponent as Logo }  from "../../assets/logo.svg";
import SearchBar from "../SearchBar";
import MainButton from "./MainButton";
import NavOptions from "./NavOptions";

import accountImg from "../../assets/account.png";
import cartImg from "../../assets/cart.png";

const index = () => {
  return (
    <div className="flex flex-row h-20 items-center justify-evenly overflow-hidden w-screen">
        <div className="flex justify-center items-center h-full">
        <Logo className="self-center"/>
        </div>
        <div className=" h-full w-fit gap-20
         flex items-center">
        <NavOptions/>
        <SearchBar/>
        </div>
        <div className="flex flex-row gap-12">
        <MainButton title={"Account"} buttonImg={accountImg}/>
        <MainButton title={"Cart"} buttonImg={cartImg}/>
        </div>
    </div>
  )
}

export default index