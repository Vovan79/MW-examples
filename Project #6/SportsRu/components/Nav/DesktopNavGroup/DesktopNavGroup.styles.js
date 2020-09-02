import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'start',
    width: 'auto',
    top: '90%',
    left: '0',
    transform: 'translate3d(50%, 0, 0)',
    // padding: 0,
    borderRadius: '2px',
    boxShadow: '2px 2px 20px 2px rgba(30, 30, 30, 0.1)',
    textTransform: 'none',
    opacity: '0',
    zIndex: '10',
    pointerEvents: 'none',
    transition: 'opacity 100ms ease-in-out, transform 350ms ease-in-out',
    cursor: 'default',
    color: theme.colors.text.normal,
    backgroundColor: theme.colors.white,
    padding: theme.spacing(1),
  },
  navLink: {
    maxWidth: '405px',
    flexGrow: '0',
    padding: `${theme.spacing(0.5)}px 30px`,
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '20px',
    width: '100%',
    textDecoration: 'none',
    display: 'inline-block',
    minWidth: '100px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    '&:hover': {
      background: '#E9F2F9',
      borderRadius: '3px',
      textDecoration: 'none',
    },
    color: theme.colors.text.normal,
    '&:last-child': {
      // paddingBottom: 0,
    },
  },
  activeLink: {
    color: theme.colors.textMenu.normal,
  },
}), { name: 'DesktopNavGroup' });

export default useStyles;
