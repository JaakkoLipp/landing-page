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
        {/*<Route path="/home" element={<Works />} />*/}
        <Route path="/about" element={<AboutPage />} />
        {/*<Route path="/works" element={<Works />} />*/}
        <Route path="/contact" element={<ContactPage />} />
        {/*<Route path="/works" element={<Works />} />*/}
        <Route path="/work" element={<WorkPage />} />
        {/*<Route path="/works" element={<Works />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
