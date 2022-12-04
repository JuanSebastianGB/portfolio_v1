import './App.css';
import {
  About,
  Contact,
  Hamburger,
  Home,
  Portfolio,
  Sidebar,
} from './components';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Hamburger />
      <div className="flex flex-row snap-y snap-mandatory">
        <Sidebar />
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

      {/* <Resume />
      <Contact />
      <Portfolio /> */}
    </GlobalProvider>
  );
}

export default App;
