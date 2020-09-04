import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_ASSETS_TOKEN } from '../constants/index';

export type UserRole = {
  createdAt: string,
  id: number,
  name: 'guest' | 'user' | 'designer' | 'admin',
};

export type UserImage = {
  createdAt: string,
  id: number,
  link: string,
  userId: number,
};

export type UserFont = {
  createdAt: string,
  id: number,
  link: string,
  userId: number,
};

export type UserColor = {
  createdAt: string,
  id: number,
  color: string,
  userId: number,
};

export type UserDesign = {
  createdAt: string,
  updatedAt: string,
  id: number,
  name: string,
  design: string,
  preview: string,
  userId: number,
};

export type UserData = {
  createdAt: string,
  id: number,
  username: string,
  role: UserRole['name'],
  roleId: UserRole['id'],
  email: string,
  images: UserImage[],
  fonts: UserFont[],
  colors: UserColor[],
  designs: UserDesign[],
  userRole: UserRole,
};

export type Template = {
  createdAt: string,
  updatedAt: string,
  id: number,
  name: string,
  template: string,
  side: 'front' | 'back',
  preview: string,
  productId: Product['id'],
  product: Product,
  productTypeId: ProductType['id'],
  productType: ProductType,
  productCategoryId: ProductCategory['id'],
  productCategory: ProductCategory,
  productSizeId: ProductSize['id'],
  productSize: ProductSize,
  userId: UserData['id'],
};

export type CreateTemplate = Pick<
Template, 'name' | 'template' | 'side' | 'productId' | 'productTypeId' | 'productCategoryId' | 'productSizeId'
>;

export type Product = {
  createdAt: string,
  id: number,
  name: string,
};

export type ProductType = {
  createdAt: string,
  id: number,
  name: string,
  productId: number,
  productSizes: ProductSize[],
};

export type ProductCategory = {
  createdAt: string,
  id: number,
  name: string,
  productTypeId: number,
};

export type ProductSize = {
  createdAt: string,
  id: number,
  name: string,
  width: number,
  height: number,
};

export type LoginRequestData = {
  email: string,
  password: string,
};

class UserDataService {
  public apiUrl = process.env.REACT_APP_ASSETS_BACKEND_URL;

  private getAuthToken = (): string | null => localStorage.getItem(LOCAL_STORAGE_ASSETS_TOKEN);

  private saveAuthToken = (token: string) => localStorage.setItem(LOCAL_STORAGE_ASSETS_TOKEN, token);

  public removeAuthToken = () => localStorage.removeItem(LOCAL_STORAGE_ASSETS_TOKEN);

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

  public get isAuthenticated(): Boolean {
    const xAuthToken = this.getAuthToken();
    return Boolean(xAuthToken);
  }

  public login = async ({ email, password }: LoginRequestData): Promise<UserData> => {
    const result = await this.httpClient.post('/auth/login', { email, password });

    if (result.data.jwt) {
      this.saveAuthToken(result.data.jwt);
    }

    return result.data.userData;
  };

  public logout = () => {
    this.removeAuthToken();
  };

  public getUserProfile = async (): Promise<UserData> => {
    const result = await this.httpClient.get('/profile');
    return result.data;
  };

  public getUserDesigns = async (): Promise<UserDesign[]> => {
    const result = await this.httpClient.get('/designs');
    return result.data;
  };

  public addUserDesign = async (
    { name, design, previewData }: Pick<UserDesign, 'name' | 'design'> & { previewData: string },
  ): Promise<UserDesign> => {
    const result = await this.httpClient.post('/designs', { name, design, previewData });
    return result.data;
  };

  public updateUserDesign = async (
    {
      designId,
      designData,
    }: {
      designId: UserDesign['id'],
      designData: Partial<Pick<UserDesign, 'name' | 'design' | 'preview'> & { previewData: string }>,
    },
  ) => {
    await this.httpClient.put(`/designs/${designId}`, designData);
  };

  public deleteUserDesign = async (designId: UserDesign['id']) => {
    await this.httpClient.delete(`/designs/${designId}`);
  };

  public getUserColors = async (): Promise<UserColor[]> => {
    const result = await this.httpClient.get('/colors');
    return result.data;
  };

  public addUserColors = async (colors: Array<UserColor['color']>) => {
    await this.httpClient.post('/colors', { colors });
  };

  public deleteUserColor = async (colorId: UserColor['id']) => {
    await this.httpClient.delete(`/colors/${colorId}`);
  };

  public getUserImages = async (): Promise<UserImage[]> => {
    const result = await this.httpClient.get('/images');
    return result.data;
  };

  public uploadUserImages = async (formData: FormData) => {
    await this.httpClient.post('/images/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  };

  public deleteUserImage = async (imageId: UserImage['id']) => {
    await this.httpClient.delete(`/images/${imageId}`);
  };

  public getUserFonts = async (): Promise<UserFont[]> => {
    const result = await this.httpClient.get('/fonts');
    return result.data;
  };

  public getTemplates = async (): Promise<Template[]> => {
    const result = await this.httpClient.get('/templates');
    return result.data;
  };

  public addTemplate = async (templateData: CreateTemplate & { previewData: string }): Promise<Template> => {
    const result = await this.httpClient.post('/templates', templateData);
    return result.data;
  };

  public updateTemplate = async (
    {
      templateId,
      templateData,
    }: {
      templateId: Template['id'],
      templateData: Partial<Pick<Template, 'name' | 'template' | 'preview'> & { previewData: string }>,
    },
  ) => {
    await this.httpClient.put(`/templates/${templateId}`, templateData);
  };

  public deleteTemplate = async (templateId: Template['id']) => {
    await this.httpClient.delete(`/templates/${templateId}`);
  };

  public getProducts = async (): Promise<Product[]> => {
    const result = await this.httpClient.get('/products');
    return result.data;
  };

  public getProductTypes = async (): Promise<ProductType[]> => {
    const result = await this.httpClient.get('/product-types');
    return result.data;
  };

  public getProductCategories = async (): Promise<ProductCategory[]> => {
    const result = await this.httpClient.get('/product-categories');
    return result.data;
  };

  public getProductSizes = async (): Promise<ProductSize[]> => {
    const result = await this.httpClient.get('/product-sizes');
    return result.data;
  };

  public getPersonsData = async (): Promise<UserData[]> => {
    const result = await this.httpClient.get('/users');
    return result.data;
  };
}

export default new UserDataService();
