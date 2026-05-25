import { Button } from "@/components/ui/button";
import { AlertCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InvalidPayUrl() {
  return (
    <div className="max-w-7xl mx-auto pb-10 py-4 min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-md text-center space-y-6">
        <div className="absolute top-6 left-6">
          <Image
            src="/logo/logo-only.svg"
            alt="Collaboration Platform Logo"
            className="w-8 h-8 max-sm:w-12 max-sm:h-12"
            width={32}
            height={32}
          />
        </div>

        <div className="rounded-full bg-destructive/10 p-4">
          <AlertCircleIcon
            className="size-10 text-destructive"
            aria-hidden
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Invalid payment link</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            This URL is invalid and cannot be accessed. Please check the link
            you were given or contact the merchant for a new one.
          </p>
        </div>

        <Button asChild variant="outline" className="cursor-pointer">
          <Link href="/">Go to homepage</Link>
        </Button>
      </div>
    </div>
  );
}
