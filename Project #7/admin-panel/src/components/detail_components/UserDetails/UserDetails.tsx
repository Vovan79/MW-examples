import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { AppState } from '../../../redux/store';

import DetailHeader from '../../interface_components/DetailHeader';
import { USER_DETAILS } from '../../../constants/details.constants';
import { TABLE_ROLE } from '../../../constants/tables.constants';
import UserInfoDetails from './UserInfoDetails';
import UserAccountDetails from './UserAccountDetails';
import UserMediaDetails from './UserMediaDetails';
import UserTableDetails from './UserTableDetails';
import {
  getPersonEntityRequest,
  updatePersonEntityRequest,
  clearPersonEntityState,
} from '../../../redux/modules/persons/actions';

import {
  getFontCategoriesRequest,
  clearFontCategoriesDataState,
} from '../../../redux/modules/fontcategories/actions';
import {
  getDesignsByUserIdRequest,
  clearDesignsDataState,
} from '../../../redux/modules/designs/actions';
import {
  getImagesByUserIdRequest,
  clearImagesDataState,
} from '../../../redux/modules/images/actions';
import {
  getLogosByUserIdRequest,
  clearLogosDataState,
} from '../../../redux/modules/logos/actions';
import {
  getFontsByUserIdRequest,
  clearFontsDataState,
} from '../../../redux/modules/fonts/actions';
import {
  getSVGsByUserIdRequest,
  clearSVGsDataState,
} from '../../../redux/modules/svgs/actions';
import {
  getPlansRequest,
  clearPlansDataState,
} from '../../../redux/modules/plans/actions';
import { selectFontsInfo } from '../../../redux/modules/fonts/selectors';
import useStyles from './styles';

type Props = {
  id?: number,
  title: string,
  role: string,
};

const UserDetails: React.FC<Props> = ({ id, title, role }) => {
  const [data, setValues] = useState({
    firstname: '',
    lastname: '',
    jobtitle: '',
    businessname: '',
    website: '',
    email: '',
    role: '',
    phone: '',
    mobile: '',
    address: '',
    suburb: '',
    state: '',
    postcode: '',
  });
  const [userPlanData, setUserPlanData] = useState({ planId: '', planStarted: '' });
  const [socialMedia, setSocialMedia] = useState([
    {
      value: '',
      name: 'facebook',
      label: 'Facebook',
    },
    {
      value: '',
      name: 'instagram',
      label: 'Instagram',
    },
    {
      value: '',
      name: 'youtube',
      label: 'YouTube',
    },
    {
      value: '',
      name: 'linkedin',
      label: 'LinkedIn',
    },
  ]);
  const [plans, setPlans] = useState([{ name: '', size: '', price: 0 }]);

  const classes = useStyles();
  const dispatch = useDispatch();

  const errorMessages = useMemo(() => {
    const errors = [];

    if (data.firstname === '') {
      errors.push('firstname field should be filled');
    }

    if (data.lastname === '') {
      errors.push('lastname field should be filled');
    }

    if (data.email === '') {
      errors.push('email field should be filled');
    }

    return errors;
  }, [data]);

  const currentUser = useSelector((state: AppState) => state.userData.data);
  const userDesigns = useSelector((state: AppState) => state.designsData.designs);
  const userImages = useSelector((state: AppState) => state.imagesData.images);
  const userLogos = useSelector((state: AppState) => state.logosData.logos);
  const userFonts = useSelector(selectFontsInfo);
  const userSVGs = useSelector((state: AppState) => state.svgsData.svgs);
  const personEntityData = useSelector((state: AppState) => state.personsData.details);
  const plansData = useSelector((state: AppState) => state.plansData.plans);

  const { info, account, media } = USER_DETAILS.title;
  const infoTitle = (
    role === TABLE_ROLE.admin ? info.admin : (role === TABLE_ROLE.user ? info.user : info.designer)
  );

  const handleEntityChange = (event: any) => {
    setValues(Object.assign({}, data, { [event.target.name]: event.target.value }));
  };

  const handleUserPlanChange = (event: any) => {
    setUserPlanData(Object.assign({}, userPlanData, { planId: event.target.value }));
  };

  const handleSocialMediaChange = (event: any, index: number) => {
    const currentSocialMedia = socialMedia.slice();
    currentSocialMedia[index].value = event.target.value;
    setSocialMedia(currentSocialMedia);
  };

  useEffect(() => {
    dispatch(getPlansRequest());

    if (id) {
      dispatch(getFontCategoriesRequest());
      dispatch(getDesignsByUserIdRequest(id));
      dispatch(getImagesByUserIdRequest(id));
      dispatch(getLogosByUserIdRequest(id));
      dispatch(getFontsByUserIdRequest(id));
      dispatch(getSVGsByUserIdRequest(id));
      dispatch(getPersonEntityRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (personEntityData) {
      const {
        firstname,
        lastname,
        jobtitle,
        businessname,
        website,
        email,
        userRole,
        phone,
        mobile,
        address,
        suburb,
        state,
        postcode,
        socialmedia,
        planId,
        planStarted,
      } = personEntityData;

      setValues({
        firstname: firstname ? firstname : '',
        lastname: lastname ? lastname : '',
        jobtitle: jobtitle ? jobtitle : '',
        businessname: businessname ? businessname : '',
        website: website ? website : '',
        email: email ? email : '',
        role: userRole ? userRole.name : 'user',
        phone: phone ? phone : '',
        mobile: mobile ? mobile : '',
        address: address ? address : '',
        suburb: suburb ? suburb : '',
        state: state ? state : '',
        postcode: postcode ? postcode : '',
      });

      if (planId) {
        setUserPlanData({ planId: planId.toString(), planStarted });
      }

      if (socialmedia) {
        setSocialMedia(JSON.parse(socialmedia));
      }

      if (plansData) {
        setPlans(plansData);
      }
    }
  }, [personEntityData, plansData]);

  useEffect(() => () => {
    dispatch(clearPlansDataState());
    dispatch(clearPersonEntityState());
    dispatch(clearDesignsDataState());
    dispatch(clearImagesDataState());
    dispatch(clearLogosDataState());
    dispatch(clearFontsDataState());
    dispatch(clearSVGsDataState());
    dispatch(clearFontCategoriesDataState());
  }, [dispatch]);

  const updatePersonEntity = (): any => {
    if (errorMessages.length > 0) {
      return;
    }

    const payload = Object.assign({}, { id }, data,
      { planId: parseInt(userPlanData.planId, 10) }, { socialmedia: JSON.stringify(socialMedia) });
    dispatch(updatePersonEntityRequest(payload));
  };

  return (
    <div className={classes.root}>
      <DetailHeader
        userTable
        id={id}
        title={title}
        onUpdateEntity={updatePersonEntity}
        errorMessages={errorMessages}
      />
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Grid container className={classes.info}>
            <Grid item xs={7}>
              <UserInfoDetails
                data={data}
                title={infoTitle}
                onHandleEntityChange={handleEntityChange}
                isCurrentUser={Boolean(personEntityData && (currentUser.id === id))}
              />
            </Grid>
            <Grid item xs={5}>
              <Grid container className={classes.socials}>
                <Grid item xs={12}>
                  <UserAccountDetails
                    title={account}
                    plans={plans}
                    userPlanData={userPlanData}
                    onHandleUserPlanChange={handleUserPlanChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <UserMediaDetails
                    data={socialMedia}
                    title={media}
                    onHandleSocialMediaChange={handleSocialMediaChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <UserTableDetails
            userDesigns={userDesigns}
            userImages={userImages}
            userLogos={userLogos}
            userFonts={userFonts}
            userSVGs={userSVGs}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDetails;
