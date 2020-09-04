import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import UpdateIcon from '@material-ui/icons/Update';
import ErrorMessages from '../ErrorMessages';
import { setTableMode } from '../../../redux/modules/mode/actions';
import { TABLE_MODE } from '../../../redux/modules/mode/types';
import useStyles from './styles';

type Props = {
  id?: number,
  title: string,
  userTable?: boolean,
  onUpdateEntity?: any,
  onAddNewEntity?: any,
  errorMessages?: string[],
};

const DetailHeader: React.FC<Props> = ({
  id,
  title,
  userTable,
  onUpdateEntity,
  onAddNewEntity,
  errorMessages,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isDisabled = useMemo(() => {
    if (!errorMessages) {
      return false;
    }

    return errorMessages.length > 0;
  }, [errorMessages]);

  const handleCloseDetails = () => {
    const modePayload = {
      mode: TABLE_MODE,
      category: '',
      id: 0,
    };
    dispatch(setTableMode(modePayload));
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Typography className={classes.title}>
          {id ? title : 'Add an instance'}
        </Typography>
      </Grid>
      <Grid item className={classes.exitblock} xs={6}>
        {userTable && (
          <Button onClick={handleCloseDetails} className={classes.exitbutton}>
            {'< BACK TO USER SUMMARY'}
          </Button>
        )}
        {id ? (
          <Button
            variant="contained"
            size="small"
            className={classes.savebutton}
            startIcon={<UpdateIcon />}
            onClick={onUpdateEntity}
            disabled={isDisabled}
          >
            Update
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            className={classes.savebutton}
            startIcon={<SaveIcon />}
            onClick={onAddNewEntity}
            disabled={isDisabled}
          >
            Save
          </Button>
        )
      }
      </Grid>
      <Grid item xs={12}>
        {errorMessages && (errorMessages.length > 0) && (
          <ErrorMessages errorMessages={errorMessages} />
        )}
      </Grid>
    </Grid>
  );
};

export default DetailHeader;
