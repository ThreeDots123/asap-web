export interface ApiError {
  message: string;
  statusCode?: number;
}

export type ApiResponse<T, E = ApiError> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: E;
    };

export interface AvailableNetworkChains {
  name: string;
  chainId: number;
  network: string;
  logoUrl: string;
}

export interface NetworkCoins {
  name: string;
  symbol: string;
  decimals: number;
  logoUrl: string;
}

export interface InitiatePaymentCoinDetails {
  asset: string;
  chain: string;
}

export interface InitiatePaymentRequest {
  amount: string;
  currency: string;
  coin: InitiatePaymentCoinDetails;
}

export interface InitiatePaymentCoinEquivalent {
  cryptoAmountToPay: string;
  asset: string;
  chain: string;
}

export interface InitiatePaymentResponse {
  message: string;
  reference: string;
  amount: string;
  coinEquivalent: InitiatePaymentCoinEquivalent;
  internalPaymentId: string;
  transferToAddress: string;
}
