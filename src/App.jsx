import About from "./components/About";
import Home from "./components/Home";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Certificates from "./components/Certificates";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="min-h-screen">
      <Home />

      <Navbar />

      <About />

      <Skills />

      <Qualification />

      <Services />

      <Languages />

      <Projects />

      <Certificates />

      <ContactMe />

      <Footer />
    </main>
  );
};

export default App;
