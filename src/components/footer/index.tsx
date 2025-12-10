"use client"

import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "./icons/twitter";
import TelegramIcon from "./icons/telegram";
import LinkedIn from "./icons/linkedin";
import { Input } from "../ui/input";
import InstagramIcon from "./icons/instagram";
import TikTokIcon from "./icons/tiktok";
import toast from "react-hot-toast";
import WhatsappIcon from "./icons/whatsapp";
import { useState } from "react";

const socialIcons = [
  {
    url: "https://x.com/asapcrypto247?t=RNKTkEhX8G457mI2m1p3gg&s=09",
    Icon: TwitterIcon,
  },
  {
    url: "https://www.tiktok.com/@asapcrypto",
    Icon: TikTokIcon,
  },
  {
    url: "https://wa.me/message/C4RZJD25AQBCB1",
    Icon: WhatsappIcon,
  },
  // {
  //   url: "/linkedin",
  //   Icon: LinkedIn,
  // },
  // {
  //   url: "/ig",
  //   Icon: InstagramIcon,
  // },
];

export default function ApplicationFooter() {
  const [email, setEmail] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  return (
    <section className="py-20">
      <div className="layout-container">
        <footer>
          <div className="grid sm:grid-cols-[3fr_1fr] items-center gap-y-7">
            <h4 className="font-semibold text-lg">
              Speak to our customer care @{" "}
              <span className="text-primary">+234-915-198-4731</span>
            </h4>

            <div className="space-y-2">
              <h6 className="font-medium">Follow us</h6>
              <ul className="text-muted-foreground mb-10 flex items-center gap-2">
                {socialIcons.map(({ Icon, url }) => {
                  return (
                    <a href={url} key={url} target="_blank">
                      <span className="bg-muted hover:text-accent flex size-10 items-center justify-center rounded-full transition-colors cursor-pointer">
                        <Icon />
                      </span>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t pt-20">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo/logo-only.svg"
                  width={30}
                  height={30}
                  alt="asap-logo"
                  className=""
                />
                <Image
                  src="/logo/logo-text.svg"
                  width={100}
                  height={100}
                  alt="asap-logo"
                  className=""
                />
              </Link>
            </div>

            <div className="grid lg:grid-cols-[4fr_2fr_1fr] gap-y-10 max-lg:gap-x-8 pt-15">
              <div>
                <h4 className="font-medium mb-3 text-xl">Contact</h4>
                <div className="text-muted-foreground text-sm space-y-3">
                  <p>328 Queensberry Street, G.R.A, Enugu.</p>
                  <a href="mailto:support@asapcrypto.xyz" className="text-blue-500 underline">
                    support@asapcrypto.xyz
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_1fr] max-lg:gap-x-8 w-full">
                <div>
                  <h4 className="font-medium mb-3 text-xl">Company</h4>
                  <div className="text-sm space-y-3 text-muted-foreground">
                    <span className="block cursor-pointer" onClick={() => toast('Coming Soon!', {icon: '⌛️'})}>
                      About us
                    </span>
                    <span className="block cursor-pointer" onClick={() => toast('Coming Soon!', {icon: '⌛️'})}>
                      Privacy policy
                    </span>
                    <span className="block cursor-pointer" onClick={() => toast('Coming Soon!', {icon: '⌛️'})}>
                      Terms &amp; conditions
                    </span>
                    <span className="block cursor-pointer" onClick={() => toast('Coming Soon!', {icon: '⌛️'})}>
                      Cookies policy
                    </span>
                    <span className="block cursor-pointer" onClick={() => toast('Coming Soon!', {icon: '⌛️'})}>
                      Community
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 text-xl">Support</h4>
                  <div className="text-sm space-y-3 text-muted-foreground">
                    <span className="block cursor-pointer" onClick={() => toast('Coming Soon!', {icon: '⌛️'})}>
                      FAQ
                    </span>
                    <span className="block cursor-pointer" onClick={() => 
                      toast('📞 Speak to our customer care @ +234-915-198-4731\n\nOr\n\n📩 Send a mail to support@asapcrypto.xyz',
                        {
                          duration: 5000
                        }
                      )}
                    >
                      Contact us
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3 text-xl">Newsletter</h4>
                <div className="text-xs space-y-3 text-muted-foreground">
                  <p>Subscribe to the free newsletter and stay up to date</p>
                  <div className="border bg-white flex items-center pr-1.5 rounded max-w-xl">
                    <Input
                      placeholder="Enter your email"
                      className="border-none focus-visible:ring-0 w-full placeholder:text-xs"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      disabled={!email}
                      className="cursor-pointer text-primary font-medium hover:text-primary-light"
                      onClick={() => {
                        emailRegex.test(email) ? toast.success('Subscribed successfully!') : toast.error('Invalid email address!');
                        setEmail("");
                      }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
