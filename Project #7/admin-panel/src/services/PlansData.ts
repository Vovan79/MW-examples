import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';
import { PlanData } from '../redux/modules/plans/types';

class PlansDataService {
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

  public getPlansData = async (): Promise<PlanData[]> => {
    const result = await this.httpClient.get('/plans');
    return result.data;
  };

  public getPlanEntityData = async (planId: PlanData['id']): Promise<PlanData> => {
    const result = await this.httpClient.get(`/plans/${planId}`);
    return result.data;
  };

  public addPlanEntityData = async (planData: PlanData): Promise<PlanData> => {
    const result = await this.httpClient.post('/plans', planData);
    return result.data;
  };

  public updatePlanEntityData = async (planData: PlanData): Promise<PlanData> => {
    const { id } = planData;
    const result = await this.httpClient.put(`/plans/${id}`, planData);
    return result.data;
  };

  public deletePlanEntityData = async (planId: PlanData['id']): Promise<PlanData> => {
    const result = await this.httpClient.delete(`/plans/${planId}`);
    return result.data;
  };
}

export default new PlansDataService();
