import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface RowProps extends FlexProps {
  children?: ReactNode;
  className?: string;
  reverse?: boolean;
}

const Row = ({ children, reverse, ...props }: RowProps) => {
  return (
    <Flex direction={reverse ? 'row-reverse' : 'row'} {...props}>
      {children}
    </Flex>
  );
};

export default Row;
