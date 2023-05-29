import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Effect from "./pages/Effect";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button className="btn">
              <Link to={"/"}>Home</Link>
            </button>
            <button className="btn">
              <Link to={"/About"}>About</Link>
            </button>
            <button className="btn">
              <Link to={"/Contact"}>Contact</Link>
            </button>
            <button className="btn">
              <Link to={"/Effect"}>Effect</Link>
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Effect" element={<Effect />} />
      </Routes>
    </>
  );
}

export default App;
