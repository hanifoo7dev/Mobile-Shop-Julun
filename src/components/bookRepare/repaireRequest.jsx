
"use client";
import Container from "../common/Container";
import React, { useState } from "react";
import {
  MapPin,
  Clock3,
  ChevronDown,
  RefreshCw,
} from "lucide-react";

const gadgets = [
  "Mobile Phone",
  "Tablet",
  "Laptop",
  "Smartwatch",
  "Battery",
  "Accessories",
  "Other",
];

export default function RepaireRequest() {
  const [gadget, setGadget] = useState("");
  const [model, setModel] = useState("");
  const [problem, setProblem] = useState("");
  const [robot, setRobot] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!robot) {
      alert("Please verify that you are not a robot.");
      return;
    }

    console.log({
      gadget,
      model,
      problem,
      ...formData,
    });
  };

  return (
    <section className="w-full bg-white py-16">
      <Container>
      <div className="mx-auto w-full max-w-[1400px] px-0 sm:px-4 lg:px-[60px]">

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">

          {/* LEFT SIDE - 8 COLUMNS */}

          <div className="lg:col-span-8 lg:pt-6">

            <form onSubmit={handleSubmit}>

              {/* ROW 1: GADGET AND MODEL */}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* Choose Gadget */}

                <div>
                  <label className="mb-1.5 block text-[18px] font-semibold text-[#222222]">
                    Choose Gadget
                  </label>

                  <div className="relative">
                    <select
                      value={gadget}
                      onChange={(e) => setGadget(e.target.value)}
                      required
                      className="h-[46px] w-full appearance-none rounded-[7px] border border-[#d2d2d2] bg-[#fafafa] px-3 pr-10 text-[16px] text-[#333] outline-none focus:border-blue-400"
                    >
                      <option value="">Choose device</option>

                      {gadgets.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={17}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#555]"
                    />
                  </div>
                </div>

                {/* Model */}

                <div>
                  <label className="mb-1.5 block text-[18px] font-semibold text-[#222222]">
                    Model of Gadget
                  </label>

                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Example iPhone 19"
                    required
                    className="h-[46px] w-full rounded-[7px] border border-[#80aaff] bg-white px-3 text-[16px] text-[#333] outline-none placeholder:text-[#888] focus:border-blue-500"
                  />
                </div>

              </div>

              {/* ROW 2: PROBLEM */}

              <div className="mt-5">

                <label className="mb-1.5 block text-[18px] font-semibold text-[#222222]">
                  Problem With Gadget?
                </label>

                <textarea
                  rows={6}
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="Write your gadget problem"
                  required
                  className="min-h-[150px] w-full rounded-[7px] border border-[#d2d2d2] bg-[#fafafa] p-3 text-[16px] text-[#333] outline-none placeholder:text-[#888] focus:border-blue-400"
                />

              </div>

              {/* DIVIDER */}

              <div className="my-[49px] border-t border-[#bdbdbd]" />

              {/* ROW 3: PERSONAL INFORMATION */}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

                {/* Name */}

                <div>
                  <label className="mb-1.5 block text-[18px] font-semibold text-[#222222]">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-[46px] w-full rounded-[7px] border border-[#d2d2d2] bg-[#fafafa] px-3 text-[16px] outline-none focus:border-blue-400"
                  />
                </div>

                {/* Email */}

                <div>
                  <label className="mb-1.5 block text-[18px] font-semibold text-[#222222]">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-[46px] w-full rounded-[7px] border border-[#d2d2d2] bg-[#fafafa] px-3 text-[16px] outline-none focus:border-blue-400"
                  />
                </div>

                {/* Phone */}

                <div>
                  <label className="mb-1.5 block text-[18px] font-semibold text-[#222222]">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-[46px] w-full rounded-[7px] border border-[#d2d2d2] bg-[#fafafa] px-3 text-[16px] outline-none focus:border-blue-400"
                  />
                </div>

              </div>

              {/* CAPTCHA */}

              <div className="mt-5 flex h-[76px] w-full max-w-[302px] items-center justify-between rounded-[3px] border border-[#d2d2d2] bg-[#fafafa] px-3">

                <label className="flex cursor-pointer items-center gap-3">

                  <input
                    type="checkbox"
                    checked={robot}
                    onChange={(e) => setRobot(e.target.checked)}
                    className="h-[28px] w-[28px] cursor-pointer accent-blue-600"
                  />

                  <span className="whitespace-nowrap text-[14px] text-[#222]">
                    I&apos;m not a robot
                  </span>

                </label>

                <div className="flex flex-col items-center justify-center">

                  <RefreshCw
                    size={29}
                    strokeWidth={4}
                    className="text-blue-500"
                  />

                  <span className="mt-0.5 text-[10px] text-gray-500">
                    reCAPTCHA
                  </span>

                </div>

              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="mt-7 rounded-full bg-black px-9 py-3 text-[15px] font-semibold text-white transition hover:bg-[#ffdc00] hover:text-black"
              >
                Get a Quote
              </button>

            </form>

          </div>

          {/* RIGHT SIDE - 4 COLUMNS */}

          <div className="flex flex-col gap-6 lg:col-span-4">

            {/* LOCATION CARD */}

            <div className="min-h-[260px] rounded-3xl bg-[#ffdc00] px-6 py-8 sm:px-10 sm:py-10">

              <MapPin
                size={37}
                strokeWidth={3}
                fill="black"
                className="text-black"
              />

              <h3 className="mt-3 text-[20px] font-semibold text-black">
                Visit Our Workshop
              </h3>

              <p className="mt-3 text-[16px] leading-6 text-black">
                Mirpur 10, Dhaka, Bangladesh
              </p>

              <a
                href="https://www.google.com/maps/place/Mirpur-10,+Dhaka/@23.8028745,90.3645346,15z/data=!3m1!4b1!4m6!3m5!1s0x3755c0d33532b3fb:0x2b27b0c01cb2bc0d!8m2!3d23.8028556!4d90.3748344!16s%2Fg%2F11l66ssrrt?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-[41px] items-center justify-center rounded-full bg-black px-7 text-[14px] font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Get Direction
              </a>

            </div>

            {/* WORKING HOURS CARD */}

            <div className="min-h-[196px] rounded-[16px] bg-[#ffdc00] px-6 py-8 sm:px-10 sm:py-10">

              <Clock3
                size={37}
                strokeWidth={2.5}
                className="text-black"
              />

              <h3 className="mt-3 text-[20px] font-semibold text-black">
                We&apos;re Open To days
              </h3>

              <p className="mt-3 text-[16px] leading-6 text-black">
                Mon-Sat 9am-8pm, Sun 11am-6pm
              </p>

            </div>

          </div>

        </div>

      </div>
      </Container>
    </section>
  );
}
