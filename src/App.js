import logo from "./logo.svg";
import "./App.css";
import { api } from "./utils/api";
import { Provider } from "@gadgetinc/react";
import { isListType } from "graphql";
import Test from "./components/Test";

function App() {
  return (
    <Provider value={api.connection.currentClient}>
      <div className="App">
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
        <Test></Test>
      </div>
    </Provider>
  );
}

export default App;
