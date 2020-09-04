import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { BLUE_COLOR } from '../../../app/theme';

const styles = (theme: Theme) => createStyles({
  grey: {
    backgroundColor: '#ccd0d0',
    // border: '2px solid #ebeceb',
    boxShadow: 'none',
  },
  blue: {
    margin: theme.spacing(1),
    backgroundColor: BLUE_COLOR,
    color: 'white',
    fontWeight: 'bold',
  },
});


const useStyles = makeStyles(styles, { name: 'CustomButton' });

export default useStyles;
