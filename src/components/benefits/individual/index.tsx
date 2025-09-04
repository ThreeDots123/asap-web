import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function IndividualBenfits() {
  return (
    <section className="relative w-full py-20">
      <div className="layout-container">
        <div className="lg:flex justify-end gap-13">
          <div className="max-w-[486px] w-full flex flex-col gap-5 justify-between">
            <div className="font-heading">
              <h4 className="text-6xl font-bold uppercase">Your Money,</h4>
              <h4 className="text-6xl font-bold uppercase">Your Way</h4>
            </div>
            <div className="mb-10">
              <p className="max-md:text-sm">
                ASAP is the smarter custodial crypto wallet — seamless like your
                bank app, yet open to your external wallets. Spend crypto like
                cash, trade P2P with escrow, and manage everything in one place.
                Future-ready with savings, loans, and more.
              </p>
              <Button
                variant="outline"
                className="md:text-xl text-base font-bold border-black border-2 max-md:p-5 max-md:hover:p-5.5 p-6 hover:bg-transparent rounded-full hover:p-6.5 cursor-pointer mt-5"
              >
                Pay with ASAP
              </Button>
            </div>
          </div>

          <Image
            src="/use-asap.png"
            width={600}
            height={700}
            alt="Pay with ASAP"
            className="max-md:w-70 max-lg:mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
