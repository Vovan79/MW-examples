import { createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => createStyles({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridGap: '20px',
    height: '48px',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'auto 1fr auto auto',
      gridGap: '32px',
      height: '48px',
    },

    [theme.breakpoints.down('md')]: {
      padding: '0 34px 0 34px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '48px',
    },
  },
  sportsRuLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    justifySelf: 'start',
    cursor: 'pointer',
    '& > img': {
      height: '24px',
      marginRight: '20px',
    },
  },
  menuIcon: {
    transitionProperty: 'transform',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    '&&': {
      backgroundColor: theme.colors.primary.deepDark,
    },
    padding: 7,
  },
  rotate: {
    transform: 'rotate(90deg)',
  },
  hide: {
    display: 'none',
  },
  icon: {
    color: theme.colors.white,
  },
}));

export default useStyles;
