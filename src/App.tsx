import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
