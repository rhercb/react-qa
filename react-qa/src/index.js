import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./App/store/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      {process.env.REACT_APP_TEST}
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
