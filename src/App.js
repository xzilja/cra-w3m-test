import { ConnectButton, Web3Modal } from "@web3modal/react";
import "./App.css";
import logo from "./logo.svg";

const config = {
  projectId: "<YOUR_PROJ_ID>",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

function App() {
  return (
    <div className="App">
      <ConnectButton />
      <header className="App-header">
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
      <Web3Modal config={config} />
    </div>
  );
}

export default App;
