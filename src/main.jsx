import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider, Frame } from "@shopify/polaris";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store} >

  
  <AppProvider>
    <StrictMode>
      <Frame>
        <App />
      </Frame>
    </StrictMode>
    ,
  </AppProvider>
  </Provider>
);
