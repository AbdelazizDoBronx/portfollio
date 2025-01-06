import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main className="max-sm:px-3">
      <Navbar/>
      <Hero />
      <AboutMe />
    </main >
  );
}
