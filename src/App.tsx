import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

import GlobalStyle from "./styles/global";

export const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
