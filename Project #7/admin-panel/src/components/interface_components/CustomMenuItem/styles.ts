import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) => createStyles({
  icon: {
    color: 'white',
    '& path:nth-of-type(1)': {
      display: 'none',
    },
    '& path': {
      fill: 'currentColor',
    },
  },
  selected: {
    position: 'relative',
    backgroundColor: `${theme.mainPopup.backgroundColor} !important`,
    '&:after': {
      borderRight: `8px solid ${theme.mainPopup.backgroundColor}`,
      borderTop: `8px solid ${theme.mainPopup.backgroundColor}`,
      content: '" "',
      position: 'absolute',
      marginLeft: '-8px',
      left: '100%',
      width: '16px',
      height: '16px',
      bottom: '-8px',
      borderTopRightRadius: '16px',
    },
    '&:before': {
      borderRight: `8px solid ${theme.mainPopup.backgroundColor}`,
      borderBottom: `8px solid ${theme.mainPopup.backgroundColor}`,
      content: '" "',
      position: 'absolute',
      marginLeft: '-8px',
      left: '100%',
      width: '16px',
      height: '16px',
      top: '-8px',
      borderBottomRightRadius: '16px',
    },
  },
  menuText: {
    fontSize: 11,
  },
});
