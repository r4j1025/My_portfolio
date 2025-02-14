import "./app.scss"
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
const App = () => {
  return <div>
  <Cursor/>
    <section id="Homepage"><Navbar/><Hero/></section>
    <section id="About"><Parallax type="about"/></section>
    <section ><About/></section>
    <section id="Skills"><Skills/></section>
    <section id="Projects"><Parallax type="Projects"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
