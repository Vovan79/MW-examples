import { Theme, createStyles, makeStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  drawer: {
    width: theme.leftDrawer.width,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.leftDrawer.width,
    backgroundColor: theme.palette.primary.main,
    border: 0,
    paddingLeft: 0,
    paddingRight: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  toolbar: theme.mixins.toolbar,
  menuContainer: {
    flexGrow: 1,
  },
  menuItem: {
    width: '100%',
  },
});

const useStyles = makeStyles(styles, { name: 'Main' });

export default useStyles;
