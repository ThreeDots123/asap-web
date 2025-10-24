import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ApplicationHero() {
  return (
    <section className="relative pb-15 md:mt-12 mt-6">
      <div className="layout-container">
        <h2 className="text-[69.25px] max-md:text-4xl font-medium tracking-tight md:text-center max-w-4xl mx-auto">
          The{" "}
          <span className="italic text-primary font-normal font-editorsnote">
            Bridge
          </span>{" "}
          Between
          <span className="block md:-mt-8"> Crypto and Everyday Money</span>
        </h2>

        <p className="max-w-3xl font-normal text-lg md:text-xl mx-auto md:text-center mt-5 text-[#353535]">
          We empower businesses to accept crypto payments effortlessly and
          enable individuals to spend, save, and invest crypto like regular
          money.
        </p>

        <div className="md:mx-auto w-fit mt-5 flex gap-3">
          <Link href="#asap-business" className="block">
            <Button className="flex gap-2 bg-primary-light !px-4 cursor-pointer text-sm">
              For Business <ArrowRight />
            </Button>
          </Link>
          <Button
            variant="outline"
            className="flex gap-2 border-accent !px-4 cursor-pointer text-accent text-sm"
          >
            For Individual <ArrowRight />
          </Button>
        </div>

        <div className="max-w-3xl max-h-64 mt-10 mx-auto">
          <Image src="/hero.png" width={900} height={300} alt="hero" />
        </div>

        <div className="w-fit mx-auto mt-10 md:text-center">
          <h4 className="font-semibold text-2xl capitalize text-[#333] -tracking-[3%]">
            Ready to Bridge Crypto and Everyday Money?
          </h4>
          <p className="text-sm md:w-4/5 mx-auto mt-5 mb-3 font-light">
            Join thousands of businesses and individuals who are already using
            ASAP to make crypto as easy as traditional money.
          </p>
          <Button className="bg-foreground text-white !px-7">Learn More</Button>
        </div>
      </div>

      <Image
        src="/Ellipse 3624.png"
        height={1088}
        width={1088}
        alt=""
        className="absolute bottom-0 -z-1 w-full max-h-[1088px]"
      />
    </section>
  );
}
