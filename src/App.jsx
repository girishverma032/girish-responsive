import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Plans from "./containers/plans/Plans";
import Trainers from "./containers/trainers/Trainers";
import Gallery from "./containers/gallery/Gallary";
import NotFound from "./containers/notFound/NotFound";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
