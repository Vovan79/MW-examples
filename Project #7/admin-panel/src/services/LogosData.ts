import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { LogoData } from '../redux/modules/logos/types';
import { PersonData } from '../redux/modules/persons/types';

class LogosDataService {
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

  public getLogosData = async (): Promise<LogoData[]> => {
    const result = await this.httpClient.get('/logos');
    return result.data;
  };

  public getLogosByUserIdData = async (userId: PersonData['id']): Promise<LogoData[]> => {
    const result = await this.httpClient.get(`/users/${userId}/logos`);
    return result.data;
  };

  public getLogoEntityData = async (logoId: LogoData['id']): Promise<LogoData> => {
    const result = await this.httpClient.get(`/logos/${logoId}`);
    return result.data;
  };

  public addLogoEntityData = async (formData: FormData): Promise<LogoData> => {
    const result = await this.httpClient.post(
      '/logos', formData, { headers: { 'Content-Type': 'multipart/form-data' } },
    );
    return result.data;
  };

  public updateLogoEntityData = async (logoData: LogoData): Promise<LogoData> => {
    const { id } = logoData;
    const result = await this.httpClient.put(`/logos/${id}`, logoData);
    return result.data;
  };

  public deleteLogoEntityData = async (logoId: LogoData['id']): Promise<LogoData> => {
    const result = await this.httpClient.delete(`/logos/${logoId}`);
    return result.data;
  };
}

export default new LogosDataService();
