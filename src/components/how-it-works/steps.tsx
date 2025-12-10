import { Calendar1, ClipboardList, RadioTower, Workflow } from "lucide-react";
import { ReactNode } from "react";

export const individualSteps = [
  {
    heading: "Join the Gateway Program",
    desc: "Fill out our waitlist form to get exclusive access, personalized onboarding and priority access to our products.",
    bgColor: "#bad30a",
    Icon: () => <ClipboardList size={15} className="text-white" />,
  },
  {
    heading: "Strategy Session and Demo",
    desc: "Schedule a meeting with the onboarding team to get a demo of our products, walkthrough your specific use case and have all technical and compliance questions answered.",
    bgColor: "#3A82F6",
    Icon: () => <Calendar1 size={15} className="text-white" />,
  },
  {
    heading: "Seamless Integration",
    desc: "Receive your onboarding package with hands-on technical support, test environment, and pre-launch checklist; depending on the product this may take between 1 hour to 2 days.",
    bgColor: "#F97316",
    Icon: () => <Workflow size={15} className="text-white" />,
  },
  {
    heading: "Go Live and Scale",
    desc: "Complete final compliance verification, switch to live mode, first settlement within 24 hours, dedicated account manager, and growth resources.",
    bgColor: "#16A34A",
    Icon: () => <RadioTower size={15} className="text-white" />,
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
