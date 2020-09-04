import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store';

import DetailHeader from '../../interface_components/DetailHeader';
import FontInfoDetails from './FontInfoDetails';
import { FONT_DETAILS, MEDIA_EXT } from '../../../constants/details.constants';
import {
  getFontEntityRequest,
  clearFontEntityState,
  createFontEntityRequest,
  updateFontEntityRequest,
} from '../../../redux/modules/fonts/actions';
import {
  getFontCategoriesRequest,
  clearFontCategoriesDataState,
} from '../../../redux/modules/fontcategories/actions';
import useStyles from './styles';

type Props = {
  id?: number,
  title: string,
};

const FontDetails: React.FC<Props> = ({ id, title }) => {
  const [data, setValues] = useState({ name: '', fontCategoryId: '' });
  const [fontCategories, setFontCategories] = useState();
  const [uploadedFont, setUploadedFont] = useState();

  const classes = useStyles();
  const dispatch = useDispatch();

  const errorMessages = useMemo(() => {
    const errors = [];

    if (data.name === '') {
      errors.push('name field should be filled');
    }

    return errors;
  }, [data]);

  const fontEntityData = useSelector((state: AppState) => state.fontsData.details);
  const fontCategoriesData = useSelector((state: AppState) => state.fontCategoriesData.fontcategories);

  const handleEntityChange = (event: any) => {
    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };

  const handleUploadFont = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;
    const filenameToArr = file.name.split('.');
    const fileExtention = filenameToArr[filenameToArr.length - 1];

    if (!MEDIA_EXT.some((item: string) => item === fileExtention)) {
      console.error('!!!!!!!!!!!!!MEDIA_TYPE_ERROR!!!!!!!!!!!!!!!!!!');
      return;
    }

    setUploadedFont(file);
  };

  useEffect(() => {
    if (id) {
      dispatch(getFontEntityRequest(id));
    }

    dispatch(getFontCategoriesRequest());
  }, [dispatch, id]);

  useEffect(() => {
    if (fontEntityData) {
      const { name, fontCategoryId } = fontEntityData;
      setValues({ name, fontCategoryId });
    }

    if (fontCategoriesData.length) {
      setFontCategories(fontCategoriesData);
    }
  }, [fontEntityData, fontCategoriesData]);

  useEffect(() => () => {
    dispatch(clearFontEntityState());
    dispatch(clearFontCategoriesDataState());
  }, [dispatch]);

  const addNewFontEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      name: data.name,
      fontCategoryId: data.fontCategoryId,
      font: uploadedFont,
      link: '',
    };

    dispatch(createFontEntityRequest(payload));
  };

  const updateFontEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      id,
      name: data.name,
      fontCategoryId: data.fontCategoryId,
      link: '',
    };

    dispatch(updateFontEntityRequest(payload));
  };

  return (
    <div className={classes.root}>
      <DetailHeader
        id={id}
        title={title}
        onUpdateEntity={updateFontEntity}
        onAddNewEntity={addNewFontEntity}
        errorMessages={errorMessages}
      />
      {
        id ? (
          <FontInfoDetails
            data={data}
            title={FONT_DETAILS.title}
            fontCategories={fontCategories}
            onHandleEntityChange={handleEntityChange}
          />
        ) : (
          <FontInfoDetails
            newFont
            data={data}
            title={FONT_DETAILS.title}
            fontCategories={fontCategories}
            onHandleEntityChange={handleEntityChange}
            onUploadFont={handleUploadFont}
          />
        )
      }
    </div>
  );
};

export default FontDetails;
