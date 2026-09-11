interface HeroProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

export default function Hero({
  title,
  description,
  image,
  buttonText,
}: HeroProps) {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
        
        <div>
          <h1 className="text-4xl font-bold md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg">
            {description}
          </p>

          <button className="mt-8 rounded-lg px-6 py-3">
            {buttonText}
          </button>
        </div>

        <div>
          <img
            src={image}
            alt={title}
            className="w-full rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}