import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { KeyFeatures } from "@/components/sections/KeyFeatures";
import { WhosItFor } from "@/components/sections/WhosItFor";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <WhosItFor />
      <WhyChoose />
      <CTASection />
    </div>
  );
}
