import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";

/*Styling
import {
  Nav,
  NavLinks,
  StyledLink,
  LogoLink,
} from "./styling/GlobalStyling.js"; 
*/

import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
