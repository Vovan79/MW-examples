import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import leftSidebar from './modules/leftSidebar/reducer';
import userData from './modules/userData/reducer';
import categoriesData from './modules/categories/reducer';
import productsData from './modules/products/reducer';
import personsData from './modules/persons/reducer';
import ordersData from './modules/orders/reducer';
import sizesData from './modules/sizes/reducer';
import fontsData from './modules/fonts/reducer';
import fontCategoriesData from './modules/fontcategories/reducer';
import fontCombosData from './modules/fontcombos/reducer';
import modeData from './modules/mode/reducer';
import plansData from './modules/plans/reducer';
import svgsData from './modules/svgs/reducer';
import svgCategoriesData from './modules/svgcategories/reducer';
import designsData from './modules/designs/reducer';
import imagesData from './modules/images/reducer';
import logosData from './modules/logos/reducer';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  leftSidebar,
  userData,
  categoriesData,
  productsData,
  personsData,
  ordersData,
  sizesData,
  fontsData,
  fontCategoriesData,
  fontCombosData,
  plansData,
  modeData,
  svgsData,
  svgCategoriesData,
  designsData,
  imagesData,
  logosData,
});
