import './App.css';
import { About, Contact, Home, Portfolio, SectionIcons } from './components';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="flex flex-row snap-y snap-mandatory relative">
        <SectionIcons />
        <div className="w-full overflow-y-scroll overflow-x-hidden">
          <section id="home" className="snap-start">
            <Home />
          </section>
          <section id="about" className="snap-center">
            <About />
          </section>
          <section id="portfolio" className="snap-start">
            <Portfolio />
          </section>
          <section id="contact" className="snap-start">
            <Contact />
          </section>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
