import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import { AppState } from '../../../redux/store';

import Notifier from '../../interface_components/Notifier';
import DetailHeader from '../../interface_components/DetailHeader';
import SizeInfoDetails from './SizeInfoDetails';
import SizeSetupDetails from './SizeSetupDetails';
import { SIZE_DETAILS, SIZE_SETUP } from '../../../constants/details.constants';
import {
  getSizeEntityRequest,
  clearSizeEntityState,
  createSizeEntityRequest,
  updateSizeEntityRequest,
} from '../../../redux/modules/sizes/actions';
import { Columns, Margins } from '../../../redux/modules/sizes/types';
import useStyles from './styles';

type Props = {
  id?: number,
  title: string,
};

const SizeDetails: React.FC<Props> = ({ id, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [data, setValues] = useState({ name: 'New size', width: '42', height: '42' });
  const [marginSetup, setMargins] = useState<Margins>({
    top: 8,
    bottom: 8,
    left: 8,
    right: 8,
  });
  const [columnSetup, setColumns] = useState<Columns>({ number: 2, gutter: 4 });

  const errorMessages = useMemo(() => {
    const errors = [];

    if (data.name === '') {
      errors.push('name field should be filled');
    }

    if (data.width === '' || Number(data.width) < 1) {
      errors.push('width field should be filled and bigger then 1');
    }

    if (data.height === '' || Number(data.height) < 1) {
      errors.push('height field should be filled  and bigger then 1');
    }

    return errors;
  }, [data]);

  const sizeEntityData = useSelector((state: AppState) => state.sizesData.details);

  const handleEntityChange = (event: any) => {
    if (['width', 'height'].includes(event.target.name) && Number.isNaN(Number(event.target.value))) {
      return;
    }

    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };
  const handleMarginChange = (event: any) => {
    if (Number.isNaN(Number(event.target.value))) {
      return;
    }

    setMargins(Object.assign({}, marginSetup, { [event.target.name]: Number(event.target.value) }));
  };
  const handleColumnChange = (event: any) => {
    if (Number.isNaN(Number(event.target.value))) {
      return;
    }

    setColumns(Object.assign({}, columnSetup, { [event.target.name]: Number(event.target.value) }));
  };

  useEffect(() => {
    if (id) {
      dispatch(getSizeEntityRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (sizeEntityData) {
      const {
        name,
        width,
        height,
        margins,
        columns,
      } = sizeEntityData;
      setValues({ name, width: width.toString(), height: height.toString() });
      setMargins(margins);
      setColumns(columns);
    }
  }, [sizeEntityData]);

  useEffect(() => () => {
    dispatch(clearSizeEntityState());
  }, [dispatch]);

  const addNewSizeEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      name: data.name,
      width: parseInt(data.width, 10),
      height: parseInt(data.height, 10),
      margins: marginSetup,
      columns: columnSetup,
    };

    dispatch(createSizeEntityRequest(payload));
  };

  const updateSizeEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      id,
      name: data.name,
      width: parseInt(data.width, 10),
      height: parseInt(data.height, 10),
      margins: marginSetup,
      columns: columnSetup,
    };

    dispatch(updateSizeEntityRequest(payload));
  };

  return (
    <div className={classes.root}>
      <Notifier />
      <DetailHeader
        id={id}
        title={title}
        onUpdateEntity={updateSizeEntity}
        onAddNewEntity={addNewSizeEntity}
        errorMessages={errorMessages}
      />
      <Grid container className={classes.container}>
        <Grid item xs={6}>
          <SizeInfoDetails
            data={data}
            title={SIZE_DETAILS.title}
            onHandleEntityChange={handleEntityChange}
          />
        </Grid>
        <Grid item xs={6}>
          <SizeSetupDetails
            title={SIZE_SETUP.title}
            marginData={marginSetup}
            columnData={columnSetup}
            onHandleMarginChange={handleMarginChange}
            onHandleColumnChange={handleColumnChange}
          />
        </Grid>
      </Grid>

    </div>
  );
};

export default SizeDetails;
