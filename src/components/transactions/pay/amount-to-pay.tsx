import {
  AlertCircleIcon,
  ArrowRightLeft,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import {
  Button as AriaButton,
  Group,
  Input,
  Label,
  NumberField,
} from "react-aria-components";
import { FaNairaSign } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AmountToPay({
  setAmountToPay,
  onGetConversion,
  converting,
  canGetConversion,
  convertDisabledHint,
}: {
  setAmountToPay: Dispatch<SetStateAction<number>>;
  onGetConversion: () => void;
  converting: boolean;
  canGetConversion: boolean;
  convertDisabledHint: string | null;
}) {
  return (
    <NumberField
      defaultValue={0}
      minValue={0}
      className="w-full max-w-md space-y-2"
      onChange={(value) => {
        queueMicrotask(() => setAmountToPay(value));
      }}
      onInput={(e) => setAmountToPay(Number((e.target as any).value))}
    >
      <Label
        className="flex items-center gap-1 text-sm leading-none font-medium select-none mb-2 text-muted-foreground"
        htmlFor="payment-amount"
      >
        Amount to pay{" "}
        <span className="flex items-center">
          (<FaNairaSign className="size-3" />)
        </span>
      </Label>
      <div className="flex gap-2 items-stretch">
        <Group className="dark:bg-input/30 border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 min-h-9 min-w-0 flex-1 items-center overflow-hidden rounded-md border bg-transparent text-base whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-within:ring-[3px] md:text-sm">
          <AriaButton
            slot="decrement"
            className="border-input bg-background text-muted-foreground hover:bg-gray-300 hover:text-foreground ml-2 flex aspect-square h-5 items-center justify-center rounded-sm border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            <MinusIcon className="size-3" />
            <span className="sr-only">Decrement</span>
          </AriaButton>
          <Input
            id="payment-amount"
            className="selection:bg-primary selection:text-primary-foreground w-full grow px-3 py-2 text-center tabular-nums outline-none"
          />
          <AriaButton
            slot="increment"
            className="border-input bg-background text-muted-foreground hover:bg-gray-300 hover:text-foreground mr-2 flex aspect-square h-5 items-center justify-center rounded-sm border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            <PlusIcon className="size-3" />
            <span className="sr-only">Increment</span>
          </AriaButton>
        </Group>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 shrink-0 px-3 text-xs font-medium cursor-pointer hover:bg-gray-200"
          disabled={!canGetConversion || converting}
          onClick={onGetConversion}
        >
          {converting ? (
            <p>Converting...</p>
          ) : (
            <div className="flex items-center gap-2">
              <p>Convert</p>{" "}
              <ArrowRightLeft className="size-3 text-primary-dark" />
            </div>
          )}
        </Button>
      </div>

      {convertDisabledHint ? (
        <Alert className="text-amber-600 bg-amber-600/10 dark:bg-amber-400/10">
          <AlertCircleIcon />
          <AlertTitle>Conversion Button Disabled</AlertTitle>
          <AlertDescription>{convertDisabledHint}</AlertDescription>
        </Alert>
      ) : null}
    </NumberField>
  );
}
