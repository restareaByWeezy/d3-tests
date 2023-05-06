import { csv, scaleBand, scaleLinear, select } from 'd3';
import React, { useEffect, useRef, useState } from 'react';

type Data = {
  name: string;
  date: string;
  value: number;
  category: string;
};

const BarChartRace = () => {
  const [data, setData] = useState<Data[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  const getData = async () => {
    await csv('src/features/BarChartRace/data.csv').then((d) => {
      const typedData = d as unknown as Data[];
      setData(typedData);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      const svg = select(svgRef.current);

      const xScale = scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, 500])
        .padding(0.5);

      const yScale = scaleLinear()
        .domain([0, Math.max(...data.map((d) => d.value))])
        .range([300, 0]);

      svg
        .selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', (d) => xScale(d.name)!)
        .attr('y', (d) => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', (d) => 300 - yScale(d.value));
    }
  }, [data]);
  return (
    <div>
      <svg ref={svgRef} width={500} height={300}></svg>
    </div>
  );
};

export default BarChartRace;
