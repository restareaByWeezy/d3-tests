import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { config } from './config';
import { radii } from './radii';
import { spacing } from './spacing';
import { zIndices } from './zIndices';

export const theme = extendTheme({
  fonts: {
    heading: 'Plus Jakarta Sans, sans-serif',
    body: 'Plus Jakarta Sans, sans-serif',
  },
  ...config,
  ...colors,
  ...radii,
  ...spacing,
  ...zIndices,
  ...breakpoints,
  ...spacing,
});
