import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-sm:px-3 overflow-x-hidden">
      <Navbar/>
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main >
  );
}
