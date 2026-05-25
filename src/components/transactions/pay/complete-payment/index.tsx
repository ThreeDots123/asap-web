"use client";

import type { InitiatePaymentResponse } from "@/api/types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { CheckIcon, CopyIcon, InfoIcon } from "lucide-react";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import QRCode from "react-qr-code";

/** How long the quoted amount stays valid after the drawer opens */
const QUOTE_TTL_MS = 15 * 60 * 1000;

function formatMmSs(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatChainLabel(chain: string) {
  return chain.charAt(0).toUpperCase() + chain.slice(1);
}

export default function CompletePayment({
  openState: { open, setOpen },
  payment,
}: {
  openState: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
  payment: InitiatePaymentResponse | null;
}) {
  const [copied, setCopied] = useState(false);
  const [quoteExpiresAt, setQuoteExpiresAt] = useState<number | null>(null);
  const [quoteSecondsLeft, setQuoteSecondsLeft] = useState(0);

  const transferAddress = payment?.transferToAddress ?? "";
  const cryptoAmount = payment?.coinEquivalent.cryptoAmountToPay ?? "";
  const asset = payment?.coinEquivalent.asset ?? "";
  const chain = payment?.coinEquivalent.chain ?? "";
  const assetLabel = asset.toUpperCase();

  useLayoutEffect(() => {
    if (open && payment) {
      const at = Date.now() + QUOTE_TTL_MS;
      setQuoteExpiresAt(at);
      setQuoteSecondsLeft(Math.max(0, Math.ceil((at - Date.now()) / 1000)));
    } else {
      setQuoteExpiresAt(null);
      setQuoteSecondsLeft(0);
    }
  }, [open, payment]);

  useEffect(() => {
    if (quoteExpiresAt == null) return;

    const tick = () => {
      const left = Math.max(0, Math.ceil((quoteExpiresAt - Date.now()) / 1000));
      setQuoteSecondsLeft(left);
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [quoteExpiresAt]);

  const copyAddress = useCallback(async () => {
    if (!transferAddress) return;
    try {
      await navigator.clipboard.writeText(transferAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [transferAddress]);

  const handleViewStatus = () => {
    // TODO: replace with real status check (API call / route navigation)
    alert("Checking payment status...");
  };

  if (!payment) return null;

  return (
    <Drawer
      direction="bottom"
      open={open}
      onOpenChange={(openState) => setOpen(openState)}
    >
      <DrawerContent className="max-h-[90vh] overflow-hidden flex flex-col pb-10">
        <DrawerTitle className="flex items-center justify-center gap-1 font-medium py-3">
          <p className="text-2xl tabular-nums">{cryptoAmount}</p>
          <p className="text-base">{assetLabel}</p>
        </DrawerTitle>

        <div className="px-4 mt-4 text-[#333] space-y-4 pb-6 overflow-y-auto">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm text-muted-foreground">Scan to pay</p>
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <QRCode value={transferAddress} size={140} />
            </div>
          </div>

          <div className="flex items-center justify-between gap-15">
            <h4 className="max-w-20 shrink-0 text-primary-dark">Address</h4>
            <div className="flex min-w-0 flex-1 items-center gap-1 justify-end">
              <p className="min-w-0 flex-1 line-clamp-1 text-ellipsis text-end font-mono text-sm">
                {transferAddress}
              </p>
              <button
                type="button"
                onClick={copyAddress}
                aria-label={copied ? "Copied" : "Copy address"}
                className="text-muted-foreground hover:text-foreground shrink-0 rounded-md p-1.5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {copied ? (
                  <CheckIcon
                    className="size-4 text-green-600 cursor-pointer"
                    aria-hidden
                  />
                ) : (
                  <CopyIcon className="size-4" aria-hidden />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h4 className="shrink-0 text-primary-dark">Blockchain network</h4>
            <p>{formatChainLabel(chain)}</p>
          </div>

          <div className="flex items-center justify-between">
            <h4 className="shrink-0 text-primary-dark">Network Coin</h4>
            <p>{assetLabel}</p>
          </div>

          <div className="flex items-center justify-between gap-3 text-sm">
            <h4 className="shrink-0 text-primary-dark">Reference</h4>
            <p className="font-mono text-end text-xs">{payment.reference}</p>
          </div>

          <Separator className="w-full" />

          <div className="flex items-center justify-between gap-3 pt-1">
            <h4 className="shrink-0 text-amber-700">Quote expires in</h4>
            <p
              className="font-mono tabular-nums text-sm font-medium text-amber-700"
              aria-live="polite"
              aria-atomic="true"
            >
              {formatMmSs(quoteSecondsLeft)}
            </p>
          </div>

          <Alert className="mt-3 border-amber-200/80 bg-amber-50/80 text-[#333]">
            <InfoIcon className="stroke-accent-blue" />
            <AlertTitle className="text-accent-blue">How to Send</AlertTitle>
            <AlertDescription>
              <ol className="mt-2 list-decimal space-y-2 pl-4 text-sm leading-relaxed">
                <li>Copy the wallet address above</li>
                <li>Open your crypto wallet or exchange</li>
                <li>
                  Paste the address and send exactly {cryptoAmount} {assetLabel}
                </li>
                <li>Wait for confirmation (usually 1–3 minutes)</li>
              </ol>
            </AlertDescription>
          </Alert>

          <div className="flex gap-2 pt-2">
            <Button className="w-full" onClick={handleViewStatus}>
              View Payment Status
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
