import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { AppState } from '../../../redux/store';

import DetailHeader from '../../interface_components/DetailHeader';
import ProductInfoDetails from './ProductInfoDetails';
import ProductSizeDetails from './ProductSizeDetails';
import ProductTemplateDetails from './ProductTemplateDetails';
import { PRODUCT_DETAILS, DEFAULT_PRODUCT_GROUP } from '../../../constants/details.constants';
import {
  getProductEntityRequest,
  clearProductEntityState,
  createProductEntityRequest,
  updateProductEntityRequest,
} from '../../../redux/modules/products/actions';
import { getSizesRequest, clearSizesDataState } from '../../../redux/modules/sizes/actions';
import { getCategoriesRequest, clearCategoriesDataState } from '../../../redux/modules/categories/actions';
import { SizeData } from '../../../redux/modules/sizes/types';
import useStyles from './styles';

type Props = {
  id?: number,
  title: string,
};

type CurrentSize = {
  id: number,
  name: string,
  checked: boolean,
};

const ProductDetails: React.FC<Props> = ({ id, title }) => {
  const [data, setValues] = useState({ name: '', categoryId: '', order: '' });
  const [sizes, setSizes] = useState();
  const [categories, setCategories] = useState();
  const [templateGroups, setTemplateGroups] = useState([{ id: 1, name: 'Default', status: 'new' }]);

  const classes = useStyles();
  const dispatch = useDispatch();

  const productEntityData = useSelector((state: AppState) => state.productsData.details);
  const productSizesData = useSelector((state: AppState) => state.sizesData.sizes);
  const categoriesData = useSelector((state: AppState) => state.categoriesData.categories);

  const handleEntityChange = (event: any) => {
    if (event.target.name === 'order' && Number.isNaN(Number(event.target.value))) {
      return;
    }

    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };

  const errorMessages = useMemo(() => {
    const errors = [];

    if (data.name === '') {
      errors.push('name field should be filled');
    }

    if (data.order === '') {
      errors.push('order field should be filled');
    }

    if (!sizes
      || sizes.filter((size: { id: number, name: string, checked: boolean }) => size.checked).length === 0
    ) {
      errors.push('there should be at least one size');
    }

    if (!templateGroups
      || templateGroups.map((item: { id: number, name: string, status: string }) => item.name).includes('')
    ) {
      errors.push('name of template group cannot be empty');
    }

    return errors;
  }, [data, sizes, templateGroups]);

  const handleSizesChange = (index: number) => {
    const currentSizes = sizes.slice();
    currentSizes[index].checked = !currentSizes[index].checked;
    setSizes(currentSizes);
  };

  const handleTemplateGroupChange = (event: any, index: number) => {
    const currentGroups = templateGroups.slice();

    currentGroups[index].name = event.target.value;

    if (currentGroups[index].status !== 'new') {
      currentGroups[index].status = 'update';
    }

    setTemplateGroups(currentGroups);
  };

  useEffect(() => {
    if (id) {
      dispatch(getProductEntityRequest(id));
    } else {
      setTemplateGroups([DEFAULT_PRODUCT_GROUP]);
    }

    dispatch(getCategoriesRequest());
    dispatch(getSizesRequest());
  }, [dispatch, id]);

  useEffect(() => {
    if (productEntityData) {
      const { name, categoryId, order } = productEntityData;
      setValues({ name, categoryId: categoryId.toString(), order: order.toString() });

      if (productEntityData && productEntityData.templateGroups.length) {
        const defaultGroup = productEntityData.templateGroups.filter((item: any) => item.name === 'Default');
        const otherGroups = productEntityData.templateGroups.filter((item: any) => item.name !== 'Default');
        const sortedGroups = [...defaultGroup, ...otherGroups];
        const groups = sortedGroups.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            status: 'none',
          };
        });
        setTemplateGroups(groups);
        // setUpdateTemplateGroups(productEntityData.templateGroups);
      }
    }

    if (productSizesData) {
      const currentSizes = productSizesData.map(
        (item: SizeData) => Object.assign({ id: item.id, name: item.name, checked: false }),
      );

      if (productEntityData && productEntityData.productSizes.length) {
        const groupSizes = currentSizes.map((item: SizeData) => {
          if (productEntityData.productSizes.find((productSize: any) => productSize.id === item.id)) {
            return Object.assign({}, item, { checked: true });
          }

          return item;
        });

        setSizes(groupSizes);
      } else {
        setSizes(currentSizes);
      }
    }

    if (categoriesData) {
      setCategories(categoriesData);
    }
  }, [productEntityData, productSizesData, categoriesData]);

  useEffect(() => () => {
    dispatch(clearProductEntityState());
    dispatch(clearSizesDataState());
    dispatch(clearCategoriesDataState());
  }, [dispatch]);

  const addNewProductEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const currentSizes = sizes.filter((item: CurrentSize) => item.checked)
      .map((item: CurrentSize) => Object.assign({ id: item.id }));

    const payload = {
      name: data.name,
      categoryId: parseInt(data.categoryId, 10),
      order: parseInt(data.order, 10),
      productSizes: currentSizes,
      templateGroups,
    };
    dispatch(createProductEntityRequest(payload));
  };

  const updateProductEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const currentSizes = sizes.filter((item: CurrentSize) => item.checked)
      .map((item: CurrentSize) => Object.assign({ id: item.id }));

    const payload = {
      id,
      name: data.name,
      categoryId: parseInt(data.categoryId, 10),
      order: parseInt(data.order, 10),
      productSizes: currentSizes,
      templateGroups,
    };
    dispatch(updateProductEntityRequest(payload));
  };

  const addNewTemplateGroup = () => {
    const currentGroups = templateGroups.slice();
    const groups = currentGroups.concat({
      id: 1,
      name: 'New group',
      status: 'new',
    });
    setTemplateGroups(groups);
  };

  const deleteTemplateGroup = (index: number) => {
    const currentGroups = templateGroups.slice();

    if (id) {
      currentGroups[index].status = 'delete';
    } else {
      currentGroups.splice(index, 1);
    }

    setTemplateGroups(currentGroups);
  };

  return (
    <div className={classes.root}>
      <DetailHeader
        id={id}
        title={title}
        onUpdateEntity={updateProductEntity}
        onAddNewEntity={addNewProductEntity}
        errorMessages={errorMessages}
      />
      <Grid container className={classes.container}>
        <Grid item xs={4}>
          <ProductInfoDetails
            data={data}
            categories={categories}
            title={PRODUCT_DETAILS.title.info}
            onHandleEntityChange={handleEntityChange}
          />
        </Grid>
        <Grid item xs={3}>
          <ProductSizeDetails
            data={sizes}
            title={PRODUCT_DETAILS.title.size}
            onHandleSizesChange={handleSizesChange}
          />
        </Grid>
        <Grid item xs={5}>
          <ProductTemplateDetails
            title={PRODUCT_DETAILS.title.template}
            data={templateGroups}
            addNewTemplateGroup={addNewTemplateGroup}
            deleteTemplateGroup={deleteTemplateGroup}
            onHandleTemplateGroupChange={handleTemplateGroupChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
