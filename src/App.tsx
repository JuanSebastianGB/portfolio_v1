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
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full overflow-hidden">
          <Home />
          <About />
          <Resume />
          <Portfolio />
        </div>
      </div>

      {/* <Resume />
      <Contact />
      <Portfolio /> */}
    </GlobalProvider>
  );
}

export default App;
