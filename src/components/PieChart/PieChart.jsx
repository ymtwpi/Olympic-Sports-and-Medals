import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data, activeMedal }) => {
    const svgRef = useRef();
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 20;

    useEffect(() => {
        if (!data || data.length === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const values = data.map(d => d.value);
        const minValue = Math.min(...values);
        const maxValue = Math.max(...values);

        const colorScales = {
            gold: d3.scaleSequential(d3.interpolateRgb("#f7e8b5", "#FFD700")).domain([minValue, maxValue]),
            silver: d3.scaleSequential(d3.interpolateRgb("#e5e5e5", "#bfbfbf")).domain([minValue, maxValue]),
            bronze: d3.scaleSequential(d3.interpolateRgb("#e6c6a5", "#cd7f32")).domain([minValue, maxValue])
        };

        const colorScale = colorScales[activeMedal];

        const pie = d3.pie().value(d => d.value);
        const arc = d3.arc().innerRadius(0).outerRadius(radius);

        svg.append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`)
            .selectAll("path")
            .data(pie(data))
            .join("path")
            .attr("d", arc)
            .attr("fill", d => colorScale(d.data.value))
            .attr("stroke", "#ffffff")
            .attr("stroke-width", "0.5px");

    }, [data, activeMedal]);

    return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default PieChart;