import Image from "next/image";

export function LogoOnly() {
  return (
    <Image
      src="/logo/logo-only.svg"
      alt="asap-logo"
      width={300}
      height={300}
      className="w-full h-full"
    />
  );
}

export function LogoText() {
  return (
    <Image
      src="/logo/logo-text.svg"
      alt="asap-logo"
      width={300}
      height={300}
      className="w-full h-full"
    />
  );
}

export function LogoFull() {
  return (
    <Image
      src="/logo/logo-full.svg"
      alt="asap-logo"
      width={300}
      height={300}
      className="w-full h-full"
    />
  );
}
