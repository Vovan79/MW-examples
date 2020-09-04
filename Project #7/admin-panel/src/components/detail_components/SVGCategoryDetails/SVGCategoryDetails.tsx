import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store';

import DetailHeader from '../../interface_components/DetailHeader';
import SVGCategoryInfoDetails from './SVGCategoryInfoDetails';
import { SVG_ICON_CATEGORY_DETAILS, SVG_SHAPE_CATEGORY_DETAILS } from '../../../constants/details.constants';
import {
  getSVGCategoryEntityRequest,
  clearSVGCategoryEntityState,
  createSVGCategoryEntityRequest,
  updateSVGCategoryEntityRequest,
} from '../../../redux/modules/svgcategories/actions';
import useStyles from './styles';

type Props = {
  id?: number,
  type: string,
  title: string,
};

const SVGCategoryDetails: React.FC<Props> = ({ id, type, title }) => {
  const [data, setValues] = useState({ name: '', order: '' });

  const classes = useStyles();
  const dispatch = useDispatch();

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

  const svgCategoryEntityData = useSelector((state: AppState) => state.svgCategoriesData.details);

  const handleEntityChange = (event: any) => {
    if (['order'].includes(event.target.name) && Number.isNaN(Number(event.target.value))) {
      return;
    }

    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    if (id) {
      dispatch(getSVGCategoryEntityRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (svgCategoryEntityData) {
      const { name, order } = svgCategoryEntityData;
      setValues({ name, order: order.toString() });
    }
  }, [svgCategoryEntityData]);

  useEffect(() => () => {
    dispatch(clearSVGCategoryEntityState());
  }, [dispatch]);

  const addNewSVGCategoryEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      name: data.name,
      type,
      order: parseInt(data.order, 10),
    };

    dispatch(createSVGCategoryEntityRequest(payload));
  };

  const updateSVGCategoryEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      id,
      name: data.name,
      type,
      order: parseInt(data.order, 10),
    };

    dispatch(updateSVGCategoryEntityRequest(payload));
  };

  return (
    <div className={classes.root}>
      <DetailHeader
        id={id}
        title={title}
        onUpdateEntity={updateSVGCategoryEntity}
        onAddNewEntity={addNewSVGCategoryEntity}
        errorMessages={errorMessages}
      />
      <SVGCategoryInfoDetails
        data={data}
        type={type}
        title={type === 'svg_icon' ? SVG_ICON_CATEGORY_DETAILS.title : SVG_SHAPE_CATEGORY_DETAILS.title}
        onHandleEntityChange={handleEntityChange}
      />
    </div>
  );
};

export default SVGCategoryDetails;
