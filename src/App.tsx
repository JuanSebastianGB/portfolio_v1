import './App.css';
import {
  About,
  Hamburger,
  Home,
  Portfolio,
  Resume,
  Sidebar,
} from './components';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Hamburger />
      <div className="flex flex-row snap-y snap-mandatory">
        <Sidebar />
        <div className="w-full overflow-hidden">
          <Home />
          <section id="about" className="snap-center">
            <About />
          </section>
          <Resume />
          <section id="portfolio" className="snap-center">
            <Portfolio />
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
