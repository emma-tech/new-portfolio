// Libraries
import { BrowserRouter, Routes } from "react-router-dom";

// Routes
import routes from "./routes/routes";

//Helpers
import ScrollToTop from "./helpers/ScrollToTop.jsx";

//Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import { Wrapper } from "./styling/GlobalStyling.js";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Wrapper>
        <Routes>{routes}</Routes>
        <Contact />
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
