import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store';

import DetailHeader from '../../interface_components/DetailHeader';
import SVGInfoDetails from './SVGInfoDetails';
import { SVG_ICON_DETAILS, SVG_SHAPE_DETAILS, SVG_EXT } from '../../../constants/details.constants';
import {
  getSVGEntityRequest,
  clearSVGEntityState,
  createSVGEntityRequest,
  updateSVGEntityRequest,
} from '../../../redux/modules/svgs/actions';
import {
  getSVGCategoriesRequest,
  clearSVGCategoriesDataState,
} from '../../../redux/modules/svgcategories/actions';
import useStyles from './styles';

type Props = {
  id?: number,
  type: string,
  title: string,
};

const SVGDetails: React.FC<Props> = ({ id, type, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [data, setValues] = useState({
    name: '',
    svgCategoryId: '',
    cost: '',
    order: '',
    link: '',
  });
  const [svgCategories, setSVGCategories] = useState();
  const [uploadedSVG, setUploadedSVG] = useState();

  const errorMessages = useMemo(() => {
    const errors = [];

    if (data.name === '') {
      errors.push('name field should be filled');
    }

    if (data.cost === '') {
      errors.push('cost field should be filled');
    }

    if (data.order === '') {
      errors.push('order field should be filled');
    }

    return errors;
  }, [data]);

  const svgEntityData = useSelector((state: AppState) => state.svgsData.details);
  const svgCategoriesData = useSelector((state: AppState) => state.svgCategoriesData.svgcategories);

  const handleEntityChange = (event: any) => {
    if (['cost', 'order'].includes(event.target.name) && Number.isNaN(Number(event.target.value))) {
      return;
    }

    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };

  const handleUploadSVG = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;
    const filenameToArr = file.name.split('.');
    const fileExtention = filenameToArr[filenameToArr.length - 1];

    if (!SVG_EXT.some((item: string) => item === fileExtention)) {
      console.error('!!!!!!!!!!!!!MEDIA_TYPE_ERROR!!!!!!!!!!!!!!!!!!');
      return;
    }

    setUploadedSVG(file);
  };

  useEffect(() => {
    dispatch(getSVGCategoriesRequest(type));

    if (id) {
      dispatch(getSVGEntityRequest(id));
    }
  }, [dispatch, id, type]);

  useEffect(() => {
    if (svgEntityData) {
      const {
        name,
        svgCategoryId,
        cost,
        order,
        link,
      } = svgEntityData;

      setValues({
        name,
        svgCategoryId,
        cost: cost.toString(),
        order: order.toString(),
        link,
      });
    }

    if (svgCategoriesData.length) {
      setSVGCategories(svgCategoriesData);
    }
  }, [svgEntityData, svgCategoriesData]);

  useEffect(() => () => {
    dispatch(clearSVGEntityState());
    dispatch(clearSVGCategoriesDataState());
  }, [dispatch]);

  const addNewSVGEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      type,
      name: data.name,
      svgCategoryId: data.svgCategoryId,
      cost: data.cost,
      order: data.order,
      svg: uploadedSVG,
      link: data.link,
    };

    dispatch(createSVGEntityRequest(payload));
  };

  const updateSVGEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      id,
      type,
      name: data.name,
      svgCategoryId: data.svgCategoryId,
      cost: data.cost,
      order: data.order,
      link: data.link,
    };

    dispatch(updateSVGEntityRequest(payload));
  };

  return (
    <div className={classes.root}>
      <DetailHeader
        id={id}
        title={title}
        onUpdateEntity={updateSVGEntity}
        onAddNewEntity={addNewSVGEntity}
        errorMessages={errorMessages}
      />
      {
        id ? (
          <SVGInfoDetails
            data={data}
            type={type}
            title={type === 'svg_icon' ? SVG_ICON_DETAILS.title : SVG_SHAPE_DETAILS.title}
            svgCategories={svgCategories}
            onHandleEntityChange={handleEntityChange}
          />
        ) : (
          <SVGInfoDetails
            newSVG
            data={data}
            type={type}
            title={type === 'svg_icon' ? SVG_ICON_DETAILS.title : SVG_SHAPE_DETAILS.title}
            svgCategories={svgCategories}
            onHandleEntityChange={handleEntityChange}
            onUploadSVG={handleUploadSVG}
          />
        )
      }
    </div>
  );
};

export default SVGDetails;
