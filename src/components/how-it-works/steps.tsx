import { CreditCardIcon, PhoneIcon, UsersIcon, WalletIcon } from "lucide-react";
import { ReactNode } from "react";

export const individualSteps = [
  {
    heading: "Get started quickly",
    desc: "You can register and get running very quickly using your phone number only.",
    bgColor: "#bad30a",
    Icon: () => <PhoneIcon size={15} className="text-white" />,
  },
  {
    heading: "Use your wallet easily",
    desc: "Send, spend, and trade crypto as simply as using your everyday banking app.",
    bgColor: "#3A82F6",
    Icon: () => <WalletIcon size={15} className="text-white" />,
  },
  {
    heading: "Trade with P2P",
    desc: "Using the P2P section, choose whether you want to buy or sell your coins, and complete your trade directly with us.",
    bgColor: "#F97316",
    Icon: () => <UsersIcon size={15} className="text-white" />,
  },
  {
    heading: "How to spend crypto like cash",
    desc: "Through your dedicated wallet or by connecting an external wallet, you can choose a fiat payout option to use your crypto for everyday transactions.",
    bgColor: "#16A34A",
    Icon: () => <CreditCardIcon size={15} className="text-white" />,
  },
];

export default function Step({
  heading,
  desc,
  Icon,
  bgColor,
}: {
  heading: string;
  desc: string;
  Icon: () => ReactNode;
  bgColor: string;
}) {
  return (
    <div className="flex items-center text-xs gap-2">
      <div className="p-2.5 rounded-md" style={{ backgroundColor: bgColor }}>
        <Icon />
      </div>
      <div>
        <h4 className="font-bold text-[#5E6282] mb-0.5">{heading}</h4>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
