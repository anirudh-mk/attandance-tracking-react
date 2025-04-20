import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Verify from "./pages/Verify";

function App() {
  return (
    <Router>
      <nav style={{ padding: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
        <Link to="/verify">Verify</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
  );
}

export default App;
