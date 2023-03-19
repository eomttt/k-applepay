import { style } from '@vanilla-extract/css';
import { HEADER_HEIGHT, PADDING_X } from 'components/constants';

const CONTENT_MAX_WIDTH = 1024;

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const content = style({
  width: '100%',
  maxWidth: CONTENT_MAX_WIDTH,
  padding: `${HEADER_HEIGHT + 10}px ${PADDING_X}px 0`,
});

export const headerTitle = style({
  fontWeight: 'bold',
  fontSize: 20,
});
