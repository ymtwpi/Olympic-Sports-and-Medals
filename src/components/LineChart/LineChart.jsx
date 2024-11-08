import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data, country, medalType }) => {
    const svgRef = useRef();
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 50, left: 60 };

    useEffect(() => {
        if (!data || data.length === 0) return;

        const medalTypes = ['Gold', 'Silver', 'Bronze'];
        const filteredData = country ? data.filter(d => d.Country === country) : data;

        const yearMedals = medalTypes.map(type => ({
            medalType: type,
            values: d3.rollups(
                filteredData.filter(d => d.Medal === type),
                v => v.length,
                d => d.Year
            ).map(([year, count]) => ({ year: +year, count }))
        }));

        yearMedals.forEach(medalData => {
            medalData.values.sort((a, b) => a.year - b.year);
        });

        const allYears = data.map(d => +d.Year);
        const globalYearExtent = d3.extent(allYears);

        const xScale = d3.scaleLinear()
            .domain(globalYearExtent)
            .range([margin.left, width - margin.right]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(yearMedals, medalData => d3.max(medalData.values, d => d.count))])
            .range([height - margin.bottom, margin.top]);

        const colorMap = {
            Gold: '#FFD700',
            Silver: '#C0C0C0',
            Bronze: '#cd7f32'
        };

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

        yearMedals.forEach(medalData => {
            svg.append("path")
                .datum(medalData.values)
                .attr("fill", "none")
                .attr("stroke", colorMap[medalData.medalType])
                .attr("stroke-width", 2)
                .attr("opacity", medalType === null || medalData.medalType === medalType ? 1 : 0.3)
                .attr("d", d3.line()
                    .x(d => xScale(d.year))
                    .y(d => yScale(d.count))
                );
        });

        yearMedals.forEach(medalData => {
            svg.selectAll(`.circle-${medalData.medalType}`)
                .data(medalData.values)
                .enter()
                .append("circle")
                .attr("cx", d => xScale(d.year))
                .attr("cy", d => yScale(d.count))
                .attr("r", 3)
                .attr("fill", colorMap[medalData.medalType])
                .attr("opacity", medalType === null || medalData.medalType === medalType ? 1 : 0.3);
        });

        svg.append("text")
            .attr("x", width / 2)
            .attr("y", height - 10)
            .attr("text-anchor", "middle")
            .text("Years");

        svg.append("text")
            .attr("x", -(height / 2))
            .attr("y", 20)
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .text("Medals");

    }, [data, country, medalType]);

    return <svg ref={svgRef}></svg>;
};

export default LineChart;