import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const store = {
  url: "./mock-api.json"
};

ReactDOM.render(
  <StrictMode>
    <App {...store} />
  </StrictMode>,
  rootElement
);
