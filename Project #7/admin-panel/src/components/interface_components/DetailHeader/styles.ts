import { createStyles, makeStyles } from '@material-ui/core';
import { BLUE_COLOR } from '../../../app/theme';


const styles = () => createStyles({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    padding: 0,
  },
  exitblock: {
    textAlign: 'right',
  },
  exitbutton: {
    fontSize: 14,
    marginRight: 10,
  },
  savebutton: {
    backgroundColor: BLUE_COLOR,
    color: '#fff',
  },
});

const useStyles = makeStyles(styles, { name: 'TableHeader' });

export default useStyles;
