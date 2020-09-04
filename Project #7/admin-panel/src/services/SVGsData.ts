import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { SVGData } from '../redux/modules/svgs/types';
import { PersonData } from '../redux/modules/persons/types';

class SVGsDataService {
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

  public getSVGsData = async (svgType: string): Promise<SVGData[]> => {
    const result = await this.httpClient.get('/svgs/public', { params: { type: svgType } });
    return result.data;
  };

  public getSVGsByUserIdData = async (userId: PersonData['id']): Promise<SVGData[]> => {
    const result = await this.httpClient.get(`/users/${userId}/svgs`);
    return result.data;
  };

  public getSVGEntityData = async (svgId: SVGData['id']): Promise<SVGData> => {
    const result = await this.httpClient.get(`/svgs/${svgId}`);
    return result.data;
  };

  public addSVGEntityData = async (formData: FormData): Promise<SVGData> => {
    const result = await this.httpClient.post(
      '/svgs', formData, { headers: { 'Content-Type': 'multipart/form-data' } },
    );
    return result.data;
  };

  public updateSVGEntityData = async (svgData: Partial<SVGData>): Promise<SVGData> => {
    const {
      type, id, link, ...otherData
    } = svgData;

    const result = await this.httpClient.put(`/svgs/${id}`, otherData);
    return result.data;
  };

  public deleteSVGEntityData = async (svgId: SVGData['id']): Promise<SVGData> => {
    const result = await this.httpClient.delete(`/svgs/${svgId}`);
    return result.data;
  };
}

export default new SVGsDataService();
