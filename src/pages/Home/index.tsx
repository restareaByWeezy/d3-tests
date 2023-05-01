import { Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Col from '@/common/Flex/Col';
import Row from '@/common/Flex/Row';

import LineChart from './fragments/LineChart';
import SomeText from './fragments/SomeText';

const data = [
  [1, 1],
  [12, 20],
  [24, 36],
  [32, 50],
  [40, 70],
  [50, 100],
  [55, 106],
  [65, 123],
  [73, 130],
  [78, 134],
  [83, 136],
  [89, 138],
  [100, 140],
];

const Home = () => {
  const [marker, setMarker] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMarker((prevMarker) => (prevMarker + 10 > 100 ? 10 : prevMarker + 10));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Grid gap={4}>
      <SomeText />
      <Row width="100%" justify="center">
        <LineChart data={data} width={500} height={400} marker={marker} />
      </Row>
    </Grid>
  );
};

export default Home;
