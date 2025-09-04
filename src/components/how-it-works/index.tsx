import Image from "next/image";
import Step, { individualSteps } from "./steps";

export default function HowitWorks() {
  return (
    <section>
      <div className="layout-container py-22">
        <div className="max-w-[960px] mx-auto">
          <h5 className="text-sm text-muted-foreground uppercase font-medium max-md:text-center">
            Easy and Quick
          </h5>

          <div className="flex max-md:flex-col justify-between mt-4">
            <div className="max-w-[500px]">
              <h4 className="capitalise font-heading md:text-5xl text-2xl tracking-tight font-semibold mt-2">
                Familiarize yourself with some few easy actions.
              </h4>
              <div className="mt-6 space-y-8">
                {individualSteps.map((step) => (
                  <Step key={step.heading} {...step} />
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/purchasing-item.png"
                height={380}
                width={350}
                alt="book a trip"
                className="max-md:mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
