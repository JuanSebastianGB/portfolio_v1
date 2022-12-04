import './App.css';
import { About, Contact, Home, Portfolio } from './components';
import { SectionIcons } from './components/SectionIcons';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      {/* <Hamburger /> */}

      <div className="flex flex-row snap-y snap-mandatory relative">
        <SectionIcons />
        <div className="w-full overflow-y-scroll overflow-x-hidden">
          <section id="home" className="snap-start">
            <Home />
          </section>
          <section id="about" className="snap-center">
            <About />
          </section>
          <section id="portfolio" className="snap-center">
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
