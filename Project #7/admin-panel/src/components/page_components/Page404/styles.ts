import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { MAIN_BACKGROUND_COLOR, BLUE_COLOR } from '../../../app/theme';

const styles = (theme: Theme) => createStyles({
  root: {
    height: '100vh',
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  container: {
    width: 400,
    padding: theme.spacing(4),
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: theme.mainPopup.backgroundColor,
  },
  link: {
    color: '#ffffff',
    '&:hover': {
      color: BLUE_COLOR,
    },
  },
});

const useStyles = makeStyles(styles, { name: 'Page404' });

export default useStyles;
