import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import M3 from "./pages/model3";
import MY from "./pages/modely";
import MS from "./pages/models";
import Contact from "./pages/contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return <div className="App">
    <Router>
      <Navbar />
       <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Model-3' exact component={M3} />
        <Route path='/Model-Y' exact component={MY} />
        <Route path='/Model-S' exact component={MS} />
        <Route path='/Contact-Us' exact component={Contact} />
       </Routes>
    </Router>
  </div>;
}

export default App;
