import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data, country }) => {
    const svgRef = useRef();
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    console.log(country);

    useEffect(() => {
        if (!data || data.length === 0) return;

        const filteredData = country ? data.filter(d => d.Country === country) : data;

        const yearMedals = d3.rollups(
            filteredData,
            v => v.length,
            d => d.Year
        ).map(([year, count]) => ({ year: +year, count }));

        yearMedals.sort((a, b) => a.year - b.year);

        const xScale = d3.scaleLinear()
            .domain(d3.extent(yearMedals, d => d.year))
            .range([margin.left, width - margin.right]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(yearMedals, d => d.count)])
            .range([height - margin.bottom, margin.top]);

        const xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale).tickFormat(d3.format("d")).ticks(10));

        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale));

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .style("background", "#f9f9f9");

        svg.selectAll("*").remove();

        svg.append("g").call(xAxis);
        svg.append("g").call(yAxis);

        svg.append("path")
            .datum(yearMedals)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", d3.line()
                .x(d => xScale(d.year))
                .y(d => yScale(d.count))
            );

        svg.selectAll(".circle")
            .data(yearMedals)
            .enter()
            .append("circle")
            .attr("cx", d => xScale(d.year))
            .attr("cy", d => yScale(d.count))
            .attr("r", 3)
            .attr("fill", "steelblue");
    }, [data, country]);

    return <svg ref={svgRef}></svg>;
};

export default LineChart;