import { style } from '@vanilla-extract/css';

export const section = style({
  marginBottom: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const label = style({
  fontSize: 12,
});

export const input = style({
  width: '100%',
  height: 40,
  borderRadius: 4,
  border: '1px solid #eaeaea',
  padding: '0 8px',
});

export const textarea = style({
  width: '100%',
  minHeight: 120,
  borderRadius: 4,
  border: '1px solid #eaeaea',
  padding: '8px',
});

export const buttonSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const submitButton = style({
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
