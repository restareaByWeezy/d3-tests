import { csv, DSVRowArray, scaleBand, select } from 'd3';
import React, { useEffect, useRef, useState } from 'react';

type Data = {
  name: string;
  date: string;
  value: string;
  category: string;
};

const BarChartRace = () => {
  const [data, setData] = useState<Data[]>([]);
  const svgRef = useRef(null);

  const getData = async () => {
    const result = await csv('src/features/BarChartRace/data.csv').then((d) => {
      const typedData = d as unknown as Data[];
      setData(typedData);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const svg = select(svgRef.current);
  }, []);

  return <div></div>;
};

export default BarChartRace;
