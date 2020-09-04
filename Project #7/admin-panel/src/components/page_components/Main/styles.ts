import { createStyles, makeStyles } from '@material-ui/core';
import { MAIN_BACKGROUND_COLOR } from '../../../app/theme';

const styles = () => createStyles({
  root: {
    width: '100%',
    display: 'flex',
    backgroundColor: MAIN_BACKGROUND_COLOR,
    minHeight: '100%',
  },
  appBar: {
    zIndex: 9999,
    boxShadow: 'none',
  },
  content: {
    paddingTop: 120,
    paddingLeft: 60,
    width: '80vw',
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
});

const useStyles = makeStyles(styles, { name: 'Main' });

export default useStyles;
