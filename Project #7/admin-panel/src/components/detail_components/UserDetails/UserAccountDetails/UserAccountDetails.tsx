import React from 'react';
import { Paper, TextField, MenuItem } from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';
import { PlanData } from '../../../../redux/modules/plans/types';
import detectPlanTimeExpired from '../../../../helpers/plan-expired.helper';
import useStyles from './styles';

type Props = {
  title: string,
  plans: PlanData[],
  userPlanData: {
    planId: string,
    planStarted: string,
  },
  onHandleUserPlanChange: any,
};

const UserAccountDetails: React.FC<Props> = ({
  title,
  plans,
  userPlanData,
  onHandleUserPlanChange,
}) => {
  const classes = useStyles();

  const { planId, planStarted } = userPlanData;
  let planExpired = '';
  if (planStarted) {
    planExpired = detectPlanTimeExpired(planStarted);
  }

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.row}>
          <TextField
            select
            SelectProps={{ classes: { root: classes.select } }}
            label="Plan"
            name="planId"
            value={planId}
            onChange={onHandleUserPlanChange}
          >
            {
              plans
                ? plans.map((item: PlanData, index: number) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))
                : []
            }
          </TextField>
          <TextField label="Space Used" />
          <TextField
            label="Plan Expired"
            value={planExpired}
            disabled
          />
        </div>
        <div className={classes.row}>
          <TextField label="Design Revenue" />
          <TextField label="Print Revenue" />
          <TextField label="Total Revenue" />
        </div>
      </form>
    </Paper>
  );
};

export default UserAccountDetails;
