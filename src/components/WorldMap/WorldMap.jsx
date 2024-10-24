import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import {findMinMaxMedals, getMedalsByCountry} from "../../data/Utils.js";
import {SummerData} from '../../data/Summer.js';

const WorldMap = ({ medalType }) => {
    const svgRef = useRef();
    const width = window.innerWidth * 0.75;
    const height = window.innerHeight * 0.75;

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('background-color', '#ffffff');

        const projection = d3.geoMercator()
            .scale((width / 630) * 100)
            .translate([width / 2, height / 1.5]);

        const path = d3.geoPath().projection(projection);

        svg.selectAll("*").remove();

        const goldOpacityScale = d3.scaleLinear()
            .domain([findMinMaxMedals(SummerData, 'Gold').min, findMinMaxMedals(SummerData, 'Gold').max])
            .range([0.2, 1]);

        const silverOpacityScale = d3.scaleLinear()
            .domain([findMinMaxMedals(SummerData, 'Silver').min, findMinMaxMedals(SummerData, 'Silver').max])
            .range([0.2, 1]);

        const bronzeOpacityScale = d3.scaleLinear()
            .domain([findMinMaxMedals(SummerData, 'Bronze').min, findMinMaxMedals(SummerData, 'Bronze').max])
            .range([0.2, 1]);

        const goldColor = 'gold';
        const silverColor = '#C0C0C0';
        const bronzeColor = '#cd7f32';

        d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson').then(function (data) {
            svg.append('g')
                .selectAll('path')
                .data(data.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', d => {
                    const countryCode = d.id;
                    const medals = getMedalsByCountry(SummerData, countryCode);

                    if (medalType === 'gold' && medals.gold > 0) {
                        return goldColor;
                    } else if (medalType === 'silver' && medals.silver > 0) {
                        return silverColor;
                    } else if (medalType === 'bronze' && medals.bronze > 0) {
                        return bronzeColor;
                    } else {
                        return '#ffffff';
                    }
                })
                .attr('opacity', d => {
                    const countryCode = d.id;
                    const medals = getMedalsByCountry(SummerData, countryCode);

                    if (medalType === 'gold' && medals.gold > 0) {
                        return goldOpacityScale(medals.gold);
                    } else if (medalType === 'silver' && medals.silver > 0) {
                        return silverOpacityScale(medals.silver);
                    } else if (medalType === 'bronze' && medals.bronze > 0) {
                        return bronzeOpacityScale(medals.bronze);
                    } else {
                        return 0.2;
                    }
                })
                .attr('stroke', '#000000')
                .attr('stroke-width', 0.5);
        });
    }, [width, height, medalType]);

    return <svg ref={svgRef}></svg>;
};

export default WorldMap;
