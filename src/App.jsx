import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
