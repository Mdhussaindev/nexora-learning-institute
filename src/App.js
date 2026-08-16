import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/instructors" element={<div>Instructors Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;