import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Laice from "./pages/Laice";
import Material from "./pages/Material";
import Ankara from "./pages/Ankara";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="laice" element={<Laice />} />
        <Route path="material" element={<Material />} />
        <Route path="ankara" element={<Ankara />} />
      </Route>
    </Routes>
  );
};

export default App;