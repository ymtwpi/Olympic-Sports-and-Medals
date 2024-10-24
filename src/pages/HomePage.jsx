import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import WorldMap from "../components/WorldMap/WorldMap.jsx";
import './HomePage.css'
const HomePage = () => {
    const [activeMedal, setActiveMedal] = useState('gold');

    const handleMedalClick = (medal) => {
        setActiveMedal(medal);
    };

    return (
        <div className={'container'}>
            <Navbar activeMedal={activeMedal} onMedalClick={handleMedalClick} />
            <div style={{ padding: '10px' }}>
               <WorldMap medalType={activeMedal}/>
            </div>
        </div>
    )
}

export default HomePage;