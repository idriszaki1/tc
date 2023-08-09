import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Model3 from "./pages/model3";
import ModelY from "./pages/modely";
import ModelS from "./pages/models";
import Contact from "./pages/contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Model-3" element={<Model3 />} />
          <Route path="/Model-Y" element={<ModelY />} />
          <Route path="/Model-S" element={<ModelS />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;