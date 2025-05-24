import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import CarousalSlider from "./components/carousel/CarousalSlider";
import Servicesmob from "./components/servicesmob/Servicesmob";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="services" />
      </section>
      <div className="services">
        <section>
          <Services />
        </section>
      </div>
      <div className="servicesmob">
        <section>
          <Servicesmob />
        </section>
      </div>
      <section id="Clients">
        <CarousalSlider />
      </section>
      <section id="Services">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};
 
export default App;
