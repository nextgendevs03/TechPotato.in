import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Clients />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
