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
import Footer from "../../components/Footer";







const index = () => {


  return (
    <div className="flex flex-col w-screen overflow-hidden relative">

      
      <HeadBar/>
        <NavBar/>

        <HeroSection/>
        <CategorySecion/>
        <ProductSlider title="Weekly Popular Products"/>
        <ChooseBrand/>
        <DealSecion/>
        <ProductSlider title={"Todays Best Deals For You!"}/>
        <DiscountBanner/>
        {/* small card section */}
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