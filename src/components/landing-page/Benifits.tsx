interface BenefitsProps {
  benefits: string[];
}

export default function Benefits({
  benefits,
}: BenefitsProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-3xl font-bold">
          Why Choose Us
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow"
            >
              <h3 className="font-semibold">
                {benefit}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}