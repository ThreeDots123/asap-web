import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  ApiResponse,
  AvailableNetworkChains,
  InitiatePaymentRequest,
  InitiatePaymentResponse,
  NetworkCoins,
} from "./types";
import {
  availableNetworkChains,
  convertFiat,
  initiateOfflineTransaction,
  networkCoins,
  validateTransactionProfile,
} from "@/routes/server";

class APIClient {
  private baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  private requestClient: AxiosInstance;

  constructor() {
    this.requestClient = axios.create({
      baseURL: this.baseUrl,
      timeout: 30000,
      withCredentials: true, // Include cookies in all requests
    });
  }

  /**
   * Make a request to the backend server.
   *
   * @param method - HTTP method
   * @param endpoint - API endpoint
   * @param data - Request data (for POST/PUT requests)
   * @param params - Query parameters
   * @param headers - request headers
   * @returns Promise resolving to API response
   */
  private async execute<T = any>(requestData: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    endpoint: string;
    data?: any;
    params?: Record<string, any>;
    headers?: AxiosRequestConfig["headers"];
  }): Promise<ApiResponse<T>> {
    const { endpoint, method, data, params, headers } = requestData;
    const url = `/${endpoint.replace(/^\//, "")}`;

    try {
      // If data is FormData, don't set Content-Type header (let browser set it with boundary)
      const requestHeaders = { ...headers };
      if (data instanceof FormData) {
        delete (requestHeaders as any)?.["Content-Type"];
      }

      const response: AxiosResponse<any> = await this.requestClient.request({
        method,
        url,
        data,
        params,
        headers: requestHeaders,
        withCredentials: true,
      });

      // Backend wraps responses in { success: true, data: ... } format
      if (response.data.success) {
        return {
          success: true,
          data: response.data.data,
        } as ApiResponse<T>;
      } else {
        return {
          success: false,
          error: response.data.error || {
            message: "Unknown error occurred",
            statusCode: response.status,
          },
        } as ApiResponse<T>;
      }
    } catch (err) {
      console.error(
        `An error occurred when making request to the server.`,
        err
      );

      if (axios.isAxiosError(err)) {
        const errorData = err.response?.data;
        const errorMessage =
          errorData?.error?.message ||
          errorData?.message ||
          err.message ||
          "Unable to complete request call.";

        return {
          success: false,
          error: {
            statusCode: err.response?.status || err.status || 0,
            message: errorMessage,
          },
        };
      }

      return {
        success: false,
        error: {
          statusCode: 0,
          message:
            err instanceof Error
              ? err.message
              : "Unable to complete request call.",
        },
      };
    }
  }

  /**
   * Validate that a transaction profile slug is allowed for this pay route.
   */
  async validateTransactionProfile(profile: string) {
    return this.execute<null>({
      method: "GET",
      endpoint: validateTransactionProfile(profile),
    });
  }

  /**
   * Initiate an offline POS payment for a merchant profile.
   */
  async initiateOfflineTransaction(
    profile: string,
    body: InitiatePaymentRequest
  ) {
    return this.execute<InitiatePaymentResponse>({
      method: "POST",
      endpoint: initiateOfflineTransaction(profile),
      data: body,
    });
  }

  /**
   * Get server's available network chains
   */
  async retrieveAvailableNetworkChains() {
    return this.execute<Array<AvailableNetworkChains>>({
      method: "GET",
      endpoint: availableNetworkChains,
    });
  }

  /**
   * Get server's available network chains
   * @param network - request coins for selected network
   */
  async retrieveNetworkCoins(network: string) {
    return this.execute<Array<NetworkCoins>>({
      method: "GET",
      endpoint: networkCoins(network),
    });
  }

  /**
   * Get the converted amount for user fiat amount
   * @param network - The blockchain of the coin we want to convert to.
   * @param coin - Coin that the fiat should be converted into.
   * @param amount - The fiat amount to be converted.
   */
  async convertFiatToCoin(network: string, coin: string, amount: number) {
    return this.execute<string>({
      method: "GET",
      endpoint: convertFiat(network, coin),
      params: {
        amount,
      },
    });
  }
}

const apiClientManager = new APIClient();
export default apiClientManager;
