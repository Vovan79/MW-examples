import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/store';
import UsersTable from '../../../table_components/UsersTable/index';
import PlansTable from '../../../table_components/PlansTable/index';
import OrdersTable from '../../../table_components/OrdersTable/index';
import ProductsTable from '../../../table_components/ProductsTable/index';
import SizesTable from '../../../table_components/SizesTable/index';
import CategoriesTable from '../../../table_components/CategoriesTable/index';
import FontsContent from '../../../table_components/FontsContent/index';
import SVGsContent from '../../../table_components/SVGsContent';
import {
  TABLE_TITLE,
  TABLE_ROLE,
  ADMIN,
  USER,
  PLAN,
  DESIGNER,
  ORDER,
  PRODUCT,
  SIZE,
  CATEGORY,
  FONT,
  SVG,
  ICON,
  REPORT,
} from '../../../../constants/tables.constants';

const TableContent = () => {
  const selectedMenu = useSelector((state: AppState) => state.leftSidebar.selectedMenu);

  switch (selectedMenu) {
    case ADMIN:
      return <UsersTable role={TABLE_ROLE.admin} title={TABLE_TITLE.admin} />;
    case USER:
      return <UsersTable role={TABLE_ROLE.user} title={TABLE_TITLE.user} />;
    case DESIGNER:
      return <UsersTable role={TABLE_ROLE.designer} title={TABLE_TITLE.designer} />;
    case PLAN:
      return <PlansTable title={TABLE_TITLE.plan} />;
    case ORDER:
      return <OrdersTable title={TABLE_TITLE.order} />;
    case PRODUCT:
      return <ProductsTable title={TABLE_TITLE.product} />;
    case SIZE:
      return <SizesTable title={TABLE_TITLE.size} />;
    case CATEGORY:
      return <CategoriesTable title={TABLE_TITLE.category} />;
    case FONT:
      return <FontsContent />;
    case SVG:
      return <SVGsContent />;
    case ICON:
      return <h1>Icons</h1>;
    case REPORT:
      return <h1>Reports</h1>;
    default:
      return null;
  }
};

export default TableContent;
