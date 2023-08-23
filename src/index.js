import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import "./assets/css/index.css";
import UIRouter from "./routes/UIRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <UIRouter />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
