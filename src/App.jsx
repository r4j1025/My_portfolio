import "./app.scss"
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
const App = () => {
  return <div>
    <section id="Homepage"><Navbar/><Hero/></section>
    <section id="about"><Parallax type="about"/></section>
    <section ><About/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section >Portfolio1</section>
    <section >Portfolio2</section>
    <section >Portfoli03</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
