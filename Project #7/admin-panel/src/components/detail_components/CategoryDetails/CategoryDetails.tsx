import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../../redux/store';
import DetailHeader from '../../interface_components/DetailHeader';
import CategoryInfoDetails from './CategoryInfoDetails';
import { CATEGORY_DETAILS } from '../../../constants/details.constants';
import {
  getCategoryEntityRequest,
  clearCategoryEntityState,
  createCategoryEntityRequest,
  updateCategoryEntityRequest,
} from '../../../redux/modules/categories/actions';
import useStyles from './styles';

type Props = {
  id?: number,
  title: string,
};

const CategoryDetails: React.FC<Props> = ({ id, title }) => {
  const [data, setValues] = useState({ name: '', order: '' });

  const classes = useStyles();
  const dispatch = useDispatch();

  const categoryEntityData = useSelector((state: AppState) => state.categoriesData.details);

  const handleEntityChange = (event: any) => {
    if (event.target.name === 'order' && Number.isNaN(Number(event.target.value))) {
      return;
    }

    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };

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

  useEffect(() => {
    if (id) {
      dispatch(getCategoryEntityRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (categoryEntityData) {
      const { name, order } = categoryEntityData;
      setValues({ name, order: order.toString() });
    }
  }, [categoryEntityData]);

  useEffect(() => () => {
    dispatch(clearCategoryEntityState());
  }, [dispatch]);

  const addNewCategoryEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      name: data.name,
      order: parseInt(data.order, 10),
    };

    dispatch(createCategoryEntityRequest(payload));
  };

  const updateCategoryEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      id,
      name: data.name,
      order: parseInt(data.order, 10),
    };

    dispatch(updateCategoryEntityRequest(payload));
  };

  return (
    <div className={classes.root}>
      <DetailHeader
        id={id}
        title={title}
        onUpdateEntity={updateCategoryEntity}
        onAddNewEntity={addNewCategoryEntity}
        errorMessages={errorMessages}
      />
      <CategoryInfoDetails
        data={data}
        title={CATEGORY_DETAILS.title}
        onHandleEntityChange={handleEntityChange}
      />
    </div>
  );
};

export default CategoryDetails;
