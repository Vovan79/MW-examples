import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store';

import DetailHeader from '../../interface_components/DetailHeader';
import FontComboInfoDetails from './FontComboInfoDetails';
import FontComboSettingDetails from './FontComboSettingDetails';
import {
  FONT_COMBO_DETAILS,
  FONT_COMBO_SETTINGS_DEFAULT as defaultSettings,
} from '../../../constants/details.constants';
import {
  getFontComboEntityRequest,
  clearFontComboEntityState,
  createFontComboEntityRequest,
  updateFontComboEntityRequest,
} from '../../../redux/modules/fontcombos/actions';
import {
  getFontsRequest,
  clearFontsDataState,
  connectFonts,
} from '../../../redux/modules/fonts/actions';
import useStyles from './styles';

type Props = {
  id?: number,
  title: string,
};

const FontComboDetails: React.FC<Props> = ({ id, title }) => {
  const [fonts, setFonts] = useState();
  const [data, setValues] = useState({ name: '', order: '' });
  const [settings, setSettings] = useState(defaultSettings);
  console.log('!!!!!!!!!!!!!!!!!11 settings:', settings);

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

  const fontsData = useSelector((state: AppState) => state.fontsData.fonts);
  const fontComboEntityData = useSelector((state: AppState) => state.fontCombosData.details);

  const handleEntityChange = (event: any) => {
    if (['order'].includes(event.target.name) && Number.isNaN(Number(event.target.value))) {
      return;
    }

    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };

  const handleSettingsChange = (event: any, index: number) => {
    const currentSettings = settings.slice();
    currentSettings[index][event.target.name] = event.target.value;
    // setSettings(Object.assign({}, settings, { [event.target.name]: event.target.value }));

    setSettings(currentSettings);
  };

  useEffect(() => {
    dispatch(getFontsRequest());

    if (id) {
      dispatch(getFontComboEntityRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (fontsData.length) {
      setFonts(fontsData);
      // dispatch(connectFonts(fontsData.map(item => item.id)));
      dispatch(connectFonts(fontsData));
    }

    if (fontComboEntityData) {
      const { name, order, textStyles } = fontComboEntityData;
      setValues({ name, order: order.toString() });

      setSettings(textStyles);
    }
  }, [dispatch, fontComboEntityData, fontsData]);

  useEffect(() => () => {
    dispatch(clearFontsDataState());
    dispatch(clearFontComboEntityState());
  }, [dispatch]);

  const addNewFontComboEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      name: data.name,
      order: parseInt(data.order, 10),
      textStyles: settings,
    };

    dispatch(createFontComboEntityRequest(payload));
  };

  const updateFontComboEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = {
      id,
      name: data.name,
      order: parseInt(data.order, 10),
      textStyles: settings,
    };

    dispatch(updateFontComboEntityRequest(payload));
  };

  return (
    <div className={classes.root}>
      <DetailHeader
        id={id}
        title={title}
        onUpdateEntity={updateFontComboEntity}
        onAddNewEntity={addNewFontComboEntity}
        errorMessages={errorMessages}
      />
      <div className={classes.main}>
        <div className={classes.info}>
          <FontComboInfoDetails
            data={data}
            title={FONT_COMBO_DETAILS.title}
            onHandleEntityChange={handleEntityChange}
          />
        </div>
        <div className={classes.setting}>
          <FontComboSettingDetails
            fonts={fonts}
            settings={settings}
            onHandleSettingsChange={handleSettingsChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FontComboDetails;
