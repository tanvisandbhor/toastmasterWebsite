import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Skills from "./pages/Skills";
 

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* includes Events + others */}
        <Route path="/login" element={<Login />} />
       <Route path="/skills" element={<Skills />} />
      

      </Routes>
      <Footer />
    </Router>
  );
}
