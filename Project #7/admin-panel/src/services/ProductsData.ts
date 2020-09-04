import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { ProductData } from '../redux/modules/products/types';

class ProductsDataService {
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

  public getProductsData = async (): Promise<ProductData[]> => {
    const result = await this.httpClient.get('/products');
    return result.data;
  };

  public getProductEntityData = async (productId: ProductData['id']): Promise<ProductData> => {
    const result = await this.httpClient.get(`/products/${productId}`);
    return result.data;
  };

  public addProductEntityData = async (productData: ProductData): Promise<ProductData> => {
    const result = await this.httpClient.post('/products', productData);
    return result.data;
  };

  public updateProductEntityData = async (productData: ProductData): Promise<ProductData> => {
    const { id } = productData;
    const result = await this.httpClient.put(`/products/${id}`, productData);
    return result.data;
  };

  public deleteProductEntityData = async (productId: ProductData['id']): Promise<ProductData> => {
    const result = await this.httpClient.delete(`/products/${productId}`);
    return result.data;
  };
}

export default new ProductsDataService();
