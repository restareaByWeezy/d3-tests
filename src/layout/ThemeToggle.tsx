import { IconButton, useColorMode } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme toggle"
      icon={colorMode === 'light' ? <div>light</div> : <div>moon</div>}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
