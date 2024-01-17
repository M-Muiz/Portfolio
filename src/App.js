import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
