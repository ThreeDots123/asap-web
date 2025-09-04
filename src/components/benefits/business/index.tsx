import { ArrowRight, BadgeCheckIcon } from "lucide-react";
import { Button } from "../../ui/button";
import Image from "next/image";

const businessBenefits = [
  "Seamless checkout integrations",
  "Payouts directly to your bank or mobile money",
  "Compliance (KYC/AML/reporting) done by ASAP",
  "Future-ready with stablecoin settlements",
];

export default function BusinessBenefits() {
  return (
    <section className="relative w-full bg-foreground pt-6 pb-16 lg:pb-32">
      <Image
        src="/business-benefit.png"
        width={1088}
        height={1088}
        alt="asap business"
        className="absolute bottom-0 w-full max-h-[600px]"
      />
      <div className="layout-container py-10 relative z-1">
        <div className="text-primary-light flex items-center gap-2">
          <BusinessIcon />
          <h5 className="text-xs">ASAP BUSINESS</h5>
        </div>

        <div className="w-fit lg:bg-gradient-to-br lg:from-gray-200 lg:via-gray-100 lg:to-gray-200 rounded-lg flex items-center justify-center mt-3 lg:mt-10">
          <div className="relative rounded-2xl lg:border lg:border-white/20 lg:bg-white/10 lg:p-6 shadow-2xl backdrop-blur-md lg:w-screen max-w-7xl">
            {/* <!-- Soft light blobs --> */}
            <div className="pointer-events-none absolute -top-10 -left-10 h-36 w-36 rounded-full bg-accent/20 blur-3xl max-lg:hidden"></div>
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary-light/20 blur-3xl max-lg:hidden"></div>

            <div className="relative w-fit mx-auto max-w-3xl pt-2 lg:pt-10 pb-8 lg:pb-20 max-lg:text-white">
              <div className="mb-4 flex items-center gap-3">
                {/* <div className="h-10 w-10 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm"></div> */}
                <h2 className="text-4xl tracking-[-4%] font-bold lg:text-[#3D3D3D] uppercase font-heading">
                  Accept crypto. Get paid in cash
                </h2>
              </div>
              <p className="lg:text-[#3D3D3D] text-white text-sm mt-8">
                ASAP B2B is a plug-and-play SDK that lets your business accept
                crypto payments without dealing with volatility, compliance, or
                wallet management. You get instant fiat or stablecoin
                settlements, while we handle the hard stuff in the background.
              </p>

              <div className="mt-10 gap-3 space-y-1.5 lg:-ml-5.5">
                {businessBenefits.map((benefit, index) => (
                  <div className="flex items-center gap-1.5" key={index}>
                    <BadgeCheckIcon
                      className="fill-[#3D3D3D] text-white"
                      size={15}
                    />
                    <p className="text-xs lg:text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/asap-business.png"
          width={1440}
          height={960}
          alt="Asap-admin"
          className="lg:absolute lg:w-[700px] lg:h-[400px] w-auto z-2 -bottom-14 right-0 shadow-2xl"
        />

        <Button className="flex gap-2 text-xs bg-primary-light mt-5 cursor-pointer">
          Integrate with ASAP Business
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}

const BusinessIcon = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 4H13C12.7348 4 12.4804 4.10536 12.2929 4.29289C12.1054 4.48043 12 4.73478 12 5V8H10V1C10 0.734784 9.89464 0.48043 9.70711 0.292893C9.51957 0.105357 9.26522 0 9 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4ZM6 3H8V5H6V3ZM4 13H2V11H4V13ZM4 9H2V7H4V9ZM4 5H2V3H4V5ZM8 13H6V11H8V13ZM8 9H6V7H8V9ZM17 13H15V11H17V13ZM17 9H15V7H17V9Z"
      className="fill-primary-light"
    />
  </svg>
);

const WalletIcon = () => (
  <svg
    width="21"
    height="16"
    viewBox="0 0 21 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.94419 0.476578C2.16334 0.476578 1.41448 0.786768 0.862333 1.33891C0.310191 1.89105 0 2.63992 0 3.42077V13.0563C0 13.8371 0.310191 14.586 0.862333 15.1382C1.41448 15.6903 2.16334 16.0005 2.94419 16.0005H17.9328C18.7136 16.0005 19.4625 15.6903 20.0146 15.1382C20.5668 14.586 20.877 13.8371 20.877 13.0563V3.42077C20.877 2.63992 20.5668 1.89105 20.0146 1.33891C19.4625 0.786768 18.7136 0.476578 17.9328 0.476578H2.94419ZM15.2563 6.90026C14.9013 6.90026 14.5609 7.04126 14.31 7.29223C14.059 7.54321 13.918 7.8836 13.918 8.23853C13.918 8.59346 14.059 8.93386 14.31 9.18483C14.5609 9.4358 14.9013 9.5768 15.2563 9.5768C15.6112 9.5768 15.9516 9.4358 16.2026 9.18483C16.4535 8.93386 16.5945 8.59346 16.5945 8.23853C16.5945 7.8836 16.4535 7.54321 16.2026 7.29223C15.9516 7.04126 15.6112 6.90026 15.2563 6.90026Z"
      className="fill-accent"
    />
  </svg>
);
