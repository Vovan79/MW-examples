export const ADD_NEW_GROUP = 'ADD NEW GROUP';

export const USER_DETAILS = {
  title: {
    info: {
      admin: 'Admin Details',
      user: 'User Details',
      designer: 'Designer Details',
    },
    account: 'Account detailes',
    media: 'Social Media Accounts',
  },
};

export const PRODUCT_DETAILS = {
  title: {
    info: 'Product details',
    size: 'Sizes',
    template: 'Template groups',
  },
};

export const DEFAULT_PRODUCT_GROUP = {
  id: 1,
  name: 'Default',
  status: 'none',
};

export const SIZE_DETAILS = {
  title: 'Size details',
};

export const SIZE_SETUP = {
  title: 'Setup',
};

export const CATEGORY_DETAILS = {
  title: 'Category details',
};

export const PLAN_DETAILS = {
  title: 'Plan details',
};

export const FONT_DETAILS = {
  title: 'Font details',
};

export const FONT_CATEGORY_DETAILS = {
  title: 'Font category details',
};

export const SVG_ICON_DETAILS = {
  title: 'SVG Icon details',
};

export const SVG_SHAPE_DETAILS = {
  title: 'SVG Shape details',
};

export const SVG_ICON_CATEGORY_DETAILS = {
  title: 'SVG Icon category details',
};

export const SVG_SHAPE_CATEGORY_DETAILS = {
  title: 'SVG Shape category details',
};

export const FONT_COMBO_DETAILS = {
  title: 'Font combination details',
};

export const FONT_COMBO_SETTINGS_COLUMNS: any[] = [
  {
    name: 'style',
    label: 'Style',
  },
  {
    name: 'fontId',
    label: 'Font',
  },
  {
    name: 'size',
    label: 'Size',
  },
  {
    name: 'lineHeight',
    label: 'Line height',
  },
  {
    name: 'letterSpacing',
    label: 'Spacing',
  },
];

export const FONT_COMBO_SETTINGS_DEFAULT: any[] = [
  {
    name: 'h1',
    fontId: 2,
    size: 22,
    lineHeight: 1.3,
    letterSpacing: 10,
  },
  {
    name: 'h2',
    fontId: 2,
    size: 18,
    lineHeight: 1.3,
    letterSpacing: 10,
  },
  {
    name: 'h3',
    fontId: 2,
    size: 14,
    lineHeight: 1.3,
    letterSpacing: 10,
  },
  {
    name: 'subTitle',
    fontId: 2,
    size: 10,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  {
    name: 'body1',
    fontId: 2,
    size: 9,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  {
    name: 'captionText',
    fontId: 2,
    size: 7,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
];

export const FONT_COMBO_SETTINGS_SIZES: number[] = [7, 9, 10, 14, 18, 22, 26, 32, 48];
export const FONT_COMBO_SETTINGS_HEIGHT: number[] = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
  2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3];
export const FONT_COMBO_SETTINGS_SPACING: number[] = [
  -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

export const SELECT_ARR = {
  states: [
    {
      label: 'ACT',
      value: 'act',
    },
    {
      label: 'NSW',
      value: 'nsw',
    },
    {
      label: 'NT',
      value: 'nt',
    },
    {
      label: 'QLD',
      value: 'qld',
    },
    {
      label: 'SA',
      value: 'sa',
    },
    {
      label: 'TAS',
      value: 'tas',
    },
    {
      label: 'VIC',
      value: 'vic',
    },
    {
      label: 'WA',
      value: 'wa',
    },
  ],
  socials: [
    {
      label: 'Facebook',
      value: 'facebook',
    },
    {
      label: 'Instagram',
      value: 'instagram',
    },
    {
      label: 'YouTube',
      value: 'youtube',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin',
    },
  ],
  categories: [
    {
      label: 'Card',
      value: 'card',
    },
    {
      label: 'Postcard',
      value: 'postcard',
    },
    {
      label: 'Poster',
      value: 'poster',
    },
  ],
};

export const CHECKBOX_ARR = {
  sizes: [
    {
      value: 'a2l',
      label: 'A2 Landscape',
    },
    {
      value: 'a2p',
      label: 'A2 Portrait',
    },
    {
      value: 'a3l',
      label: 'A3 Landscape',
    },
    {
      value: 'a3p',
      label: 'A3 Portrait',
    },
    {
      value: 'a4l',
      label: 'A4 Landscape',
    },
    {
      value: 'a4p',
      label: 'A4 Portrait',
    },
    {
      value: 'a5l',
      label: 'A5 Landscape',
    },
    {
      value: 'a5p',
      label: 'A5 Portrait',
    },
    {
      value: 'a6l',
      label: 'A6 Landscape',
    },
    {
      value: 'a6p',
      label: 'A6 Portrait',
    },
    {
      value: 'a7l',
      label: 'A7 Landscape',
    },
    {
      value: 'a7p',
      label: 'A7 Portrait',
    },
  ],
};

export const NAV_ARR: string[] = [
  'orders',
  'designs',
  'images',
  'logos',
  'stock',
  'fonts',
  'svgs',
];

export const DETAILS_ORDERS_COLUMNS: any[] = [
  {
    name: 'designId',
    label: 'DESIGN ID',
  },
  {
    name: 'printId',
    label: 'PRINT ID',
  },
  {
    name: 'title',
    label: 'Title',
  },
  {
    name: 'product',
    label: 'Product',
  },
  {
    name: 'gb',
    label: 'GB',
  },
  {
    name: 'design',
    label: 'Design $',
  },
  {
    name: 'print',
    label: 'Print $',
  },
  {
    name: 'stock',
    label: 'Stock',
  },
  {
    name: 'status',
    label: 'Status',
  },
  {
    name: 'preview',
    label: 'Preview',
  },
  {
    name: 'actions',
    label: 'Actions',
    unsort: true,
  },
];

export const DETAILS_DESIGNS_COLUMNS: any[] = [
  {
    name: 'designId',
    label: 'DESIGN ID',
  },
  {
    name: 'title',
    label: 'Title',
  },
  {
    name: 'product',
    label: 'Product',
  },
  {
    name: 'mb',
    label: 'MB',
  },
  {
    name: 'design',
    label: 'Design $',
  },
  {
    name: 'stock',
    label: 'Stock $',
  },
  {
    name: 'preview',
    label: 'Preview',
    unsort: true,
  },
  {
    name: 'actions',
    label: 'Actions',
    unsort: true,
  },
];

export const DETAILS_IMAGES_COLUMNS: any[] = [
  {
    name: 'imageId',
    label: 'IMAGE ID',
  },
  {
    name: 'size',
    label: 'Size',
  },
  {
    name: 'mb',
    label: 'MB',
  },
  {
    name: 'preview',
    label: 'Preview',
    unsort: true,
  },
  {
    name: 'actions',
    label: 'Actions',
    unsort: true,
  },
];

export const DETAILS_LOGOS_COLUMNS: any[] = [
  {
    name: 'logoId',
    label: 'LOGO ID',
  },
  {
    name: 'size',
    label: 'Size',
  },
  {
    name: 'kb',
    label: 'kB',
  },
  {
    name: 'preview',
    label: 'Preview',
    unsort: true,
  },
  {
    name: 'actions',
    label: 'Actions',
    unsort: true,
  },
];

export const DETAILS_FONTS_COLUMNS: any[] = [
  {
    name: 'id',
    label: 'ID',
  },
  {
    name: 'name',
    label: 'Font name',
  },
  {
    name: 'category',
    label: 'Category',
  },
  {
    name: 'sample',
    label: 'Sample',
    unsort: true,
  },
  {
    name: 'actions',
    label: 'Actions',
    unsort: true,
  },
];

export const DETAILS_SVGS_COLUMNS: any[] = [
  {
    name: 'id',
    label: 'ID',
  },
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'order',
    label: 'Order',
  },
  {
    name: 'cost',
    label: 'Cost',
  },
  {
    name: 'sample',
    label: 'Sample',
    unsort: true,
  },
  {
    name: 'actions',
    label: 'Actions',
    unsort: true,
  },
];

export const MEDIA_TYPES = ['font/otf', 'font/ttf', 'font/woff', 'font/woff2'];
export const MEDIA_EXT = ['otf', 'ttf', 'woff', 'woff2'];
export const SVG_EXT = ['svg'];

export const PLAN_SIZES_ARR = ['1', '10', '50', '250', '250+'];
