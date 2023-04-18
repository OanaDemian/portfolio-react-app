import Contact from "./components/Contact.js";
import Work from "./components/Work.js";
import Skills from "./components/Skills.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
