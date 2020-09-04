import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { FontData } from '../redux/modules/fonts/types';
import { PersonData } from '../redux/modules/persons/types';

class FontsDataService {
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

  public getFontsData = async (): Promise<FontData[]> => {
    const result = await this.httpClient.get('/fonts/public');
    return result.data;
  };

  public getFontsByUserIdData = async (userId: PersonData['id']): Promise<FontData[]> => {
    const result = await this.httpClient.get(`users/${userId}/fonts`);
    return result.data;
  };

  public getFontEntityData = async (fontId: FontData['id']): Promise<FontData> => {
    const result = await this.httpClient.get(`/fonts/${fontId}`);
    return result.data;
  };

  public addFontEntityData = async (formData: FormData): Promise<FontData> => {
    const result = await this.httpClient.post(
      '/fonts', formData, { headers: { 'Content-Type': 'multipart/form-data' } },
    );
    return result.data;
  };

  public updateFontEntityData = async (fontData: FontData): Promise<FontData> => {
    const { id } = fontData;
    const result = await this.httpClient.put(`/fonts/${id}`, fontData);
    return result.data;
  };

  public deleteFontEntityData = async (fontId: FontData['id']): Promise<FontData> => {
    const result = await this.httpClient.delete(`/fonts/${fontId}`);
    return result.data;
  };
}

export default new FontsDataService();
