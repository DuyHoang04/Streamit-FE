import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { store } from "./store/store";
import { Provider } from "react-redux";
import GlobalStyles from "./components/global-styles/global-styles";
import ProtectedComponent from "./layout/protected-components/protected-component";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
       
          <GlobalStyles>
            <App />
          </GlobalStyles>
       
      </Router>
    </Provider>
  </React.StrictMode>
);
