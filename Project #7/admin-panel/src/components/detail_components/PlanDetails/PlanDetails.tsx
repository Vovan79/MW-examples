import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store';

import DetailHeader from '../../interface_components/DetailHeader';
import PlanInfoDetails from './PlanInfoDetails';
import { PLAN_DETAILS } from '../../../constants/details.constants';
import {
  getPlanEntityRequest,
  clearPlanEntityState,
  createPlanEntityRequest,
  updatePlanEntityRequest,
} from '../../../redux/modules/plans/actions';
import useStyles from './styles';

type Props = {
  id?: number,
  title: string,
};

const PlanDetails: React.FC<Props> = ({ id, title }) => {
  const [data, setValues] = useState({ name: '', size: '', price: '' });

  const classes = useStyles();
  const dispatch = useDispatch();

  const planEntityData = useSelector((state: AppState) => state.plansData.details);

  const handleEntityChange = (event: any) => {
    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    if (id) {
      dispatch(getPlanEntityRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (planEntityData) {
      const { name, size, price } = planEntityData;
      setValues({ name, size, price: price.toString() });
    }
  }, [planEntityData]);

  useEffect(() => () => {
    dispatch(clearPlanEntityState());
  }, [dispatch]);

  const addNewPlanEntity = (): any => {
    const payload = {
      name: data.name,
      size: data.size,
      price: parseFloat(data.price),
    };
    dispatch(createPlanEntityRequest(payload));
  };

  const updatePlanEntity = (): any => {
    const payload = {
      id,
      name: data.name,
      size: data.size,
      price: parseFloat(data.price),
    };
    dispatch(updatePlanEntityRequest(payload));
  };


  return (
    <div className={classes.root}>
      <DetailHeader
        id={id}
        title={title}
        onUpdateEntity={updatePlanEntity}
        onAddNewEntity={addNewPlanEntity}
      />
      <PlanInfoDetails
        data={data}
        title={PLAN_DETAILS.title}
        onHandleEntityChange={handleEntityChange}
      />
    </div>
  );
};

export default PlanDetails;
