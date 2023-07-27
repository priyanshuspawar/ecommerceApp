import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";
import CategorySecion from "../../components/CategorySection";
import ProductSlider from "../../components/ProductSlider";

const index = () => {
  return (
    <section className="overflow-x-hidden">
      <header>
        <NavBar/>
        </header>
        <main className="">
          <HeroSection/>
          <CategorySecion/>
          <ProductSlider/>
        </main>
    
    </section>
  )
}

export default index