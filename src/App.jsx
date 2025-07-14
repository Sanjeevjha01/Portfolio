import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Projects';
import Contact from './sections/Contact';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Testimonial from './sections/Testimonial';

function App() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Project />
      </section>
      <Testimonial/>

      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </div>
  );
}

export default App;
