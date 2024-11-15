import React, {useState, useMemo} from 'react';
import './MedalsPieChart.css'
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar.jsx";
import MedalBar from "../../components/MedalBar/MedalBar.jsx";
import PieChart from "../../components/PieChart/PieChart.jsx";
import {SummerData} from '../../data/Summer.js';
import {WinterData} from "../../data/Winter.js";
import * as d3 from 'd3';

const MedalsPieChart = () => {
    const [season, setSeason] = useState('summer');
    const [activeMedal, setActiveMedal] = useState('gold');

    const rawData = season === 'summer' ? SummerData : WinterData;

    const filteredData = useMemo(() => {
        if (!rawData || rawData.length === 0) return [];
        const aggregatedData = d3.rollups(
            rawData.filter(item => item.Medal.toLowerCase() === activeMedal),
            v => v.length,
            d => d.Country
        )
            .map(([label, value]) => ({label, value}))
            .sort((a, b) => b.value - a.value)
            .slice(0, 20);
        return aggregatedData;
    }, [rawData, activeMedal]);

    const colorScales = {
        gold: d3.scaleSequential(d3.interpolateRgb("#f7e8b5", "#FFD700")).domain([0, d3.max(filteredData, d => d.value)]),
        silver: d3.scaleSequential(d3.interpolateRgb("#e5e5e5", "#bfbfbf")).domain([0, d3.max(filteredData, d => d.value)]),
        bronze: d3.scaleSequential(d3.interpolateRgb("#e6c6a5", "#cd7f32")).domain([0, d3.max(filteredData, d => d.value)])
    };

    const colorScale = colorScales[activeMedal];

    const handleMedalClick = (medal) => {
        setActiveMedal(medal);
    };

    return (
        <div className={'pie-container'}>
            <MedalBar activeMedal={activeMedal} onMedalClick={handleMedalClick}/>
            <div className={'pie-legend-container'}>
                <PieChart data={filteredData} activeMedal={activeMedal}/>
                <div className={'legend'}>
                </div>
            </div>
            <h4> Share of {activeMedal.charAt(0).toUpperCase() + activeMedal.slice(1)} Medals </h4>
            <BottomNavbar season={season} onChange={setSeason}/>
        </div>
    );
};

export default MedalsPieChart;