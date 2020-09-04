import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { DesignData } from '../redux/modules/designs/types';
import { PersonData } from '../redux/modules/persons/types';

class DesignsDataService {
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

  public getDesignsData = async (): Promise<DesignData[]> => {
    const result = await this.httpClient.get('/designs');
    return result.data;
  };

  public getDesignsByUserIdData = async (userId: PersonData['id']): Promise<DesignData[]> => {
    const result = await this.httpClient.get(`users/${userId}/designs`);
    return result.data;
  };

  public getDesignEntityData = async (designId: DesignData['id']): Promise<DesignData> => {
    const result = await this.httpClient.get(`/designs/${designId}`);
    return result.data;
  };

  public addDesignEntityData = async (formData: FormData): Promise<DesignData> => {
    const result = await this.httpClient.post(
      '/designs', formData, { headers: { 'Content-Type': 'multipart/form-data' } },
    );
    return result.data;
  };

  public updateDesignEntityData = async (designData: DesignData): Promise<DesignData> => {
    const { id } = designData;
    const result = await this.httpClient.put(`/designs/${id}`, designData);
    return result.data;
  };

  public deleteDesignEntityData = async (designId: DesignData['id']): Promise<DesignData> => {
    const result = await this.httpClient.delete(`/designs/${designId}`);
    return result.data;
  };
}

export default new DesignsDataService();
