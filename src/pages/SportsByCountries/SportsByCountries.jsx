import SportsDropDown from "../../components/SportsDropDown/SportsDropDown.jsx";
import React, {useState} from "react";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar.jsx";
import {WinterData} from "../../data/Winter.js";
import {SummerData} from '../../data/Summer.js';
import {CountryData} from '../../data/Countries.js';
import './SportsByCountries.css';
import SportsByCountriesBarChart from "../../components/SportsByCountriesBarChart/SportsByCountriesBarChart.jsx";
const SportsByCountries = () => {
    const [selectedSport, setSelectedSport] = useState('Aquatics');
    const [season, setSeason] = useState('summer');
    const rawData = season === 'summer' ? SummerData : WinterData;
    return (
        <div className={'sports-by-country-page'}>
            <h1> Sports By Countries </h1>
            <SportsByCountriesBarChart selectedSport={selectedSport} data={rawData} countryData={CountryData} />
            <div className={'sports-selector-container'}>
                <SportsDropDown
                    data={rawData}
                    value={selectedSport}
                    onChange={(value) => setSelectedSport(value)}
                />
                <BottomNavbar season={season} onChange={setSeason}/>
            </div>
        </div>
    )
}
export default SportsByCountries;