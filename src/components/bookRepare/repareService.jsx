
import React from "react";
import Container from "../common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    id: 1,
    title: (
      <>
        Select your repair
        <br />
        & request a quote
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        Send you gadget
        <br />
        or visit our store
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        Our technicians
        <br />
        fix your gadget
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
        We'll request
        <br />
        payment
      </>
    ),
  },
  {
    id: 5,
    title: (
      <>
        Return to you
      </>
    ),
  },
];

export default function RepairService() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-24"
      style={{
        backgroundImage: "url('/images/repareBook.jpg')",
      }}
    >
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/1"></div>

      <Container>
        <div className="relative z-10">

          {/* Section Heading */}
          <div className="flex flex-col items-center justify-center text-center">
            <SectionTitle
              title="WHAT DO WE FIX"
              textColor="text-white"
              className="mb-4"
            />

            <SectionHeading
              title={<>Book a Repair</>}
              align="text-center"
              className="mb-12 mx-auto"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`
                  relative flex flex-col items-center justify-center
                  text-center px-5 py-10
                  border-white/40
                  lg:border-r
                  ${index === 4 ? "lg:border-r-0" : ""}
                  ${index < 4 ? "border-b lg:border-b-0" : ""}
                  step-animation
                `}
                style={{
                  animationDelay: `${index * 0.35}s`,
                }}
              >
                {/* Step Number Background */}
                <span className="absolute top-8 left-1/2 -translate-x-1/2 text-white/20 text-8xl md:text-9xl font-bold pointer-events-none">
                  {step.id}
                </span>

                {/* Step Badge */}
                <span className="relative z-10 bg-[#FFD700] text-black px-3 py-1 rounded-md text-sm font-medium mb-10">
                  STEP {step.id}
                </span>

                {/* Step Title */}
                <h3 className="relative z-10 text-white text-lg md:text-xl font-semibold leading-relaxed">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
