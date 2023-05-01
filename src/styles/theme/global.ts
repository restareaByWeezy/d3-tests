export const global = {
  styles: {
    global: (props: { colorMode: string }) => ({
      'html, body': {
        fontSize: 'sm',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        lineHeight: 'tall',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        WebkitFontSmoothing: `antialiased`,
        fontFamily: 'Pretendard-Regular',
      },
      '#root': {
        isolation: `isolate`,
        width: '100%',
        height: '100%',
        minHeight: '100vh',
      },
      '::selection': {
        backgroundColor: 'primary',
        color: 'primary',
      },
      ':focus': {
        outlineColor: 'primary',
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
      },
      '*': {
        boxSizing: `border-box`,
        margin: 0,
      },
      'img, picture, video, canvas, svg': {
        display: `block`,
        maxWidth: `100%`,
      },
      'input, button, textarea, select': {
        font: `inherit`,
        all: `unset`,
      },
      'p, h1, h2, h3, h4, h5, h6': {
        overflowWrap: `break-word`,
        all: 'unset',
      },
      'ul, li': {
        all: 'unset',
        listStyle: 'none',
      },
    }),
  },
};
