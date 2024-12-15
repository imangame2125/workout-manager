import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../src/css/main.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
