import React, {useState} from 'react';
import {SummerData} from '../../data/Summer.js';
import {WinterData} from "../../data/Winter.js";
import {CountryData} from '../../data/Countries.js';
import CountryDropDownPicker from "../../components/CountryDropDownPicker/CountryDropDownPicker.jsx";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar.jsx";
import './CountrySportsMedals.css';
import SportsBarChart from "../../components/SportsBarChart/SportsBarChart.jsx";

const CountrySportsMedals = () => {
    const [season, setSeason] = useState('summer');
    const [selectedCountry, setSelectedCountry] = useState('United States');
    const countryCode = CountryData.find(c => c.Country === selectedCountry)?.Code || '';

    const rawData = season === 'summer' ? SummerData : WinterData;

    return (
        <div className={'country-sports-medals-page'}>
            <div className={'sports-bar-chart-container'}>
                <SportsBarChart data={rawData} countryCode={countryCode}/>
            </div>
            <div className={'country-picker-container'}>
                <CountryDropDownPicker
                    label="Select Country"
                    data={CountryData}
                    value={selectedCountry}
                    onChange={(value) => setSelectedCountry(value)}
                />
                <BottomNavbar season={season} onChange={setSeason}/>
            </div>
        </div>
    )
}

export default CountrySportsMedals;
