import Hero from './(sections)/Hero';
import Projects from './(sections)/Projects';
import About from './(sections)/About';
import Contact from './(sections)/Contact';
import "../globals.css";

export default function Page() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}