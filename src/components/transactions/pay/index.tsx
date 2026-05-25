"use client";

import {
  AvailableNetworkChains,
  InitiatePaymentResponse,
  NetworkCoins,
} from "@/api/types";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import SelectNetworkAndCoin from "./network-coin";
import AmountToPay from "./amount-to-pay";
import { ArrowRightIcon, InfoIcon, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  convertFiatToCoin,
  initiatePaymentAction,
} from "@/server-actions/payment";
import CompletePayment from "./complete-payment";

export default function PayMerchantComponent({
  profile,
  name,
}: {
  profile: string;
  name: string;
}) {
  const networkState = useState<{
    available: Array<AvailableNetworkChains>;
    selected?: AvailableNetworkChains;
  }>({ available: [] });
  const coinState = useState<{
    available: Array<NetworkCoins>;
    selected?: NetworkCoins;
  }>({ available: [] });

  const [networks] = networkState;
  const [coins] = coinState;

  const [open, setOpen] = useState(false);
  const [amountToPay, setAmountToPay] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
  const [converting, setConverting] = useState(false);
  const [conversionError, setConversionError] = useState<string | null>(null);
  const [initiating, setInitiating] = useState(false);
  const [initiateError, setInitiateError] = useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] =
    useState<InitiatePaymentResponse | null>(null);

  useEffect(() => {
    setConvertedAmount(null);
    setConversionError(null);
    setInitiateError(null);
    setPaymentDetails(null);
    setOpen(false);
  }, [amountToPay, networks.selected?.chainId, coins.selected?.symbol]);

  const canGetConversion = Boolean(
    networks.selected &&
      coins.selected &&
      Number.isFinite(amountToPay) &&
      amountToPay > 0
  );

  const convertDisabledHint = useMemo(() => {
    if (canGetConversion || converting) return null;
    const parts: string[] = [];
    if (!networks.selected) parts.push("select a network");
    if (!coins.selected) parts.push("select a coin");
    if (!Number.isFinite(amountToPay) || amountToPay <= 0) {
      parts.push("enter an amount greater than zero");
    }
    if (parts.length === 0) return null;
    const joined =
      parts.length === 1
        ? parts[0]
        : parts.length === 2
        ? `${parts[0]} and ${parts[1]}`
        : `${parts.slice(0, -1).join(", ")}, and ${parts[parts.length - 1]}`;
    return `Convert is disabled until you ${joined}.`;
  }, [
    canGetConversion,
    converting,
    networks.selected,
    coins.selected,
    amountToPay,
  ]);

  const handleGetConversion = useCallback(async () => {
    const network = networks.selected?.name;
    const coinSymbol = coins.selected?.name;

    if (
      !network ||
      !coinSymbol ||
      !Number.isFinite(amountToPay) ||
      amountToPay <= 0
    ) {
      setConversionError(
        "Select a network, a coin, and enter an amount greater than zero."
      );
      setConvertedAmount(null);
      return;
    }

    setConversionError(null);
    setConverting(true);

    const result = await convertFiatToCoin(network, coinSymbol, amountToPay);

    setConverting(false);

    if (result.success) {
      setConvertedAmount(result.data);
    } else {
      setConvertedAmount(null);
      setConversionError(result.error ?? "Could not get conversion.");
    }
  }, [amountToPay, networks.selected, coins.selected]);

  const handleContinueToPayment = useCallback(async () => {
    const chain = networks.selected?.name ?? networks.selected?.name ?? "";
    const asset = coins.selected?.symbol ?? "";

    if (!chain || !asset || !Number.isFinite(amountToPay) || amountToPay <= 0) {
      setInitiateError(
        "Select a network, a coin, and enter an amount greater than zero."
      );
      return;
    }

    setInitiateError(null);
    setInitiating(true);

    const result = await initiatePaymentAction(profile, {
      amount: String(amountToPay),
      currency: "ngn",
      coin: {
        asset: asset.toLowerCase(),
        chain: chain.toLowerCase(),
      },
    });

    setInitiating(false);

    if (result.success) {
      setPaymentDetails(result.data);
      setOpen(true);
    } else {
      setPaymentDetails(null);
      setInitiateError(result.error ?? "Could not start payment.");
    }
  }, [profile, amountToPay, networks.selected, coins.selected]);

  return (
    <div className="max-w-7xl mx-auto pb-10 py-4 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="absolute top-6 left-6">
          <Image
            src="/logo/logo-only.svg"
            alt="Collaboration Platform Logo"
            className="w-8 h-8 max-sm:w-12 max-sm:h-12"
            width={32}
            height={32}
          />
        </div>

        <div className="max-w-md mx-auto w-full p-4 space-y-7 max-sm:-mt-16">
          <div>
            <h3 className="font-semibold text-2xl text-start">
              Complete Payment to <span className="capitalize">{name}</span>
            </h3>
          </div>
          <div className="mt-10">
            <SelectNetworkAndCoin network={networkState} coin={coinState} />
            <small className="flex items-center gap-1 mt-4 mb-1.5 text-gray-500">
              Currency Converstion <InfoIcon className="size-3" />
            </small>
            <div className="space-y-1">
              <small className="text-muted-foreground flex items-center justify-between gap-2">
                <span className="font-medium shrink-0">Converted Amount:</span>
                <span className="flex min-h-5 items-center justify-end text-end tabular-nums">
                  {converting ? (
                    <Loader2Icon
                      className="size-4 animate-spin text-muted-foreground"
                      aria-label="Converting amount"
                    />
                  ) : convertedAmount != null &&
                    networks.selected &&
                    coins.selected ? (
                    <span>
                      {convertedAmount
                        .toUpperCase()
                        .includes(coins.selected.symbol.toUpperCase())
                        ? convertedAmount
                        : `${convertedAmount} ${coins.selected.symbol.toUpperCase()}`}
                    </span>
                  ) : (
                    <span className="text-muted-foreground/70">—</span>
                  )}
                </span>
              </small>
              {conversionError ? (
                <p
                  className="text-xs text-destructive text-end"
                  role="alert"
                  aria-live="polite"
                >
                  {conversionError}
                </p>
              ) : null}
            </div>
          </div>
          <AmountToPay
            setAmountToPay={setAmountToPay}
            onGetConversion={handleGetConversion}
            converting={converting}
            canGetConversion={canGetConversion}
            convertDisabledHint={convertDisabledHint}
          />
          <Button
            className="group w-full -mt-4 cursor-pointer"
            disabled={!canGetConversion || initiating}
            onClick={handleContinueToPayment}
          >
            {initiating ? (
              <>
                <Loader2Icon className="size-4 animate-spin" aria-hidden />
                Starting payment…
              </>
            ) : (
              <>
                Continue to Payment
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </>
            )}
          </Button>
          {initiateError ? (
            <p
              className="text-xs text-destructive text-center -mt-2"
              role="alert"
              aria-live="polite"
            >
              {initiateError}
            </p>
          ) : null}
        </div>
      </div>

      <CompletePayment openState={{ open, setOpen }} payment={paymentDetails} />
    </div>
  );
}
