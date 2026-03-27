import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Laice from "./pages/Laice";
import Material from "./pages/Material";
import Ankara from "./pages/Ankara";

const App = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/laice" element={<Laice />} />
        <Route path="/material" element={<Material />} />
        <Route path="/ankara" element={<Ankara />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App