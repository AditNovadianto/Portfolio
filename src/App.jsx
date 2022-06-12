import About from "./components/About";
import Home from "./components/Home";
import NavbarMobile from "./components/NavbarMobile";
import Qualification from "./components/Qualification";
import Services from "./components/Services";
import Skills from "./components/Skills";

const App = () => {
  return (
    <main className="min-h-screen">
      <Home />

      <NavbarMobile />

      <About />

      <Skills />

      <Qualification />

      <Services />
    </main>
  );
};

export default App;
