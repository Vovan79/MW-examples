export const DEFAULT_PROJECT_TITLE = 'Untitled document';
export const MAX_PROJECT_TITLE_LENGTH = 42;
export const DEFAULT_BACKGROUND_COLOR = '#ffffff';

export const MAGIC_ZOOM_RATIO_FACTOR = 3.7795275590551185;

// some printing constant in mm
export const BLEED_MARGIN = 3;

export const BORDER_DROP_OFFSET_OUTER = 10;
export const BORDER_DROP_OFFSET_INNER = -10;

export const zoomValues = ['Fit', '10%', '25%', '50%', '75%', '100%', '125%', '150%', '175%', '200%', '300%'] as const;

export const defaultRect = {
  x: 0, y: 0, width: 0, height: 0,
};

export const GUIDELINE_OFFSET = 5;

export const OFFSET_FOR_COPY_ASSET = 15;

export const DEFAULT_ANCHOR_SIZE = 10;

export const DEFAULT_POSITION_X = 50;
export const DEFAULT_POSITION_Y = 50;
export const DEFAULT_IMAGE_WIDTH = 250;
export const DEFAULT_SHAPE_WIDTH = 100;
export const DEFAULT_SHAPE_HEIGHT = 100;

// 1pt = 0,352777mm
export const HORIZONTAL_LINE_DISTANCE_MM = 12 * 0.352777;

export const DEFAULT_SLIDERS_DEBOUNCE_DELAY = 20;
export const DEFAULT_GET_PREVIEW_DEBOUNCE_DELAY = 2000;

// Local Storage Items
export const LOCAL_STORAGE_ASSETS_TOKEN = 'pt_assets_token';
export const LOCAL_STORAGE_ASSETS_TOKEN_EXPIRES_AT = 'pt_assets_token_expires_at';
export const LOCAL_STORAGE_ASSETS_USER_ROLE = 'pt_assets_token_user_role';
export const LOCAL_STORAGE_ASSETS_USER_ID = 'pt_assets_token_user_id';
