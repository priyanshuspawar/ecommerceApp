import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";

const index = () => {
  return (
    <section className="scrollbar-hide">
      <header>
        <NavBar/>
        </header>
        <main className="">
          <HeroSection/>
        </main>
    
    </section>
  )
}

export default index