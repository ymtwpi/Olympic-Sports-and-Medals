import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const CountryPickerMap = ({ onCountrySelect, defaultCountryCode }) => {
    const svgRef = useRef();
    const [selectedCountryCode, setSelectedCountryCode] = useState(defaultCountryCode);
    const width = 800;
    const height = 500;

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('background-color', '#ffffff');

        const projection = d3.geoMercator()
            .scale(120)
            .translate([width / 2, height / 1.5]);

        const path = d3.geoPath().projection(projection);

        svg.selectAll("*").remove();

        d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson').then(function (data) {
            svg.append('g')
                .selectAll('path')
                .data(data.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', d => (d.id === selectedCountryCode ? '#888888' : '#cccccc'))
                .attr('stroke', '#333333')
                .attr('stroke-width', 0.5)
                .on('click', (event, d) => {
                    const countryCode = d.id;
                    setSelectedCountryCode(countryCode);
                    onCountrySelect(countryCode);
                })
                .on('mouseover', function () {
                    d3.select(this).attr('fill', '#888888');
                })
                .on('mouseout', function (event, d) {
                    d3.select(this).attr('fill', d => (d.id === selectedCountryCode ? '#888888' : '#cccccc'));
                });
        });
    }, [selectedCountryCode, onCountrySelect]);

    useEffect(() => {
        setSelectedCountryCode(defaultCountryCode);
    }, [defaultCountryCode]);

    return <svg ref={svgRef}></svg>;
};

export default CountryPickerMap;