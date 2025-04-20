// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Verify from "./pages/Verify";
import AttendanceLog from "./pages/AttendanceLog";

function App() {
  return (
    <Router>
      <nav style={{ padding: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
        <Link to="/verify" style={{ marginRight: 10 }}>Verify</Link>
        <Link to="/attendance">Attendance Log</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/attendance" element={<AttendanceLog />} />
      </Routes>
    </Router>
  );
}

export default App;