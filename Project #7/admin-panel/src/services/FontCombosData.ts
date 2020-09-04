import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { FontComboData } from '../redux/modules/fontcombos/types';

class FontCombosDataService {
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

  public getFontCombosData = async (): Promise<FontComboData[]> => {
    const result = await this.httpClient.get('/font-combinations');
    return result.data;
  };

  public getFontComboEntityData = async (fontComboId: FontComboData['id']): Promise<FontComboData> => {
    const result = await this.httpClient.get(`/font-combinations/${fontComboId}`);
    return result.data;
  };

  public addFontComboEntityData = async (fontComboData: FontComboData): Promise<FontComboData> => {
    const result = await this.httpClient.post('/font-combinations', fontComboData);
    return result.data;
  };

  public updateFontComboEntityData = async (fontComboData: FontComboData): Promise<FontComboData> => {
    const { id } = fontComboData;
    const result = await this.httpClient.put(`/font-combinations/${id}`, fontComboData);
    return result.data;
  };

  public deleteFontComboEntityData = async (fontComboId: FontComboData['id']): Promise<FontComboData> => {
    const result = await this.httpClient.delete(`/font-combinations/${fontComboId}`);
    return result.data;
  };
}

export default new FontCombosDataService();
