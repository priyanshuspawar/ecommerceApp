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

const index = () => {
  return (
    <section className="overflow-x-hidden">
      <header>
        <HeadBar/>
        <NavBar/>
        </header>
        <main className="">
          <HeroSection/>
          <CategorySecion/>
          <ProductSlider/>

          {/* <ChooseBrand/> */}
          <DealSecion/>
          <DiscountBanner/>
          <BestDealSection/>

          <CardOfferBanner/>

          <ChooseBrand/>
          <BestSelling/>
          <div className="my-20"/>
          <TrendingProductSection/>
        </main>
    
    </section>
  )
}

export default index