//import { useState } from 'react';
//import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes} from "react-router-dom";
import routes from "./routes/routes";

//Helpers
import ScrollToTop from "./helpers/ScrollToTop.jsx";

//Components
import Header from "./components/Header.jsx";


function App() {

  return (
      <BrowserRouter>
      <ScrollToTop />
      <Header/>
          <Routes>{routes}</Routes>
      </BrowserRouter>
  );
}

export default App;
