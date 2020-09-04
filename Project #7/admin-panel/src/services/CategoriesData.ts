import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { CategoryData } from '../redux/modules/categories/types';

class CategoriesDataService {
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

  public getCategoriesData = async (): Promise<CategoryData[]> => {
    const result = await this.httpClient.get('/categories');
    return result.data;
  };

  public getCategoryEntityData = async (categoryId: CategoryData['id']): Promise<CategoryData> => {
    const result = await this.httpClient.get(`/categories/${categoryId}`);
    return result.data;
  };

  public addCategoryEntityData = async (categoryData: CategoryData): Promise<CategoryData> => {
    const result = await this.httpClient.post('/categories', categoryData);
    return result.data;
  };

  public updateCategoryEntityData = async (categoryData: CategoryData): Promise<CategoryData> => {
    const { id } = categoryData;
    const result = await this.httpClient.put(`/categories/${id}`, categoryData);
    return result.data;
  };

  public deleteCategoryEntityData = async (categoryId: CategoryData['id']): Promise<CategoryData> => {
    const result = await this.httpClient.delete(`/categories/${categoryId}`);
    return result.data;
  };
}

export default new CategoriesDataService();
