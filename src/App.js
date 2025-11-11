import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ThemeNavigator from "./components/themenavigator/ThemeNavigator";
import FloatingContacts from "./components/floatingcontacts/FloatingContacts";

// Import pages
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Pricing from "./pages/pricing/Pricing";
import Projects from "./pages/projects/Projects";
import ProjectDetail from "./pages/projectDetails/ProjectDetail";
import Contact from "./pages/contact/Contact";
import AboutUs from "./pages/about/AboutUs";
import OffersPage from "./pages/offers/OffersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/offers" element={<OffersPage />} />
        </Routes>
        <Footer />
        <FloatingContacts />
        <ThemeNavigator />
      </div>
    </Router>
  );
}

export default App;
