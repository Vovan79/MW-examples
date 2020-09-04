import { createStyles, makeStyles } from '@material-ui/core';

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
  titleblock: {
    alignItems: 'flex-start',
  },
  searchblock: {
    justifyContent: 'flex-end',
  },
  buttonblock: {
    justifyContent: 'space-between',
  },
  titlebutton: {
    height: 40,
    padding: 5,
    marginRight: 40,
  },
  searchbutton: {
    width: 40,
    height: 40,
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#EEE',
    borderRadius: 5,
  },
  searchfield: {
    borderRadius: 5,
    minWidth: 150,
    backgroundColor: '#EEE',
  },
});

const useStyles = makeStyles(styles, { name: 'TableHeader' });

export default useStyles;
