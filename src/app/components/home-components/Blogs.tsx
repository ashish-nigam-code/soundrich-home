import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    title: "Your Go-To Source for the Best Hearing Aids in Mumbai",
    category: "Best Hearing Aids Mumbai",
    date: "September 4, 2026",
    excerpt:
      "Hearing is something most of us take for granted — until everyday sounds slowly begin to fade. Discover what makes Soundrich a trusted name in Mumbai.",
    image: "/assets/images/blog-mumbai.webp",
  },
  {
    title: "Affordable Hearing Aid Solutions in Uttam Nagar",
    category: "Best Hearing Aids Delhi",
    date: "September 1, 2026",
    excerpt:
      "Hearing loss can gradually change the way a person experiences everyday life. Explore cheap, high-quality hearing aid solutions in Uttam Nagar, Delhi.",
    image: "/assets/images/blog-uttam-nagar.webp",
  },
  {
    title: "Hearing Aid in Shahdara: Find Better Hearing",
    category: "Best Hearing Aids Delhi",
    date: "August 31, 2026",
    excerpt:
      "Conversations shouldn't be a struggle. Meet expert audiologists in Shahdara and find the right hearing aid for your lifestyle.",
    image: "/assets/images/blog-shahdara.webp",
  },
];

function CalendarIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-[#1c3a5e] py-16 sm:py-20 lg:py-24"
    >
      {/* decorative glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#35c3e8]/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      {/* subtle dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-white uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
            Hearing Care Journal
          </span>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Latest News &{" "}
            <span className="bg-gradient-to-r from-[#35c3e8] via-brand to-[#8fd15f] bg-clip-text text-transparent">
              Hearing Insights
            </span>
          </h2>
          <p className="text-base leading-relaxed text-white/75 sm:text-lg">
            Expert advice, hearing care tips and the latest from Soundrich Hearing across Delhi NCR
            and beyond.
          </p>
        </div>

        {/* ---------- Blog cards ---------- */}
        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg shadow-slate-950/25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-950/40"
            >
              {/* Image */}
              <Link href="/blogs" className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Uniform green category pill on every card (matches logo green) */}
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-gradient-to-r from-accent to-[#3c8a2a] px-3 py-1 text-[0.65rem] font-bold tracking-wider text-white uppercase shadow-md">
                  {post.category}
                </span>
              </Link>

              {/* Body — white area */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <span className="text-brand">
                    <CalendarIcon />
                  </span>
                  {post.date}
                </div>

                <Link href="/blogs">
                  <h3 className="mt-3 text-lg leading-snug font-bold text-heading transition-colors duration-300 group-hover:text-[#469a36]">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>

                <Link
                  href="/blogs"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#3e8e33] transition-colors hover:text-[#2f7d1e]"
                >
                  Continue Reading
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- View all ---------- */}
        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40"
          >
            View All Articles
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}