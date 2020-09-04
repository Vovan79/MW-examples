import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { PersonData } from '../redux/modules/persons/types';

class PersonsDataService {
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

  public getPersonsData = async (role: string): Promise<PersonData[]> => {
    const result = await this.httpClient.get('/users', { params: { role } });
    return result.data;
  };

  public getPersonEntityData = async (personId: PersonData['id']): Promise<PersonData> => {
    const result = await this.httpClient.get(`/users/${personId}`);
    return result.data;
  };

  public addPersonEntityData = async (personData: PersonData): Promise<PersonData> => {
    const result = await this.httpClient.post('/users', personData);
    return result.data;
  };

  public updatePersonEntityData = async (personData: PersonData): Promise<PersonData> => {
    const { id } = personData;
    const result = await this.httpClient.put(`/users/${id}`, personData);
    return result.data;
  };

  public deletePersonEntityData = async (personId: PersonData['id']): Promise<PersonData> => {
    const result = await this.httpClient.delete(`/users/${personId}`);
    return result.data;
  };
}

export default new PersonsDataService();
