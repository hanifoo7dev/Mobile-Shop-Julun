import React from "react";

import Container from "@/components/common/Container";
import Sidebar from "@/components/services/SingleRepair/Sidebar";
import SingleRepairHero from "@/components/services/SingleRepair/SingleRepairHero";
import PhoneRepairHeroSection from "@/components/services/SingleRepair/PhoneRepairHeroSection";
import RepaireGrid from "@/components/services/SingleRepair/RepaireGrid";
import RepWhyChooseUs from "@/components/services/SingleRepair/RepWhyChooseUs";
import RepairCTA from "@/components/services/AllService/RepairCTA";

export default function Page() {
  return (
    <main className="min-h-screen ">
      {/* Hero Banner Section */}
      <SingleRepairHero />

      {/* Main Content Layout */}
      <Container className="mt-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {/* Sidebar - 30% */}
          <div className="order-2 w-full min-w-0 lg:order-1 lg:w-[25%] lg:shrink-0">
            <Sidebar />
          </div>

          {/* Phone Repair Content - 70% */}
          <div className="order-1 w-full min-w-0 flex-1 lg:order-2">
            <PhoneRepairHeroSection/>
            <RepaireGrid/>
            <RepWhyChooseUs/>

          </div>
        </div>
      </Container>
        <RepairCTA/>
    </main>
  );
}
