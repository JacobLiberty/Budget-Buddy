import logo from "./logo.svg";
import "./App.css";
import { api } from "./utils/api";
import { Provider } from "@gadgetinc/react";
import Test from "./components/Test";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = api;
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Test></Test>
      </div>
    </ApolloProvider>
  );
}

export default App;
