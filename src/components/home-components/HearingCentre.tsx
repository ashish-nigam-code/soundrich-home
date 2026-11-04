import Image from "next/image";
import Link from "next/link";

export default function HearingCentre() {
  return (
    <section
      id="hearing-centre"
      className="relative bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[45fr_55fr] lg:gap-20">
          {/* ---- Left: image with guarantee badge ---- */}
          <div>
            <div className="relative">
              <Image
                src="/assets/images/landingpageimages/asx-bank-shares-rask-min-e1660899665924.webp"
                alt="Soundrich Hearing guarantee"
                width={575}
                height={600}
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="h-auto w-full rounded-2xl"
              />
              <Image
                src="/assets/images/landingpageimages/Best-quality-image.webp"
                alt="Best quality guarantee"
                width={385}
                height={349}
                sizes="14rem"
                className="absolute -bottom-6 right-0 w-32 -rotate-12 sm:w-40"
              />
            </div>
          </div>

          {/* ---- Right: heading + content + appointment CTA ---- */}
          <div>
            <h2 className="text-2xl leading-snug font-bold text-heading sm:text-3xl">
              Looking for a hearing centre near you? Look no further! Our team
              of experts are here to help you with all of your hearing needs.
            </h2>

            <div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-body">
              <p>
                If you&rsquo;re looking for a hearing aid center near you, look
                no further! We have the best selection of hearing aids and
                accessories to fit your needs. Come in and see us today!
              </p>

              <p>
                We believe that everyone should hear well to live well. We
                don&rsquo;t compromise on quality. And to aid the unfortunate
                ones who support from hearing loss, we offer hearing aid
                products from some of the best global brands. Our treatment is
                offered after careful medical considerations and not commercial
                ones. Moreover, we endeavor to guarantee the highest levels of
                customer satisfaction through offering a high quality of
                service.
              </p>

              <p>
                All our clinics adhere to the highest service standards and
                provide personalized service. You will be greeted inside within
                a minute of your arrival. Additionally, we also offer free
                telephonic counselling. What&rsquo;s more, if you wish to get
                your hearing test done at home, we offer home-visits too. With
                us, you get a free 7-days introductory trial for the hearing aid
                before you choose to make the purchase. Moreover, you will be
                able to avail of lifelong after-sales service and support for
                hearing aids.
              </p>

              <p>
                If you&rsquo;re looking for a hearing aid center near you, look
                no further! We&rsquo;re your one-stop shop for all your hearing
                aid needs. Come see us today!
              </p>
            </div>

            <Link
              href="/contact-us"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 border-brand px-7 py-3 text-sm font-bold text-brand transition-colors duration-300 hover:bg-brand hover:text-white"
            >
              Request an Appointment
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
