import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import WebSocketHandler from "./components/WebSocketHandler";
import Layout from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WebSocketHandler />
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
