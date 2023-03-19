import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const title = style({
  fontWeight: 'bold',
  fontSize: 20,
});

export const addButton = style({
  appearance: 'none',
  fontWeight: 'bold',
  fontSize: 16,
  border: '1px solid #eaeaea',
  padding: '4px 8px',
  borderRadius: 4,

  ':active': {
    backgroundColor: '#eaeaea',
  },
});
