import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import Intermittent from "./pages/Intermittent";
import Mediterranean from "./pages/Mediterranean";
import Services from "./pages/Services";
import LearnMore from "./pages/LearnMore";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/intermittent-diet" element={<Intermittent />} />
          <Route path="/medi-diet" element={<Mediterranean />} />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
