"use server";

import apiClientManager from "@/api/interface";
import type { InitiatePaymentRequest } from "@/api/types";

export async function validateProfileAction(profile: string) {
  const trimmed = profile.trim();
  if (!trimmed) {
    return {
      success: false,
      error: "Invalid profile.",
    } as const;
  }

  const response = await apiClientManager.validateTransactionProfile(trimmed);

  if (!response.success) {
    return {
      success: false,
      error: response.error.message,
    } as const;
  }

  if (!(response.data as any).valid) return { success: false };

  return { success: true, data: response.data } as const;
}

export async function initiatePaymentAction(
  profile: string,
  body: InitiatePaymentRequest
) {
  const trimmed = profile.trim();
  if (!trimmed) {
    return { success: false, error: "Invalid profile." } as const;
  }

  const response = await apiClientManager.initiateOfflineTransaction(
    trimmed,
    body
  );

  if (!response.success) {
    return {
      success: false,
      error: response.error.message,
    } as const;
  }

  return {
    success: true,
    data: response.data,
  } as const;
}

export async function availableNetworkAction() {
  const response = await apiClientManager.retrieveAvailableNetworkChains();

  if (!response.success) {
    return {
      success: false,
      error: response.error.message,
    } as const;
  }

  return {
    success: true,
    data: response.data,
  };
}

export async function networkCoinsAction(network: string) {
  const response = await apiClientManager.retrieveNetworkCoins(network);

  if (!response.success) {
    return {
      success: false,
      error: response.error.message,
    } as const;
  }

  return {
    success: true,
    data: response.data,
  };
}

export async function convertFiatToCoin(
  network: string,
  coin: string,
  amount: number
) {
  const response = await apiClientManager.convertFiatToCoin(
    network,
    coin,
    amount
  );

  if (!response.success) {
    return {
      success: false,
      error: response.error.message,
    } as const;
  }

  return {
    success: true,
    data: response.data,
  };
}
