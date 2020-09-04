import React from 'react';
import UserDetailsOrdersTable from './UserDetailsOrdersTable';
import UserDetailsDesignsTable from './UserDetailsDesignsTable';
import UserDetailsImagesTable from './UserDetailsImagesTable';
import UserDetailsLogosTable from './UserDetailsLogosTable';
import UserDetailsFontsTable from './UserDetailsFontsTable';
import UserDetailsSVGsTable from './UserDetailsSVGsTable';
import { fontsInfoType } from '../../../../../redux/modules/fonts/selectors';

type Props = {
  tab: string,
  userDesigns: any[] | [],
  userImages: any[] | [],
  userLogos: any[] | [],
  userFonts: fontsInfoType,
  userSVGs: any[] | [],
};

const UserDetailsTableContent: React.FC<Props> = ({
  tab,
  userDesigns,
  userImages,
  userLogos,
  userFonts,
  userSVGs,
}) => {
  switch (tab) {
    case 'orders':
      return <UserDetailsOrdersTable />;
    case 'designs':
      return <UserDetailsDesignsTable userDesigns={userDesigns} />;
    case 'images':
      return <UserDetailsImagesTable userImages={userImages} />;
    case 'logos':
      return <UserDetailsLogosTable userLogos={userLogos} />;
    case 'fonts':
      return <UserDetailsFontsTable userFonts={userFonts} />;
    case 'svgs':
      return <UserDetailsSVGsTable userSVGs={userSVGs} />;
    default:
      return null;
  }
};

export default UserDetailsTableContent;
