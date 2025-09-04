import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export function ActionButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={clsx(
        "flex flex-row justify-center items-center p-[6.3618px] gap-[6.36px] w-[153.14px] h-[41.72px] rounded-[19.0854px] font-heading font-semibold cursor-pointer",
        className
      )}
      {...props}
    />
  );
}
