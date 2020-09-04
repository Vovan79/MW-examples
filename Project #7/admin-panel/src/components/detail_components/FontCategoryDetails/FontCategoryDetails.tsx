import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store';

import DetailHeader from '../../interface_components/DetailHeader';
import FontCategoryInfoDetails from './FontCategoryInfoDetails';
import { FONT_CATEGORY_DETAILS } from '../../../constants/details.constants';
import {
  getFontCategoryEntityRequest,
  clearFontCategoryEntityState,
  createFontCategoryEntityRequest,
  updateFontCategoryEntityRequest,
} from '../../../redux/modules/fontcategories/actions';
import useStyles from './styles';

type Props = {
  id?: number,
  title: string,
};

const FontCategoryDetails: React.FC<Props> = ({ id, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [data, setValues] = useState({ name: '', order: '' });

  const errorMessages = useMemo(() => {
    const errors = [];

    if (data.name === '') {
      errors.push('name field should be filled');
    }

    if (data.order === '') {
      errors.push('order field should be filled');
    }

    return errors;
  }, [data]);


  const fontCategoryEntityData = useSelector((state: AppState) => state.fontCategoriesData.details);

  const handleEntityChange = (event: any) => {
    if (event.target.name === 'order' && Number.isNaN(Number(event.target.value))) {
      return;
    }

    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    if (id) {
      dispatch(getFontCategoryEntityRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (fontCategoryEntityData) {
      const { name, order } = fontCategoryEntityData;
      setValues({ name, order: order.toString() });
    }
  }, [fontCategoryEntityData]);

  useEffect(() => () => {
    dispatch(clearFontCategoryEntityState());
  }, [dispatch]);

  const addNewFontCategoryEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      name: data.name,
      order: parseInt(data.order, 10),
    };

    dispatch(createFontCategoryEntityRequest(payload));
  };

  const updateFontCategoryEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      id,
      name: data.name,
      order: parseInt(data.order, 10),
    };

    dispatch(updateFontCategoryEntityRequest(payload));
  };

  return (
    <div className={classes.root}>
      <DetailHeader
        id={id}
        title={title}
        onUpdateEntity={updateFontCategoryEntity}
        onAddNewEntity={addNewFontCategoryEntity}
        errorMessages={errorMessages}
      />
      <FontCategoryInfoDetails
        data={data}
        title={FONT_CATEGORY_DETAILS.title}
        onHandleEntityChange={handleEntityChange}
      />
    </div>
  );
};

export default FontCategoryDetails;
