import logo from './logo.svg';
import './App.css';
//import { Navbar, Nav } from 'react-bootstrap';
import Navbar from './user/Navbar';
import Event from './user/centter/event'
function App() {
  return (
    <div className="App">

      {/* Other compone      <Navbar />
nts/content */}
      <div className="container">

        <h1>Welcome to My React App</h1>
        <p>This is a simple example of a Bootstrap Navbar in React.</p>
      </div>
      
      <header className="App-header">
        <Event/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
