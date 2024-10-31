
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MedalsOverTimePage from "./pages/MedalsOverTimePage/MedalsOverTimePage.jsx";
import './App.css';
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/medalsOverTime" element={<MedalsOverTimePage />} />
            </Routes>
        </Router>
    )
}

export default App