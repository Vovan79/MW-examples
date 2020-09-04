import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { SVGCategoryData } from '../redux/modules/svgcategories/types';

class SVGCategoriesDataService {
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

  public getSVGCategoriesData = async (svgType: string): Promise<SVGCategoryData[]> => {
    const result = await this.httpClient.get('/svg-categories', { params: { type: svgType } });
    return result.data;
  };

  public getSVGCategoryEntityData = async (svgCategoryId: SVGCategoryData['id']): Promise<SVGCategoryData> => {
    const result = await this.httpClient.get(`/svg-categories/${svgCategoryId}`);
    return result.data;
  };

  public addSVGCategoryEntityData = async (svgCategoryData: SVGCategoryData): Promise<SVGCategoryData> => {
    const result = await this.httpClient.post('/svg-categories', svgCategoryData);
    return result.data;
  };

  public updateSVGCategoryEntityData = async (svgCategoryData: SVGCategoryData): Promise<SVGCategoryData> => {
    const { id } = svgCategoryData;
    const result = await this.httpClient.put(`/svg-categories/${id}`, svgCategoryData);
    return result.data;
  };

  public deleteSVGCategoryEntityData = async (svgCategoryId: SVGCategoryData['id']): Promise<SVGCategoryData> => {
    const result = await this.httpClient.delete(`/svg-categories/${svgCategoryId}`);
    return result.data;
  };
}

export default new SVGCategoriesDataService();
