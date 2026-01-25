"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function WhatsAppBenfits() {
  return (
    <section className="relative w-full md:pl-30 py-20" id="asap-whatsapp">
      <div className="layout-container">
        <div className="lg:flex justify-end gap-13">
          <div className="max-w-[486px] w-full flex flex-col gap-5 justify-between">
            <div className="font-heading">
              <h4 className="text-6xl font-bold uppercase">Turn Chats,</h4>
              <h4 className="text-6xl font-bold uppercase">Into Sales</h4>
            </div>
            <div className="shadow-lg p-4 rounded-md m-10">
              <Image
                src="/whatsapp.png"
                width={450}
                height={150}
                alt="Pay with ASAP"
                className="max-md:w-70 max-lg:mx-auto"
              />
            </div>
            <div className="mb-10">
              <p className="max-md:text-sm">
                Get Paid Directly in your DMs. The ASAP WhatsApp Bot
                enables you to request payments directly within a WhatsApp conversation.
                Send a secure, payment address to your customer with one click.
                They pay in stablecoins via their wallet without ever leaving the chat.
                It’s the most personal, direct, and efficient way to close sales in the messaging era.
                Perfect for vendors, consultants, freelancers, and service providers.
              </p>
              <Button
                variant="outline"
                className="md:text-xl text-base font-bold border-black border-2 max-md:p-5 max-md:hover:p-5.5 p-6 hover:bg-transparent rounded-lg hover:p-6.5 cursor-pointer mt-5"
              >
                <Link href="https://wa.me/message/U6UXP7R6O2KEC1" target="_blank">Pay with ASAP</Link>
              </Button>
            </div>
          </div>

          <Image
            src="/asap-whatsapp.png"
            width={600}
            height={100}
            alt="Pay with ASAP"
            quality={100}
            sizes="(max-width: 640px) 100vw, 600px"
            className="w-full md:h-150 h-auto max-w-[600px] mx-auto md:mt-40"
            priority
          />
        </div>
      </div>
    </section>
  );
}
