import { style } from '@vanilla-extract/css';
import { HEADER_HEIGHT, PADDING_X } from 'components/constants';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => (
  <header className={header}>
    {children}
  </header>
);

const header = style({
  width: '100%',
  height: HEADER_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${PADDING_X}px`,
});

export default Header;
