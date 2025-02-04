import React, {useState} from 'react';
import CountryPickerMap from '../../components/CountryPickerMap/CountryPickerMap.jsx';
import './MedalsOverTimePage.css'
import LineChart from "../../components/LineChart/LineChart.jsx";
import {SummerData} from '../../data/Summer.js';
import {WinterData} from "../../data/Winter.js";
import {CountryData} from '../../data/Countries.js';
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar.jsx";
import VerticalMedalSelector from "../../components/VerticalMedalSelector/VerticalMedalSelector.jsx";

const MedalsOverTimePage = () => {
    const [season, setSeason] = useState('summer');
    const [selectedCountry, setSelectedCountry] = useState("USA");
    const [hoveredMedal, setHoveredMedal] = useState(null);
    const data = season === 'summer' ? SummerData : WinterData;
    const getCountryName = (countryCode) => {
        const country = CountryData.find(d => d.Code === countryCode);
        return country ? country.Country : "Data Not Available for Selected Country";
    };

    return (
        <div className={'container'}>
            <div className={'sub-container'}>
                <div className={'line-chart-container'}>
                    <LineChart data={data} country={selectedCountry} medalType={hoveredMedal}/>
                    <h4> Medals Over Time of : {getCountryName(selectedCountry)}</h4>
                </div>
                <VerticalMedalSelector onMedalHover={setHoveredMedal}/>
            </div>
            <div className={'map-container'}>
                <CountryPickerMap
                    defaultCountry={selectedCountry}
                    onCountrySelect={setSelectedCountry}
                />
            </div>
            <BottomNavbar season={season} onChange={setSeason}/>
        </div>
    );
};

export default MedalsOverTimePage;