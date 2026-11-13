
import { useState, useEffect } from "react";

function MenFashionBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const bannerImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1400",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1400",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner-section mx-2 my-4 overflow-hidden rounded-xl
      border border-gray-200 bg-white shadow-sm
      animate-[bannerEntry_0.9s_ease-out_both]">

      <div className="grid grid-cols-1 md:grid-cols-[35%_65%]">

        <div className="bg-white p-4">

          <h2 className="mb-4 text-lg font-semibold text-gray-700
            animate-[fadeUp_0.8s_ease-out_both]">
            Men's Fashion
          </h2>

          <div className="grid grid-cols-2 gap-3">

            <div className="fashion-image group relative h-44
              overflow-hidden rounded-md border border-gray-200 bg-gray-50
              animate-[imageEntry_0.9s_ease-out_both]">

              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500"
                alt="Men's fashion"
                className="h-full w-full object-cover object-top
                transition-all duration-700 ease-in-out
                group-hover:scale-125 group-hover:rotate-2"
              />

              <div className="absolute inset-0 bg-blue-900/0
                transition-all duration-500 group-hover:bg-blue-900/10" />
            </div>

            <div className="fashion-image group relative h-44
              overflow-hidden rounded-md border border-gray-200 bg-gray-50
              animate-[imageEntry_1.1s_ease-out_both]">

              <img
                src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500"
                alt="Men's formal fashion"
                className="h-full w-full object-cover object-top
                transition-all duration-700 ease-in-out
                group-hover:scale-125 group-hover:-rotate-2"
              />

              <div className="absolute inset-0 bg-blue-900/0
                transition-all duration-500 group-hover:bg-blue-900/10" />
            </div>

          </div>
        </div>

        <div className="group relative min-h-70 overflow-hidden bg-gray-200 sm:min-h-80">

          {bannerImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Fashion collection ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover
                transition-opacity duration-1000 ease-in-out
                ${
                  activeSlide === index
                    ? "animate-[kenBurns_4s_ease-out_both] opacity-100"
                    : "scale-100 opacity-0"
                }`}
            />
          ))}

          <div className="absolute inset-0 bg-linear-to-r
            from-white/75 via-white/35 to-transparent" />

          <div className="relative z-10 flex min-h-70 flex-col
            justify-center px-6 py-8 sm:min-h-80 sm:px-10 md:px-12">

            <span key={`tag-${activeSlide}`}
              className="mb-3 w-fit rounded-full bg-blue-600
              px-3 py-1 text-[10px] font-semibold uppercase tracking-wider
              text-white animate-[fadeUp_0.7s_ease-out_both]">
              New Collection
            </span>

            <h1
              key={`heading-${activeSlide}`}
              className="max-w-lg text-2xl font-bold text-gray-900
              sm:text-3xl md:text-4xl
              animate-[textReveal_0.9s_ease-out_both]"
            >
              Top Selling Products
            </h1>

            <p
              key={`description-${activeSlide}`}
              className="mt-3 max-w-md text-sm font-medium text-gray-700
              sm:text-base animate-[fadeUp_1.1s_ease-out_both]"
            >
              Trending Now: Must-Have Styles for Every Occasion
            </p>

            <button className="mt-5 w-fit rounded-full bg-blue-600
              px-6 py-2.5 text-xs font-semibold text-white shadow-md
              transition-all duration-300
              hover:-translate-y-1 hover:scale-105
              hover:bg-blue-700 hover:shadow-xl active:scale-95">
              Explore Collection →
            </button>

          </div>

          <div className="absolute bottom-4 right-5 z-20 flex items-center gap-2">

            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500
                  ${
                    activeSlide === index
                      ? "w-8 bg-blue-600 shadow-md"
                      : "w-2.5 bg-white/80 hover:w-5 hover:bg-white"
                  }`}
              />
            ))}

          </div>

          <div className="absolute right-5 top-4 z-20 rounded-full
            bg-black/30 px-3 py-1 text-[10px] font-semibold text-white
            backdrop-blur-sm">
            {String(activeSlide + 1).padStart(2, "0")} / 04
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bannerEntry {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageEntry {
          from {
            opacity: 0;
            transform: translateX(-25px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateX(-35px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes kenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.12);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .banner-section,
          .fashion-image {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

    </section>
  );
}

export default MenFashionBanner;

