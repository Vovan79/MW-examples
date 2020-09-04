import { ReactComponent as Dashboard } from '../../../assets/menu-button-icons/dashboard-24px.svg';
import { ReactComponent as Users } from '../../../assets/menu-button-icons/supervisor_account-24px.svg';
import { ReactComponent as Orders } from '../../../assets/menu-button-icons/shopping_cart-24px.svg';
import { ReactComponent as Products } from '../../../assets/menu-button-icons/chrome_reader_mode-24px.svg';
import { ReactComponent as Sizes } from '../../../assets/menu-button-icons/photo_size_select_small-24px.svg';
import { ReactComponent as Category } from '../../../assets/menu-button-icons/list-24px.svg';
import { ReactComponent as Fonts } from '../../../assets/menu-button-icons/text_format-24px.svg';
import { ReactComponent as Plans } from '../../../assets/menu-button-icons/outline-work_outline-24px.svg';
import { ReactComponent as SVGs } from '../../../assets/menu-button-icons/extension-24px.svg';
import { ReactComponent as Icons } from '../../../assets/menu-button-icons/outline-stars-24px.svg';
import { ReactComponent as Reports } from '../../../assets/menu-button-icons/insert_chart-24px.svg';

const menuItems = [
  {
    label: 'Dashboard',
    icon: Dashboard,
  },
  {
    label: 'Admins',
    icon: Users,
  },
  {
    label: 'Users',
    icon: Users,
  },
  {
    label: 'Designers',
    icon: Users,
  },
  {
    label: 'Plans',
    icon: Plans,
  },
  {
    label: 'Orders',
    icon: Orders,
  },
  {
    label: 'Products',
    icon: Products,
  },
  {
    label: 'Sizes',
    icon: Sizes,
  },
  {
    label: 'Category',
    icon: Category,
  },
  {
    label: 'Fonts',
    icon: Fonts,
  },
  {
    label: 'SVGs',
    icon: SVGs,
  },
  {
    label: 'Icons',
    icon: Icons,
  },
  {
    label: 'Reports',
    icon: Reports,
  },
] as const;

export default menuItems;
