import { style } from '@vanilla-extract/css';
import { PADDING_X } from 'components/constants';

const CONTENT_MAX_WIDTH = 1024;

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const content = style({
  width: '100%',
  maxWidth: CONTENT_MAX_WIDTH,
  padding: `0 ${PADDING_X}px`,
});
