import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Footer from "./components/Footer";
import "./styles/css/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
