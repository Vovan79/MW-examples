import { UserDesign, Template } from '../../../services/UserData';
import { PageDetails } from '../pages/types';

export type AssetType = 'background' | 'image' | 'shape' | 'line' | 'text';
export type ShapeType = 'circle' | 'rect' | 'star' | 'path' | 'polygon' | 'ellipse';

export type BaseShapeConfig<T extends ShapeType> = {
  type: T,
  fill?: string,
  stroke: string,
  strokeWidth: number,
  strokeEnabled: boolean,
  fillEnabled: boolean,
  fillPatternImage?: HTMLImageElement;
  fillPatternImageSrc?: string | undefined;
  fillPatternScaleX?: number,
  fillPatternScaleY?: number,
  fillPatternX?: number,
  fillPatternY?: number,
  fillPatternRepeat?: string,
};

export type CircleConfig = BaseShapeConfig<'circle'> & {
  radius: number,
};

export type EllipseConfig = BaseShapeConfig<'ellipse'> & {
  radiusX: number,
  radiusY: number,
};

export type StarConfig = BaseShapeConfig<'star'> & {
  numPoints: number,
  innerRadius: number,
  outerRadius: number,
};

export type PolygonConfig = BaseShapeConfig<'polygon'> & {
  radius: number,
  sides: number,
};

export type RectConfig = BaseShapeConfig<'rect'> & {};

export type ShapeConfig = CircleConfig | EllipseConfig | StarConfig | PolygonConfig | RectConfig;

export type ImageConfig = {
  imageElement: HTMLImageElement,
  imageElementSrc: string,
  // crop?: IRect | null,
};

export type BackgroundConfig = {
  imageElement: HTMLImageElement,
  imageElementSrc: string,
};

export type BaseAsset<T extends AssetType> = {
  id: string,
  zIndex: number,
  opacity?: number,
  x: number,
  y: number,
  type: T,
  width?: number,
  height?: number,
  rotation?: number,
  pageId: PageDetails['id'],
  scaleX?: number,
  scaleY?: number,
};

export type ImageAsset = BaseAsset<'image'> & ImageConfig;
export type BackgroundAsset = BaseAsset<'background'> & BackgroundConfig;
export type ShapeAsset = BaseAsset<'shape'> & { shapeProps: ShapeConfig };

export type Asset = ImageAsset | BackgroundAsset | ShapeAsset;

export type BaseGrabbedAsset<T extends AssetType | 'template' | 'design', Z> = {
  type: T,
  content: Z,
};

export type GrabbedAsset = BaseGrabbedAsset<'image', string>
| BaseGrabbedAsset<'background', string>
| BaseGrabbedAsset<'shape', ShapeConfig>
| BaseGrabbedAsset<'template', Template['id']>
| BaseGrabbedAsset<'design', UserDesign['id']>
| null;

export interface AssetsState {
  list: Array<Asset>,
  grabbedAsset: GrabbedAsset | null,
  activeAssetId: Asset['id'] | null,
}

export const SET_GRABBED_ASSET = 'SET_GRABBED_ASSET';
export const SET_ACTIVE_ASSET_ID = 'SET_ACTIVE_ASSET_ID';
export const ADD_ASSET = 'ADD_ASSET';
export const UPDATE_ASSET = 'UPDATE_ASSET';
export const UPDATE_ASSET_WITHOUT_STATE_SAVING = 'UPDATE_ASSET_WITHOUT_STATE_SAVING';
export const REMOVE_ASSET = 'REMOVE_ASSET';
export const REMOVE_ASSET_BY_PAGE_ID = 'REMOVE_ASSET_BY_PAGE_ID';
export const COPY_ASSET = 'COPY_ASSET';
export const COPY_PAGE_ASSETS = 'COPY_PAGE_ASSETS';
export const REPLACE_ASSETS = 'REPLACE_ASSETS';
export const REPLACE_PAGE_ASSETS = 'REPLACE_PAGE_ASSETS';
export const APPLY_ASSETS_FROM_SAVED_DESIGN = 'APPLY_ASSETS_FROM_SAVED_DESIGN';
export const APPLY_ASSETS_FROM_TEMPLATE = 'APPLY_ASSETS_FROM_TEMPLATE';
export const SET_MAX_ASSET_Z_INDEX = 'SET_MAX_ASSET_Z_INDEX';
export const SET_MIN_ASSET_Z_INDEX = 'SET_MIN_ASSET_Z_INDEX';
export const INCREMENT_ASSET_Z_INDEX = 'INCREMENT_ASSET_Z_INDEX';
export const DECREMENT_ASSET_Z_INDEX = 'DECREMENT_ASSET_Z_INDEX';
