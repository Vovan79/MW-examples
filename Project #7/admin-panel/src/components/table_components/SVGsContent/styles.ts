import { createStyles, makeStyles } from '@material-ui/core';
import { LIGHT_BLUE_COLOR } from '../../../app/theme';

const styles = () => createStyles({
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: 1300,
  },
  category_container: {
    maxHeight: 460,
    width: 450,
    borderRadius: 0,
    marginRight: 30,
  },
  container: {
    maxHeight: 460,
    width: 850,
    borderRadius: 0,
  },
  row: {
    '&:hover': {
      backgroundColor: LIGHT_BLUE_COLOR,
      cursor: 'pointer',
    },
  },
  id: {
    width: 20,
  },
  actions: {
    width: 50,
  },
  pagination: {
    flex: 0,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
