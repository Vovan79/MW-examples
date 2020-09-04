import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { ImageData } from '../redux/modules/images/types';
import { PersonData } from '../redux/modules/persons/types';

class ImagesDataService {
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

  public getImagesData = async (): Promise<ImageData[]> => {
    const result = await this.httpClient.get('/images');
    return result.data;
  };

  public getImagesByUserIdData = async (userId: PersonData['id']): Promise<ImageData[]> => {
    const result = await this.httpClient.get(`users/${userId}/images`);
    return result.data;
  };

  public getImageEntityData = async (imageId: ImageData['id']): Promise<ImageData> => {
    const result = await this.httpClient.get(`/images/${imageId}`);
    return result.data;
  };

  public addImageEntityData = async (formData: FormData): Promise<ImageData> => {
    const result = await this.httpClient.post(
      '/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } },
    );
    return result.data;
  };

  public updateImageEntityData = async (imageData: ImageData): Promise<ImageData> => {
    const { id } = imageData;
    const result = await this.httpClient.put(`/images/${id}`, imageData);
    return result.data;
  };

  public deleteImageEntityData = async (imageId: ImageData['id']): Promise<ImageData> => {
    const result = await this.httpClient.delete(`/images/${imageId}`);
    return result.data;
  };
}

export default new ImagesDataService();
