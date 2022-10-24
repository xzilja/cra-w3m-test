import {
  ConnectButton,
  useAccount,
  useDisconnect,
  Web3Modal,
} from "@web3modal/react";
import "./App.css";
import logo from "./logo.svg";

const config = {
  projectId: "<YOUR_PROJECT_ID>",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

function App() {
  const { account } = useAccount();
  const disconnect = useDisconnect();

  console.log(account);

  return (
    <div className="App">
      {account.isConnected ? (
        <button onClick={disconnect}>Disconnect</button>
      ) : (
        <ConnectButton />
      )}
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
