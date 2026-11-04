"use client";

import Image from "next/image";

const MACHINE_TYPES = [
  {
    label: "RIC",
    labelAbove: false,
    image: "/assets/images/landingpageimages/ric-hearing-aid-1.jpg",
  },
  {
    label: "BTE",
    labelAbove: true,
    image: "/assets/images/landingpageimages/bte-hearing-aid.jpg",
  },
  {
    label: "ITC",
    labelAbove: false,
    image: "/assets/images/landingpageimages/itc-hearing-aid.jpg",
  },
  {
    label: "CIC",
    labelAbove: true,
    image: "/assets/images/landingpageimages/cic-hearing-aid.jpg",
  },
  {
    label: "IIC",
    labelAbove: false,
    image: "/assets/images/landingpageimages/iic-hearing-aid.jpg",
  },
  {
    label: "ITE",
    labelAbove: true,
    image: "/assets/images/landingpageimages/ite-hearing-aid.jpg",
  },
];

export default function HearingMachineTypes() {
  return (
    <section
      id="hearing-machine-types"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="mx-auto mb-[58px] max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0170b9] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Types of Hearing Machines
          </h2>
        </div>

        {/* ---------- Machine Type Cards ---------- */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6 lg:gap-5">
          {MACHINE_TYPES.map((machine) => (
            <div
              key={machine.label}
              className={`flex flex-col items-center ${
                machine.labelAbove ? "lg:pt-12" : "lg:pb-12"
              }`}
            >
              {/* Top Label (for BTE, CIC, ITE) */}
              {machine.labelAbove ? (
                <span className="mb-4 text-center text-lg font-bold tracking-wide text-[#0170b9]">
                  {machine.label}
                </span>
              ) : (
                <div className="hidden h-7 lg:block" />
              )}

              {/* Card Container without background or drop-shadow, with 30px radius */}
              <div className="relative flex aspect-[3/4.6] w-full items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-full w-full overflow-hidden rounded-[30px]">
                  <Image
                    src={machine.image}
                    alt={machine.label}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    className="rounded-[30px] object-contain"
                  />
                </div>
              </div>

              {/* Bottom Label (for RIC, ITC, IIC) */}
              {!machine.labelAbove ? (
                <span className="mt-4 text-center text-lg font-bold tracking-wide text-[#0170b9]">
                  {machine.label}
                </span>
              ) : (
                <div className="hidden h-7 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}