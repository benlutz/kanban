import { styled } from './stitches.config';

export const StyledColumn = styled('div', {
  border: '1px dashed gray',
  margin: '1rem',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 250,

  variants: {
    layout: {
      sm: {
        minWidth: 250,
      },
    },
  },
});

export const StyledColumnTitle = styled('h2', {
  marginTop: 0,
});
