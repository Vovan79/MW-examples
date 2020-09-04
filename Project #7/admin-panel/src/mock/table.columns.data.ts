const COMBOS_DATA: any = [
  {
    id: 1,
    comboname: 'Combo1',
    family: 'Sans Serif',
    theme: '',
  },
  {
    id: 2,
    comboname: 'Combo2',
    family: 'Serif',
    theme: 'Theme_one',
  },
  {
    id: 3,
    comboname: 'Combo3',
    family: 'Arial',
    theme: 'Theme_one',
  },
  {
    id: 4,
    comboname: 'Combo4',
    family: 'Serif',
    theme: '',
  },
  {
    id: 5,
    comboname: 'Combo5',
    family: 'Sans Serif',
    theme: 'Theme_one',
  },
  {
    id: 6,
    comboname: 'Combo6',
    family: 'Serif',
    theme: '',
  },
  {
    id: 7,
    comboname: 'Combo7',
    family: 'Arial',
    theme: 'Theme_one',
  },
  {
    id: 8,
    comboname: 'Combo8',
    family: 'Arial',
    theme: 'Theme_one',
  },
  {
    id: 9,
    comboname: 'Combo9',
    family: 'Sans Serif',
    theme: '',
  },
  {
    id: 10,
    comboname: 'Combo10',
    family: 'Arial',
    theme: '',
  },
  {
    id: 11,
    comboname: 'Combo11',
    family: 'Arial',
    theme: 'Theme_one',
  },
  {
    id: 12,
    comboname: 'Combo12',
    family: 'Serif',
    theme: '',
  },
  {
    id: 13,
    comboname: 'Combo13',
    family: 'Serif',
    theme: '',
  },
  {
    id: 14,
    comboname: 'Combo14',
    family: 'Serif',
    theme: 'Theme_one',
  },
];

const FONTS_DATA: any = [
  {
    id: 1,
    name: 'Poppins',
    category: 'Sans Serif',
  },
  {
    id: 2,
    name: 'Lara',
    category: 'Serif',
  },
];

const FONT_CATEGORIES_DATA: any = [
  {
    id: 1,
    categoryname: 'Sans Serif',
    order: 1,
  },
  {
    id: 2,
    categoryname: 'Serif',
    order: 2,
  },
];

const FONT_COMBOS_DATA: any = [
  {
    id: 1,
    comboname: 'Rounded',
    order: 1,
  },
  {
    id: 2,
    comboname: 'Elegant',
    order: 2,
  },
];

const ORDERS_DATA: any = [
  {
    id: 1,
    ordered: null,
    username: 'person1',
    product: 'Postcard',
    design: 5,
    print: 3,
    stock: null,
    status: null,
    total: null,
  },
  {
    id: 2,
    ordered: null,
    username: 'person2',
    product: 'Poster',
    design: 7,
    print: 4,
    stock: null,
    status: null,
    total: null,
  },
];

const USERS_DATA: any = [
  {
    id: 1,
    created: '',
    username: 'person1',
    businessname: '',
    designs: 5,
    orders: 3,
    plan: null,
    spaceused: '10 GB',
    revenue: null,
    actions: null,
  },
  {
    id: 2,
    created: '',
    username: 'person2',
    businessname: '',
    designs: 7,
    orders: 4,
    plan: null,
    spaceused: null,
    revenue: null,
  },
];

export {
  COMBOS_DATA,
  FONTS_DATA,
  FONT_CATEGORIES_DATA,
  FONT_COMBOS_DATA,
  ORDERS_DATA,
  USERS_DATA,
};
