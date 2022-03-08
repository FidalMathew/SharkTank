import NavBar from './components/Navbar';
import Panel from './components/Panels';
import About from './components/About';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Panel />
      <About />
    </div>
  );
}

export default App;
