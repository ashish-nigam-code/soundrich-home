import { useId } from "react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[linear-gradient(178deg,var(--e-global-color-5a70c28)_0%,#00D4FF_100%)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            See What Hearing Aid Users Think About Us!
          </h2>
          <p className="mt-4 text-base font-medium text-white/90 sm:text-lg">
            Valuable feedback from our customers, motivates us to serve better.
          </p>
        </div>

        {/* ---------- Video ---------- */}
        <div className="mt-10 w-full overflow-hidden rounded-2xl shadow-2xl">
          <video
            src="/assets/images/landingpageimages/new_video_ea875bb6.mp4"
            autoPlay
            muted
            loop
            controls
            preload="auto"
            playsInline
            className="h-[300px] w-full object-cover sm:h-[450px] lg:h-[550px]"
          />
        </div>

        {/* ---------- Reviews: summary + cards ---------- */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Summary card */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-xl sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <GoogleG className="h-8 w-8" />
              <p className="text-3xl font-bold text-heading sm:text-4xl">4.9</p>
            </div>
            <div>
              <p className="mt-2 text-sm font-bold text-heading">Google Reviews</p>
              <ReviewStars value={5} />
            </div>
            <span className="mt-4 self-start rounded-full border border-[#3b8fe4] px-3 py-1 text-[0.65rem] font-bold text-[#2f6fc4]">
              5,000+ Verified Reviews
            </span>

            {/* Rating breakdown */}
            <ul className="mt-5 flex-1 space-y-3">
              {RATING_BREAKDOWN.map((row) => (
                <li key={row.stars} className="flex items-center gap-2.5">
                  <span className="flex h-8 w-9 shrink-0 items-center justify-center rounded-lg bg-[#3d9be9] text-xs font-bold text-white">
                    {row.stars}
                    <span className="ml-0.5 text-[0.6rem]">★</span>
                  </span>
                  <ReviewStars value={row.stars === 2 ? 2 : row.stars > 4 ? 5 : row.stars + 0.5} />
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                    <span
                      className="block h-full rounded-full bg-[#3d9be9]"
                      style={{ width: `${row.share}%` }}
                    />
                  </span>
                  <span className="w-9 shrink-0 text-right text-xs font-bold text-heading">
                    {row.count}
                  </span>
                </li>
              ))}
            </ul>

            <span className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#2f6fc4] shadow-md ring-1 ring-slate-200 sm:text-sm">
              Trusted by Happy Customers
              <svg
                className="h-3.5 w-3.5 text-[#f5c518]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.918 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
              </svg>
            </span>
          </div>

          {/* Review cards */}
          <div className="grid gap-6 lg:col-span-2 sm:grid-cols-2">
            {REVIEWS.map((review, index) => (
              <figure
                key={`review-${review.name}-${index}`}
                className="flex h-full flex-col justify-between rounded-2xl bg-white p-5 shadow-xl sm:p-6"
              >
                <div>
                  {/* Author row */}
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${review.avatarClass}`}
                    >
                      {review.name.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-heading">{review.name}</p>
                      <p className="text-[0.7rem] text-body/70">{review.meta}</p>
                    </div>
                    <GoogleG className="h-4 w-4 shrink-0" />
                  </div>

                  <ReviewStars value={5} className="mt-2.5" />

                  <blockquote className="mt-2.5 text-[0.82rem] leading-relaxed text-body">
                    <p>{review.text}</p>
                  </blockquote>
                </div>

              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Data ---------- */

const RATING_BREAKDOWN = [
  { stars: 5, share: 100, count: "3,784" },
  { stars: 4, share: 25, count: "946" },
  { stars: 3, share: 7, count: "258" },
  { stars: 2, share: 2, count: "14" },
];

const REVIEWS = [
  {
    name: "Swarsudha",
    meta: "Dwarka",
    avatarClass: "bg-[#546e7a]",
    text: "“I bought Phonak L30-R kit hearing aid for my husband . Audiologist Mr. Gautam is very polite, co operative and amiable person. He very patiently answered to our all queries. A very comfortable and pleasing environment while going through whole process. Satisfactory experience. I highly recommend Soundrich for the people who are searching for the right place to buy hearing Aids.”",
  },
  {
    name: "Harshit Sultania",
    meta: "Dwarka",
    avatarClass: "bg-[#7e57c2]",
    text: "“I couldn't be happier with the experience we had at Soundrich Hearing. I recently got a Signia hearing aid for my grandmother, and it has been life-changing for her. The doctor is incredibly polite, patient, and genuinely helpful—which was so important to us. He is always supportive. Seeing her happy and hearing clearly again is the best feeling. Highly recommend them. ”",
  },
  {
    name: "Param Puneet Singh",
    meta: "Dwarka",
    avatarClass: "bg-slate-500",
    text: "“We had a great experience at Soundrich. From the moment we walked in, the service was warm, professional, and well organised. The facilities are modern and comfortable, and the pricing felt fair and transparent. What really stood out was the patience and care with which the team handled my mother’s hearing tests. They took their time, explained each step clearly, answered all our questions, and never made us feel rushed. The staff was extremely professional, knowledgeable, and empathetic, which made the entire process stress-free. I would definitely recommend Soundrich to anyone looking for reliable hearing aid solutions with excellent service and genuine care.”",
  },
 {
    name: "Swarsudha",
    meta: "Dwarka",
    avatarClass: "bg-[#546e7a]",
    text: "“I bought Phonak L30-R kit hearing aid for my husband . Audiologist Mr. Gautam is very polite, co operative and amiable person. He very patiently answered to our all queries. A very comfortable and pleasing environment while going through whole process. Satisfactory experience. I highly recommend Soundrich for the people who are searching for the right place to buy hearing Aids.”",
  },
];

/* ---------- Small pieces ---------- */

function GoogleG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function ReviewStars({ value, className = "" }: { value: number; className?: string }) {
  const uid = useId();
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" aria-hidden="true">
            <defs>
              <linearGradient id={`star-${uid}-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="#f6a623" />
                <stop offset={`${fill * 100}%`} stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${uid}-${i})`}
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            />
          </svg>
        );
      })}
    </div>
  );
}
