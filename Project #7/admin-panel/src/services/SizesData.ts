import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { SizeData } from '../redux/modules/sizes/types';

class SizesDataService {
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

  public getSizesData = async (): Promise<SizeData[]> => {
    const result = await this.httpClient.get('/product-sizes');
    return result.data;
  };

  public getSizeEntityData = async (sizeId: SizeData['id']): Promise<SizeData> => {
    const result = await this.httpClient.get(`/product-sizes/${sizeId}`);
    return result.data;
  };

  public addSizeEntityData = async (sizeData: SizeData): Promise<SizeData> => {
    const result = await this.httpClient.post('/product-sizes', sizeData);
    return result.data;
  };

  public updateSizeEntityData = async (sizeData: SizeData): Promise<SizeData> => {
    const { id } = sizeData;
    const result = await this.httpClient.put(`/product-sizes/${id}`, sizeData);
    return result.data;
  };

  public deleteSizeEntityData = async (sizeId: SizeData['id']): Promise<SizeData> => {
    const result = await this.httpClient.delete(`/product-sizes/${sizeId}`);
    return result.data;
  };
}

export default new SizesDataService();
