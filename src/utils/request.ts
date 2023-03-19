import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Api {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      headers: {
        'content-type': 'application/json',
      },
      responseType: 'json',
      transformResponse: (res) => {
        try {
          return JSON.parse(res);
        } catch (e) {
          return res;
        }
      },
    });
  }

  get<ResponseType>(url: string): Promise<AxiosResponse<ResponseType>> {
    return this.instance.get(url);
  }

  post<ParamType, ResponseType>(
    url: string,
    param?: ParamType,
  ): Promise<AxiosResponse<ResponseType>> {
    return this.instance.post(url, param);
  }
}

export const request = new Api();
