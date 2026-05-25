export const validateTransactionProfile = (profile: string) =>
  `merchant/offline/transaction/profile/${encodeURIComponent(
    profile
  )}/validate`;

export const initiateOfflineTransaction = (profile: string) =>
  `merchant/offline/transaction/profile/${encodeURIComponent(
    profile
  )}/initiate`;

export const availableNetworkChains = "send/network/available";
export const networkCoins = (network: string) =>
  "send/" + network + "/available/coins";
export const convertFiat = (network: string, coin: string) =>
  "send/" + network + "/" + coin + "/convert";
