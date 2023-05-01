import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ColProps extends FlexProps {
  children?: ReactNode;
  className?: string;
  reverse?: boolean;
}

const Col = ({ children, reverse, ...props }: ColProps) => {
  return (
    <Flex direction={reverse ? 'column-reverse' : 'column'} {...props}>
      {children}
    </Flex>
  );
};

export default Col;
