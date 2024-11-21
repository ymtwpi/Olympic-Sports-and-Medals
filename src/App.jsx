
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MedalsOverTimePage from "./pages/MedalsOverTimePage/MedalsOverTimePage.jsx";
import './App.css';
import MedalsPieChart from "./pages/MedalsPieChart/MedalsPieChart.jsx";
import CountrySportsMedals from "./pages/CountrySportsMedals/CountrySportsMedals.jsx";
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/medalsOverTime" element={<MedalsOverTimePage />} />
                <Route path="/medalsPieChart" element={<MedalsPieChart />} />
                <Route path="/countrySportsMedals" element={<CountrySportsMedals />} />
            </Routes>
        </Router>
    )
}

export default App