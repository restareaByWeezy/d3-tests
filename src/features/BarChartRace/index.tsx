import { max, scaleBand, scaleLinear, select, Selection } from 'd3';
import React, { useEffect, useRef, useState } from 'react';

import useInterval from '@/hooks/useInterval';

import { sampleData } from './constants';

const getRandomIndex = (array: any[]) => {
  return Math.floor(array.length * Math.random());
};

type Data = {
  name: string;
  value: number;
  color: string;
};

const BarChartRace = () => {
  const [iteration, setIteration] = useState(0);
  const [start, setStart] = useState(false);
  const [data, setData] = useState(sampleData);

  useInterval(() => {
    if (start) {
      const randomIndex = getRandomIndex(data);
      setData(
        data.map((entry, index) =>
          index === randomIndex ? { ...entry, value: entry.value + 10 } : entry,
        ),
      );
      setIteration(iteration + 1);
    }
  }, 500);

  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    // sorting the data
    data.sort((a, b) => b.value - a.value);

    const yScale = scaleBand<number>()
      .paddingInner(0.1)
      .domain(data.map((value, index) => index))
      .range([0, 200]);

    const xScale = scaleLinear<number>()
      .domain([0, max(data, (entry) => entry.value) as number])
      .range([0, 400]);

    // draw the bars
    svg
      .selectAll<SVGRectElement, Data>('.bar')
      .data(data, (entry, index) => entry.name)
      .join((enter) =>
        enter
          .append('rect')
          .attr('y', (entry, index) => yScale(index) as number),
      )
      .attr('fill', (entry) => entry.color)
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('height', yScale.bandwidth())
      .transition()
      .attr('width', (entry) => xScale(entry.value))
      .attr('y', (entry, index) => yScale(index) as number);

    svg
      .selectAll<SVGTextElement, Data>('.label')
      .data(data, (entry, index) => entry.name)
      .join((enter) =>
        enter
          .append('text')
          .attr(
            'y',
            (entry, index) =>
              (yScale(index) as number) + yScale.bandwidth() / 2 + 5,
          ),
      )
      .text((entry) => `🐎 ... ${entry.name} (${entry.value} meters)`)
      .attr('class', 'label')
      .attr('x', 10)
      .transition()
      .attr(
        'y',
        (entry, index) =>
          (yScale(index) as number) + yScale.bandwidth() / 2 + 5,
      );
  }, [data]);

  return (
    <div>
      <div
        ref={wrapperRef}
        style={{ width: '100%', height: '100%', marginBottom: '2rem' }}
      >
        <svg style={{ height: '100%' }} ref={svgRef}></svg>
      </div>
      <button onClick={() => setStart(!start)}>
        {start ? 'Stop the race' : 'Start the race!'}
      </button>
    </div>
  );
};

export default BarChartRace;
