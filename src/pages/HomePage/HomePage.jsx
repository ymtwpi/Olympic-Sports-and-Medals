import React, {useState} from "react";
import MedalBar from "../../components/MedalBar/MedalBar.jsx";
import WorldMap from "../../components/WorldMap/WorldMap.jsx";
import './HomePage.css'
import {SummerData} from '../../data/Summer.js';
import {WinterData} from "../../data/Winter.js";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar.jsx";
const HomePage = () => {
    const [season, setSeason] = useState('summer');
    const [activeMedal, setActiveMedal] = useState('gold');
    const data = season === 'summer' ? SummerData : WinterData;
    const handleMedalClick = (medal) => {
        setActiveMedal(medal);
    };
    return (
        <div className={'container'}>
            <MedalBar activeMedal={activeMedal} onMedalClick={handleMedalClick} />
            <div style={{ paddingTop: '10px' }}>
                <WorldMap medalType={activeMedal} data={data}/>
            </div>
            <BottomNavbar season={season} onChange={setSeason} />
        </div>
    )
}
export default HomePage;