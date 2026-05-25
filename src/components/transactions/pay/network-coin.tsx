import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2Icon } from "lucide-react";
import { AvailableNetworkChains, NetworkCoins } from "@/api/types";
import {
  availableNetworkAction,
  networkCoinsAction,
} from "@/server-actions/payment";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SelectNetworkAndCoin({
  network: [networks, setNetworks],
  coin: [coins, setCoins],
}: {
  network: [
    {
      available: Array<AvailableNetworkChains>;
      selected?: AvailableNetworkChains;
    },
    Dispatch<
      SetStateAction<{
        available: Array<AvailableNetworkChains>;
        selected?: AvailableNetworkChains;
      }>
    >
  ];
  coin: [
    {
      available: Array<NetworkCoins>;
      selected?: NetworkCoins;
    },
    Dispatch<
      SetStateAction<{
        available: Array<NetworkCoins>;
        selected?: NetworkCoins;
      }>
    >
  ];
}) {
  const [loading, setLoading] = useState<{ network: boolean; coin: boolean }>({
    network: true,
    coin: false,
  });

  const showRetryToast = ({
    message,
    onRetry,
  }: {
    message: string;
    onRetry: () => void;
  }) => {
    toast.error(
      (t) => (
        <div className="flex items-center gap-3">
          <span className="text-sm">{message}</span>
          <button
            type="button"
            onClick={() => {
              toast.dismiss(t.id);
              onRetry();
            }}
            className="rounded bg-black px-2 py-1 text-xs font-medium text-white"
          >
            Retry
          </button>
        </div>
      ),
      {
        duration: Infinity,
      }
    );
  };

  const fetchAvailableNetworks = () => {
    setLoading((state) => ({ ...state, network: true }));

    availableNetworkAction()
      .then((response) => {
        if (!response.success) {
          showRetryToast({
            message: response.error ?? "Failed to fetch networks.",
            onRetry: fetchAvailableNetworks,
          });
          return;
        }

        setNetworks((state) => ({ ...state, available: response.data }));
      })
      .finally(() => {
        setLoading((state) => ({ ...state, network: false }));
      });
  };

  const fetchNetworkCoins = (network: AvailableNetworkChains) => {
    setLoading((state) => ({ ...state, coin: true }));

    networkCoinsAction(network.name)
      .then((response) => {
        if (!response.success) {
          showRetryToast({
            message: response.error ?? "Failed to fetch network coins.",
            onRetry: () => fetchNetworkCoins(network),
          });
          return;
        }

        setCoins((state) => ({ ...state, available: response.data }));
      })
      .finally(() => {
        setLoading((state) => ({ ...state, coin: false }));
      });
  };

  useEffect(() => {
    // Fetch the available networks...
    fetchAvailableNetworks();
  }, []);

  const handleSelectNetwork = (chainId: string) => {
    const selectedNetwork = networks.available.find(
      (network) => network.chainId.toString() === chainId
    );

    if (!selectedNetwork) return;

    setNetworks((state) => ({ ...state, selected: selectedNetwork }));
    setCoins({ available: [], selected: undefined });
    fetchNetworkCoins(selectedNetwork);
  };

  const handleSelectCoin = (symbol: string) => {
    const selectedCoin = coins.available.find((coin) => coin.symbol === symbol);
    if (!selectedCoin) return;
    setCoins((state) => ({ ...state, selected: selectedCoin }));
  };

  return (
    <div>
      <Label
        htmlFor="Payment-network-coin"
        className="mb-2 text-muted-foreground"
      >
        Network and Coin
      </Label>
      <div className="grid grid-cols-12 rounded-md shadow-xs">
        <Select
          disabled={loading.network}
          value={networks.selected?.chainId.toString()}
          onValueChange={handleSelectNetwork}
        >
          <SelectTrigger
            className={`[&>span_svg]:text-muted-foreground/80 w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 -me-px rounded-r-none shadow-none col-span-7 ${
              loading.network ? "[&>svg:last-child]:hidden" : ""
            }`}
          >
            <SelectValue placeholder="Select network" />
            {loading.network ? (
              <Loader2Icon className="size-4 animate-spin text-accent-blue" />
            ) : null}
          </SelectTrigger>

          <SelectContent className="[&_*[role=option]>span>svg]:text-muted-foreground/80 max-h-100 [&_*[role=option]]:pr-8 [&_*[role=option]]:pl-2 [&_*[role=option]>span]:right-2 [&_*[role=option]>span]:left-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
            {networks.available.map((network) => (
              <SelectItem
                key={network.chainId}
                value={network.chainId.toString()}
              >
                <Image
                  src={network.logoUrl}
                  alt={network.name}
                  className="h-4 w-4"
                  width={16}
                  height={16}
                />{" "}
                <span className="truncate capitalize">{network.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          key={networks.selected?.chainId ?? "coin-select"}
          disabled={!networks.selected || loading.coin}
          value={coins.selected?.symbol ?? ""}
          onValueChange={handleSelectCoin}
        >
          <SelectTrigger
            className={`[&>span_svg]:text-muted-foreground/80 w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 -me-px rounded-l-none shadow-none col-span-5 ${
              loading.coin ? "[&>svg:last-child]:hidden" : ""
            }`}
          >
            <SelectValue placeholder="Select coin" />
            {loading.coin ? (
              <Loader2Icon className="size-4 animate-spin text-accent-blue" />
            ) : null}
          </SelectTrigger>

          <SelectContent className="[&_*[role=option]>span>svg]:text-muted-foreground/80 max-h-100 [&_*[role=option]]:pr-8 [&_*[role=option]]:pl-2 [&_*[role=option]>span]:right-2 [&_*[role=option]>span]:left-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
            {coins.available.map((coin) => (
              <SelectItem key={coin.symbol} value={coin.symbol}>
                <Image
                  src={coin.logoUrl}
                  alt={coin.name}
                  className="h-4 w-4"
                  width={16}
                  height={16}
                />{" "}
                <span className="truncate uppercase">{coin.symbol}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
