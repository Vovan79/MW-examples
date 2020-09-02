import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 34px',
  },
  list: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'start',
    padding: '15px 0',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    listStyle: 'none',
    fontSize: '13px',
  },
  item: {
    display: 'flex',
    padding: '5px 0',
    flexFlow: 'column nowrap',
    alignItems: 'start',
  },
}));

export default useStyles;
