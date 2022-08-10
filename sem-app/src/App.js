import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
