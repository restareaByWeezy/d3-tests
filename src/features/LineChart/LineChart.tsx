import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

import { data } from './data';

const transform = 'translate(50,50)';

const LineChart = () => {
  const [marker, setMarker] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMarker((prevMarker) => (prevMarker + 10 > 100 ? 10 : prevMarker + 10));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const svgRef = useRef(null);

  const renderSvg = () => {
    const chartWidth = 500 - 200;
    const chartHeight = 300 - 200;

    const svg = d3.select(svgRef.current);

    svg.selectAll('*').remove();

    const xScale = d3.scaleLinear().domain([0, 100]).range([0, chartWidth]);
    const yScale = d3.scaleLinear().domain([0, 200]).range([chartHeight, 0]);

    const g = svg.append('g').attr('transform', transform);

    g.append('g')
      .attr('transform', 'translate(0,' + chartHeight + ')')
      .call(d3.axisBottom(xScale));

    g.append('g').call(d3.axisLeft(yScale));

    svg
      .append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return xScale(d[0]);
      })
      .attr('cy', function (d) {
        return yScale(d[1]);
      })
      .attr('r', 3)
      .attr('transform', transform)
      .style('fill', '#CC0000');

    const line = d3
      .line()
      .x(function (d) {
        return xScale(d[0]);
      })
      .y(function (d) {
        return yScale(d[1]);
      })
      .curve(d3.curveMonotoneX) as unknown as number[];

    svg
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('transform', transform)
      .attr('d', line)
      .style('fill', 'none')
      .style('stroke', '#CC0000')
      .style('stroke-width', '2');

    if (marker) {
      svg
        .append('svg:line')
        .attr('transform', transform)
        .attr('stroke', '#00ff00')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 2)
        .attr('x1', xScale(marker))
        .attr('y1', 200)
        .attr('x2', xScale(marker))
        .attr('y2', 0);
    }
  };

  useEffect(() => {
    renderSvg();
  }, [marker]);

  return <svg ref={svgRef} width={500} height={300} />;
};

export default LineChart;
