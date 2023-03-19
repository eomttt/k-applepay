import { style } from '@vanilla-extract/css';
import { HEADER_HEIGHT, PADDING_X } from 'components/constants';

export const header = style({
  width: '100%',
  height: HEADER_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${PADDING_X}px`,
  borderBottom: '1px solid #eaeaea',
  position: 'fixed',
  backgroundColor: '#fff',
  opacity: 0.8,
});
