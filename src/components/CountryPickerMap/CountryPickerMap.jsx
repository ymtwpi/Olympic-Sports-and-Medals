import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
const CountryPickerMap = ({ onCountrySelect, defaultCountry }) => {
    const svgRef = useRef();
    const width = window.innerWidth * 0.65;
    const height = window.innerHeight * 0.65;
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
        d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson').then(function (data) {
            svg.append('g')
                .selectAll('path')
                .data(data.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', d => (d.properties.name === defaultCountry ? '#888888' : '#cccccc'))
                .attr('stroke', '#333333')
                .attr('stroke-width', 0.5)
                .on('click', (event, d) => {
                    const countryName = d.properties.name;
                    console.log(countryName);
                    svg.selectAll('path').attr('fill', country =>
                        country.properties.name === countryName ? '#888888' : '#cccccc'
                    );
                    onCountrySelect(countryName);
                })
                .on('mouseover', function () {
                    d3.select(this).attr('fill', '#888888');
                })
                .on('mouseout', function (event, d) {
                    d3.select(this).attr('fill', d => (d.properties.name === defaultCountry ? '#888888' : '#cccccc'));
                });
        });
    }, [defaultCountry, onCountrySelect]);
    return <svg ref={svgRef}></svg>;
};
export default CountryPickerMap;