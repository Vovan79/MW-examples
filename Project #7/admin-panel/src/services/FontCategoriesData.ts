import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { FontCategoryData } from '../redux/modules/fontcategories/types';

class FontCategoriesDataService {
  private apiUrl = process.env.REACT_APP_ASSETS_BACKEND_URL;

  private getAuthToken = (): string | null => localStorage.getItem(LOCAL_STORAGE_ASSETS_TOKEN);

  private get getAuthHeaderData(): { 'x-auth-token': string } | null {
    const xAuthToken = this.getAuthToken();

    if (xAuthToken === null) {
      return null;
    }

    return { 'x-auth-token': xAuthToken };
  }

  private get getHeaderData(): AxiosRequestConfig['headers'] {
    return {
      'Content-Type': 'application/json',
      ...this.getAuthHeaderData,
    };
  }

  private get httpClient() {
    return axios.create({ baseURL: this.apiUrl, headers: this.getHeaderData });
  }

  public getFontCategoriesData = async (): Promise<FontCategoryData[]> => {
    const result = await this.httpClient.get('/font-categories');
    return result.data;
  };

  public getFontCategoryEntityData = async (fontCategoryId: FontCategoryData['id']): Promise<FontCategoryData> => {
    const result = await this.httpClient.get(`/font-categories/${fontCategoryId}`);
    return result.data;
  };

  public addFontCategoryEntityData = async (fontCategoryData: FontCategoryData): Promise<FontCategoryData> => {
    const result = await this.httpClient.post('/font-categories', fontCategoryData);
    return result.data;
  };

  public updateFontCategoryEntityData = async (fontCategoryData: FontCategoryData): Promise<FontCategoryData> => {
    const { id } = fontCategoryData;
    const result = await this.httpClient.put(`/font-categories/${id}`, fontCategoryData);
    return result.data;
  };

  public deleteFontCategoryEntityData = async (fontCategoryId: FontCategoryData['id']): Promise<FontCategoryData> => {
    const result = await this.httpClient.delete(`/font-categories/${fontCategoryId}`);
    return result.data;
  };
}

export default new FontCategoriesDataService();
