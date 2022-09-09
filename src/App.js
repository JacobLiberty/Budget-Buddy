import logo from "./logo.svg";
import "./App.css";
import { api } from "./utils/api";
import { Provider } from "@gadgetinc/react";

//Components and Pages
import Test from "./components/Test";
import Footer from "./components/footer";
import Header from "./components/header";
import { Router } from "react-router-dom";

function App() {
  const client = api;
  return (
    <Provider value={api.connection.currentClient}>
      <div className="App">
        <Header />
        <Test />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
