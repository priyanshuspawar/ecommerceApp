

import { ReactComponent as Logo }  from "../../assets/logo.svg";
import SearchBar from "../SearchBar";
import MainButton from "./MainButton";
import NavOptions from "./NavOptions";

import accountImg from "../../assets/account.png";
import cartImg from "../../assets/cart.png";

const index = () => {
  return (
    <div className="flex flex-row w-min-screen h-16 mx-20">
        <Logo className="self-center"/>
        <div className="mx-28 flex">
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