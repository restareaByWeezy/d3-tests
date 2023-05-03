import { Grid } from '@chakra-ui/react';

import Row from '@/common/Flex/Row';
import BarChartRace from '@/features/BarChartRace';

import SomeText from './fragments/SomeText';

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
      <Row width="100%" justify="center">
        <BarChartRace />
      </Row>
    </Grid>
  );
};

export default Home;
