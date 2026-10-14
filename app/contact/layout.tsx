import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | JIM Cooling and Heating Services",
  description:
    "Contact JIM Cooling and Heating Services for 24/7 emergency HVAC repair, free quotes, and scheduled maintenance across Greater Houston.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
