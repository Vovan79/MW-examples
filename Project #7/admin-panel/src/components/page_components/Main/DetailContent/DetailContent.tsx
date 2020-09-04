import React from 'react';
import CategoryDetails from '../../../detail_components/CategoryDetails';
import FontDetails from '../../../detail_components/FontDetails';
import FontCategoryDetails from '../../../detail_components/FontCategoryDetails';
import FontComboDetails from '../../../detail_components/FontComboDetails';
import PlanDetails from '../../../detail_components/PlanDetails';
import OrderDetails from '../../../detail_components/OrderDetails';
import ProductDetails from '../../../detail_components/ProductDetails';
import SizesDetails from '../../../detail_components/SizeDetails';
import UserDetails from '../../../detail_components/UserDetails';
import SVGDetails from '../../../detail_components/SVGDetails';
import SVGCategoryDetails from '../../../detail_components/SVGCategoryDetails';
import {
  DETAILS_TITLE,
  TABLE_ROLE,
  ADMIN,
  USER,
  DESIGNER,
  PLAN,
  ORDER,
  PRODUCT,
  SIZE,
  CATEGORY,
  FONT,
  FONT_CATEGORIES,
  FONT_COMBOS,
  SVG_ICON,
  SVG_SHAPE,
  SVG_ICON_CATEGORIES,
  SVG_SHAPE_CATEGORIES,
  ICON,
  REPORT,
} from '../../../../constants/tables.constants';

type Props = {
  id?: number,
  category: string,
};

const DetailContent: React.FC<Props> = ({ category, id }) => {
  switch (category) {
    case ADMIN:
      return <UserDetails id={id} role={TABLE_ROLE.admin} title={DETAILS_TITLE.admin} />;
    case USER:
      return <UserDetails id={id} role={TABLE_ROLE.user} title={DETAILS_TITLE.user} />;
    case DESIGNER:
      return <UserDetails id={id} role={TABLE_ROLE.designer} title={DETAILS_TITLE.designer} />;
    case PLAN:
      return <PlanDetails id={id} title={DETAILS_TITLE.plan} />;
    case ORDER:
      return <OrderDetails id={id} title={DETAILS_TITLE.order} />;
    case PRODUCT:
      return <ProductDetails id={id} title={DETAILS_TITLE.product} />;
    case SIZE:
      return <SizesDetails id={id} title={DETAILS_TITLE.size} />;
    case CATEGORY:
      return <CategoryDetails id={id} title={DETAILS_TITLE.category} />;
    case FONT:
      return <FontDetails id={id} title={DETAILS_TITLE.font} />;
    case FONT_CATEGORIES:
      return <FontCategoryDetails id={id} title={DETAILS_TITLE.font_category} />;
    case FONT_COMBOS:
      return <FontComboDetails id={id} title={DETAILS_TITLE.font_combo} />;
    case SVG_ICON:
      return <SVGDetails id={id} type={SVG_ICON_CATEGORIES} title={DETAILS_TITLE.svg_icon} />;
    case SVG_SHAPE:
      return <SVGDetails id={id} type={SVG_SHAPE_CATEGORIES} title={DETAILS_TITLE.svg_shape} />;
    case SVG_ICON_CATEGORIES:
      return <SVGCategoryDetails id={id} type={SVG_ICON_CATEGORIES} title={DETAILS_TITLE.svg_icon_category} />;
    case SVG_SHAPE_CATEGORIES:
      return <SVGCategoryDetails id={id} type={SVG_SHAPE_CATEGORIES} title={DETAILS_TITLE.svg_shape_category} />;
    case ICON:
      return <h1>Icons</h1>;
    case REPORT:
      return <h1>Reports</h1>;
    default:
      return null;
  }
};

export default DetailContent;
