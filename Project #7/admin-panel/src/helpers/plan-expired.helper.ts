const detectPlanTimeExpired = (planStarted: string) => {
  const startTime = parseInt(planStarted, 10);
  const currentTime = Date.now();

  const diff = currentTime - startTime;
  // Number of days left
  const planExpiredInDays = 30 - Math.ceil(diff / 1000 / 60 / 60 / 24);

  const planEndInMillisec = startTime + 30 * 24 * 60 * 60 * 1000;
  const planEndYear = new Date(planEndInMillisec).getFullYear();
  const planEndMonth = new Date(planEndInMillisec).getMonth() + 1;
  const planEndDay = new Date(planEndInMillisec).getDate();
  // Date the plan left
  const planEnd = `${planEndYear}/${planEndMonth}/${planEndDay} (${planExpiredInDays} days)`;

  return planEnd;
};

export default detectPlanTimeExpired;
