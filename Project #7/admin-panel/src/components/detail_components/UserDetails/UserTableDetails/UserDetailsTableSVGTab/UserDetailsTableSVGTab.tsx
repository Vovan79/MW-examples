import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import { AppState } from '../../../../../redux/store';
import {
  getSVGsRequest,
  clearSVGsDataState,
} from '../../../../../redux/modules/svgs/actions';

type Props = {
  svgType: string,
  onHandleClickSVGSubTab: any,
};

const UserDetailsTableSVGTab: React.FC<Props> = ({ svgType, onHandleClickSVGSubTab }) => {
  const [svgsNumber, setSVGsNumber] = useState(0);

  const dispatch = useDispatch();

  const svgsData = useSelector((state: AppState) => state.svgsData.svgs);

  console.log('!!!!!!!!!!!!!!!!!!!!! svgType:', { svgType, svgsNumber });


  useEffect(() => {
    dispatch(getSVGsRequest(svgType));
  }, [dispatch, svgType]);

  useEffect(() => {
    if (svgsData) {
      setSVGsNumber(svgsData.length);
    }
  }, [svgsData]);

  useEffect(() => () => {
    clearSVGsDataState();
  }, [dispatch]);

  return (
    <MenuItem onClick={() => onHandleClickSVGSubTab(svgType)}>
      {svgType === 'svg_icon' ? `SVGs Icon (${svgsNumber})` : `SVGs Shape (${svgsNumber})`}
    </MenuItem>
  );
};

export default UserDetailsTableSVGTab;
