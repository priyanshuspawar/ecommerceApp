import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";
import CategorySecion from "../../components/CategorySection";
import DealSecion from "../../components/DealSection";
import ProductSlider from "../../components/ProductSlider";
import HeadBar from "../../components/HeadBar";
import ChooseBrand from "../../components/ChooseBrand";
import DiscountBanner from "../../components/DiscountBanner";
import CardOfferBanner from "../../components/CardOfferBanner";
import BestSelling from "../../components/BestSelling";

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
          <CardOfferBanner/>

          <ChooseBrand/>
          <BestSelling/>
        </main>
    
    </section>
  )
}

export default index