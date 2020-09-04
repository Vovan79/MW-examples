import { all } from 'redux-saga/effects';
import userDataSaga from './modules/userData/saga';
import personsDataSaga from './modules/persons/saga';
import sizesDataSaga from './modules/sizes/saga';
import fontsDataSaga from './modules/fonts/saga';
import fontCategoriesDataSaga from './modules/fontcategories/saga';
import fontCombosDataSaga from './modules/fontcombos/saga';
import productsDataSaga from './modules/products/saga';
import categoriesDataSaga from './modules/categories/saga';
import plansDataSaga from './modules/plans/saga';
import svgsDataSaga from './modules/svgs/saga';
import svgCategoriesDataSaga from './modules/svgcategories/saga';
import designsDataSaga from './modules/designs/saga';
import imagesDataSaga from './modules/images/saga';
import logosDataSaga from './modules/logos/saga';

export default function* rootSaga() {
  yield all([
    userDataSaga,
    personsDataSaga,
    sizesDataSaga,
    fontsDataSaga,
    fontCategoriesDataSaga,
    fontCombosDataSaga,
    productsDataSaga,
    categoriesDataSaga,
    plansDataSaga,
    svgsDataSaga,
    svgCategoriesDataSaga,
    designsDataSaga,
    imagesDataSaga,
    logosDataSaga,
  ]);
}
