export type PageDetails = {
  id: string,
  previewImageSrc: string,
  backgroundColor: string,
};
export interface PagesState {
  list: PageDetails[],
  activePageId: PageDetails['id'],
}

export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
export const CHANGE_PAGE_DETAILS_WITHOUT_STATE_SAVING = 'CHANGE_PAGE_DETAILS_WITHOUT_STATE_SAVING';
export const CHANGE_PAGE_DETAILS = 'CHANGE_PAGE_DETAILS';
export const UPDATE_PAGE_PREVIEW = 'UPDATE_PAGE_PREVIEW';
export const ADD_PAGE = 'ADD_PAGE';
export const REPLACE_PAGES = 'REPLACE_PAGES';
export const COPY_PAGE = 'COPY_PAGE';
export const REMOVE_PAGE = 'REMOVE_PAGE';
export const REORDER_PAGES = 'REORDER_PAGES';
