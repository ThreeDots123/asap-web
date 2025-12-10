import { ActionButton } from "@/components/custom/button/action";
import { LogoText } from "@/components/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

const navigationLinks = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about us",
    url: "/#about",
  },
  {
    name: "products",
    url: "/#asap-mobile-pos",
  },
];

export default function ApplicationNavigation() {
  return (
    <nav>
      <div className="layout-container flex justify-between items-center py-5">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1.5">
            <Sheet>
              <SheetTrigger>
                <span
                  className="whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground py-2 h-8 w-full gap-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden mt-4"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R15u6ja:"
                  data-state="closed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="!size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                </span>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetTitle className="invisible"></SheetTitle>
                <SheetHeader>
                  <ul role="list" className="divide-y divide-none mt-4">
                    {navigationLinks.map((link) => {
                      return (
                        <SheetClose
                          key={link.url}
                          className="block py-3"
                          asChild
                        >
                          <Link href={link.url}>{link.name}</Link>
                        </SheetClose>
                      );
                    })}
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <div className="md:w-35 w-23">
              <LogoText />
            </div>
          </div>

          <NavigationMenu viewport={false} className="max-md:hidden">
            <NavigationMenuList>
              {navigationLinks.map((link, index) => {
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      asChild
                      className={clsx(
                        navigationMenuTriggerStyle(),
                        "font-normal capitalize hover:bg-transparent hover:border-b hover:border-accent focus:bg-transparent focus:border-b focus:border-accent rounded-none"
                      )}
                    >
                      <Link href={link.url}>{link.name}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex gap-2 max-md:hidden">
          <Button
            size="lg"
            className="px-4 font-heading text-md font-semibold bg-[#E1FF01]"
          >
            <Link href="https://forms.gle/wfpni6YssPRsUZCu6" target="_blank">
              Join Waitlist
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-4 font-heading text-md font-semibold"
          >
            <Link href="https://calendly.com/benjichimex/30min" target="_blank">
              Schedule Demo
            </Link>
          </Button>
        </div>

        <div className="md:hidden space-x-2">
          <Button
            size="sm"
            className="px-4 font-heading font-semibold bg-[#E1FF01]"
          >
            <Link href="https://forms.gle/wfpni6YssPRsUZCu6" target="_blank">
              Join Waitlist
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="px-4 font-heading border-foreground font-semibold"
          >
            <Link href="https://calendly.com/benjichimex/30min" target="_blank">
              Schedule Demo
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
