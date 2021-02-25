import { Ad, AdWithCreator } from './ad.interface';

export interface ErrorResponse {
  message: string | string[];
  error: string | boolean;
  statusCode?: number;
  status?: number;
}

export type MainResponse =
  | {
      status: string;
      message: string;
    }
  | ErrorResponse;

export interface FetchAdsResponse extends Partial<ErrorResponse> {
  ads?: Ad[];
  pages?: number;
}

export type FetchSingleAdResponse = ErrorResponse | AdWithCreator;

export type FetchUserAdsResponse = ErrorResponse | Ad[];
