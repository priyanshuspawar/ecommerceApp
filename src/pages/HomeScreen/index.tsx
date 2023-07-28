import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";
import CategorySecion from "../../components/CategorySection";
import ProductSlider from "../../components/ProductSlider";
import HeadBar from "../../components/HeadBar";
import ChooseBrand from "../../components/ChooseBrand";

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
          <ChooseBrand/>
        </main>
    
    </section>
  )
}

export default index