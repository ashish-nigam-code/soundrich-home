import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    title: "Home Hearing Aid Consultation in Delhi NCR",
    category: "Best Hearing Aids Mumbai",
    date: "September 4, 2026",
    excerpt:
      "Hearing is something most of us take for granted — until everyday sounds slowly begin to fade. Discover what makes Soundrich a trusted name in Mumbai.",
    image: "/assets/images/blog/06.jpg",
  },
  {
    title: "Why Do I Keep Increasing the TV Volume",
    category: "Best Hearing Aids Delhi",
    date: "September 1, 2026",
    excerpt:
      "Hearing loss can gradually change the way a person experiences everyday life. Explore cheap, high-quality hearing aid solutions in Uttam Nagar, Delhi.",
    image: "/assets/images/blog/03.jpeg",
  },
  {
    title: "Early Signs of Hearing Loss in Adults You Should Not Ignore",
    category: "Best Hearing Aids Delhi",
    date: "August 31, 2026",
    excerpt:
      "Conversations shouldn't be a struggle. Meet expert audiologists in Shahdara and find the right hearing aid for your lifestyle.",
    image: "/assets/images/blog/01.jpg",
  },
  {
    title: "Best Hearing Aid Styles for People Who Wear Glasses",
    category: "Hearing Care Tips",
    date: "October 15, 2026",
    excerpt:
      "Regular hearing check-ups can catch problems early. Our specialist performs comprehensive evaluations and recommends the best solutions for your lifestyle.",
    image: "/assets/images/blog/02.jpg",
  },
  {
    title: "Hearing Test vs Hearing Aid Consultation",
    category: "Patient Stories",
    date: "October 10, 2026",
    excerpt:
      "Compassionate care makes all the difference when addressing hearing loss. Meet our audiologists who prioritize patient comfort and clear communication.",
    image: "/assets/images/blog/04.jpeg",
  },
  {
    title: "How to Choose a Reliable Hearing Aid Centre in Delhi",
    category: "Understanding Hearing",
    date: "October 5, 2026",
    excerpt:
      "Hearing loss can gradually change the way a person experiences everyday life. Learn about causes, prevention, and treatment options for long-term hearing health.",
    image: "/assets/images/blog/05.jpg",
  },
  {
    title: "How to Travel With Hearing Aids: Airport & Flight",
    category: "Technology",
    date: "September 28, 2026",
    excerpt:
      "Check if your hearing aids are compatible with the latest Signia app features. Our team helps you get the most out of your device's smart connectivity.",
    image: "/assets/images/blog/07.jpg",
  },
  {
    title: "What Happens During a Hearing Aid Fitting Appointment",
    category: "Company",
    date: "September 20, 2026",
    excerpt:
      "Learn about Soundrich Hearing's mission, values, and commitment to improving quality of life through better hearing.",
    image: "/assets/images/blog/08.jpg",
  },
];

function CalendarIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
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
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#35c3e8]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
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
          <h2
            className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Latest News & Hearing Insights
          </h2>
          <p className="text-base leading-relaxed text-white/75 sm:text-lg">
            Expert advice, hearing care tips and the latest from Soundrich Hearing
            across Delhi NCR and beyond.
          </p>
        </div>

        {/* ---------- Blog cards ---------- */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="group relative rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-sm"
            >
              {/* Top section: gradient background with blog image on right, overlay text on left */}
              <div className="relative h-48 flex items-start">
                {/* Gradient background: pale green/teal top right to off-white/cream bottom */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a8e6cf] to-[#f5f5f5]" />
                {/* Horizontal surface line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-300" />
                {/* Blog image on the right side */}<Image
                  src={post.image}
                  alt={post.title}
                  width={480}
                  height={480}
                  className="absolute right-0 top-0 w-full h-full object-cover" />
              </div>

              {/* Bottom section: solid bright blue */}
              <div className="bg-[#0073C2] p-5 sm:p-6">
                <p className="text-white font-bold text-[21px] uppercase tracking-wider line-clamp-3 block">
                  {post.title}
                </p>
                <Link
                  href="/blogs"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-blue-600 text-sm font-bold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                >
                  Read More
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