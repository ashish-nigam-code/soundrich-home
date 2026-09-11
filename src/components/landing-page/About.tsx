interface AboutProps {
  title: string;
  description: string;
  image: string;
}

export default function About({
  title,
  description,
  image,
}: AboutProps) {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">

        <div>
          <img
            src={image}
            alt={title}
            className="w-full rounded-2xl"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            {title}
          </h2>

          <p className="mt-5 text-lg">
            {description}
          </p>
        </div>

      </div>
    </section>
  );
}
