import Image from "next/image";
import Link from "next/link";
import DiscordIcon from "./icons/discord";
import TwitterIcon from "./icons/twitter";
import TelegramIcon from "./icons/telegram";
import LinkedIn from "./icons/linkedin";
import { Input } from "../ui/input";
import InstagramIcon from "./icons/instagram";

const socialIcons = [
  {
    url: "/discord",
    Icon: DiscordIcon,
  },
  {
    url: "/twitter",
    Icon: TwitterIcon,
  },
  {
    url: "/tg",
    Icon: TelegramIcon,
  },
  {
    url: "/linkedin",
    Icon: LinkedIn,
  },
  {
    url: "/ig",
    Icon: InstagramIcon,
  },
];

export default function ApplicationFooter() {
  return (
    <section className="py-20">
      <div className="layout-container">
        <footer>
          <div className="grid sm:grid-cols-[3fr_1fr] items-center gap-y-7">
            <h4 className="font-semibold text-lg">
              Speak to our customer care @{" "}
              <span className="text-primary">00234-9085200000</span>
            </h4>

            <div className="space-y-2">
              <h6 className="font-medium">Follow us</h6>
              <ul className="text-muted-foreground mb-10 flex items-center gap-2">
                {socialIcons.map(({ Icon, url }) => {
                  return (
                    <a href="" key={url}>
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
                  <a href="to-support" className="text-blue-500 underline">
                    support@asapcrypto.xyz
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_1fr] max-lg:gap-x-8 w-full">
                <div>
                  <h4 className="font-medium mb-3 text-xl">Company</h4>
                  <div className="text-sm space-y-3 text-muted-foreground">
                    <Link className="block" href="1">
                      About us
                    </Link>
                    <Link className="block" href="2">
                      Privacy policy
                    </Link>
                    <Link className="block" href="3">
                      Terms &amp; conditions
                    </Link>
                    <Link className="block" href="4">
                      Cookies policy
                    </Link>
                    <Link className="block" href="5">
                      Community
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 text-xl">Support</h4>
                  <div className="text-sm space-y-3 text-muted-foreground">
                    <Link className="block" href="1">
                      FAQ
                    </Link>
                    <Link className="block" href="2">
                      Contact us
                    </Link>
                    <Link className="block" href="3">
                      VIsa
                    </Link>
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
                    />
                    <button className="cursor-pointer text-primary font-medium">
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
