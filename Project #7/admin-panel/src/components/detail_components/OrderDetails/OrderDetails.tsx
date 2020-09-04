import React from 'react';
import DetailHeader from '../../interface_components/DetailHeader';

type Props = {
  id?: number,
  title: string,
};

const OrderDetails: React.FC<Props> = ({ title }) => {
  return (
    <>
      <DetailHeader title={title} />
    </>
  );
};

export default OrderDetails;
