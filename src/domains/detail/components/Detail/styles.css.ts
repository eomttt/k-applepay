import { style } from '@vanilla-extract/css';

export const mapContainer = style({
  width: '100%',
  height: '400px',
});

export const section = style({
  marginBottom: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  position: 'relative',
});

export const label = style({
  fontSize: 12,
});
