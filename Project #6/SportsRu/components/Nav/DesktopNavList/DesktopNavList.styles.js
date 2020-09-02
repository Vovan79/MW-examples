import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  navList: {
    display: 'none',
    height: '100%',
    listStyle: 'none',

    '& > img': {
      alignSelf: 'center',
      cursor: 'pointer',
    },

    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: 0,
      justifyContent: 'start',
    },
  },
  navListItem: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontWeight: '400',
    color: theme.colors.textMenu.white,
    userSelect: 'none',
    padding: '8px 8px 8px 45px',

    '&:hover': {
      color: theme.colors.primary.dark,
    },

    '& > p': {
      width: '100%',
      maxWidth: '150px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      userSelect: 'none',
    },

    // show DesktopNavGroup on hover
    '&:hover > div': {
      transition: '0.5s',
      pointerEvents: 'all',
      opacity: '1',
      transform: 'translate3d(0, 0, 0)',
    },
  },
}), { name: 'DesktopNavList' });

export default useStyles;
