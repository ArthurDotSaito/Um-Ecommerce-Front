import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
