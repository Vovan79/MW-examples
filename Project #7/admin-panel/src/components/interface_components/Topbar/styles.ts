import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { BLUE_COLOR } from '../../../app/theme';


const styles = (theme: Theme) => createStyles({
  buttonIcon: {
    marginRight: theme.spacing(1),
    fontSize: 32,
  },
  blueColor: {
    color: BLUE_COLOR,
  },
  customButton: {
    minWidth: 100,
    '&:disabled': {
      backgroundColor: '#ccd0d0',
      color: '#fff',
    },
  },
  toolbar: {
    paddingLeft: 10,
  },
  labelText: {
    position: 'absolute',
    top: 18,
    left: 92,
    display: 'inline-box',
    fontSize: '18px',
    textAlign: 'left',
  },
});

const useStyles = makeStyles(styles, { name: 'Topbar' });

export default useStyles;
