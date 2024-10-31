import React, {useState} from 'react';
import CountryPickerMap from '../../components/CountryPickerMap/CountryPickerMap.jsx';
import './MedalsOverTimePage.css'
const MedalsOverTimePage = () => {
    const [selectedCountry, setSelectedCountry] = useState("USA");
    return (
        <div className={'container'}>
            <div className={'line-chart-container'}>
            </div>
            <div className={'map-container'}>
                <CountryPickerMap
                    defaultCountry={selectedCountry}
                    onCountrySelect={setSelectedCountry}
                />
            </div>
        </div>
    );
};
export default MedalsOverTimePage;