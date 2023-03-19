import { style, styleVariants } from '@vanilla-extract/css';

export const headTitle = style({
  textAlign: 'right',
  width: '100%',
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

export const input = style({
  width: '100%',
  height: 40,
  borderRadius: 4,
  border: '1px solid #eaeaea',
  padding: '0 8px',
});

export const mapUrlInput = style([input, {
  paddingRight: 120,
}]);

const mapUploadButtonBase = style({
  position: 'absolute',
  right: 10,
  top: 30,
  border: '1px solid #eaeaea',
  padding: '4px 8px',
  borderRadius: 4,
  transition: 'opacity 0.2s ease-in-out',

  ':active': {
    backgroundColor: '#eaeaea',
  },
});

export const mapUploadButton = styleVariants({
  hide: [mapUploadButtonBase, {
    opacity: 0,
  }],
  show: [mapUploadButtonBase, {
    opacity: 1,
  }],
});

export const mapContainer = style({
  width: '100%',
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
  fontWeight: 'bold',
  fontSize: 16,
  border: '1px solid #eaeaea',
  padding: '4px 8px',
  borderRadius: 4,

  ':active': {
    backgroundColor: '#eaeaea',
  },
});
