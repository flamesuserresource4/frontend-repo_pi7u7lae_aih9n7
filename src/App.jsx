import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSections from './components/PortfolioSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <PortfolioSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
