import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";
import CategorySecion from "../../components/CategorySection";
import DealSecion from "../../components/DealSection";
import ProductSlider from "../../components/ProductSlider";
import HeadBar from "../../components/HeadBar";
import ChooseBrand from "../../components/ChooseBrand";
import DiscountBanner from "../../components/DiscountBanner";
import BestDealSection from "../../components/BestDealSection";
import CardOfferBanner from "../../components/CardOfferBanner";
import BestSelling from "../../components/BestSelling";
import TrendingProductSection from "../../components/TrendingProductSection";
import Services from "../../components/Services";
import DropDown from "../../components/DropDown";
import {useState} from "react"
import Footer from "../../components/Footer";




const index = () => {
  const [visible,setVisible] = useState(false);

  return (
    <div className="flex flex-col w-screen overflow-hidden relative">

      
      <HeadBar/>
        <NavBar onClick={()=>{setVisible(!visible)}}/>
        {/* menu bar */}  
        
          {visible?<DropDown visible={visible}/>:<></>}
   
        <HeroSection/>

        <CategorySecion/>
        <ProductSlider title={"Todays Best Deals For You!"}/>
        <ChooseBrand/>
        <DealSecion/>
        <ProductSlider title="Weekly Popular Products"/>
        <DiscountBanner/>
        <BestDealSection/>
        <CardOfferBanner/>
        <ProductSlider title="Most Selling Products"/>
        <TrendingProductSection/>
        <BestSelling/>

        
        <Services/>
         <Footer/>
    </div>
  )
}

export default index