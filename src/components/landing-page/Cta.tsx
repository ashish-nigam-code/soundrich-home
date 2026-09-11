interface CTAProps {
  title: string;
  buttonText: string;
}

export default function Cta({
  title,
  buttonText,
}: CTAProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          {title}
        </h2>

        <button className="mt-8 rounded-lg px-8 py-4">
          {buttonText}
        </button>

      </div>
    </section>
  );
}