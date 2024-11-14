import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/Home.jsx";
import AboutPage from "../pages/About.jsx";
import ContactPage from "../pages/Contact.jsx";
import WorkPage from "../pages/Work.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work" element={<WorkPage />} />
        {/*<Route path="/login" element={<Login />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
