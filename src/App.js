
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Instructors from "./pages/Instructors/Instructors";
import InstructorDetails from "./pages/InstructorDetails/InstructorDetails";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>
        
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/courses/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/instructors"
          element={<Instructors />}
        />

        <Route
          path="/instructors/:id"
          element={<InstructorDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;