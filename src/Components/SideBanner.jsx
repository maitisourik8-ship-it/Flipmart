
import { Plane } from "lucide-react";

function SideBanner() {
  return (
    <div className="group relative flex min-h-45 flex-col items-center justify-between overflow-hidden bg-[#0752a4] px-2 py-3 text-center text-white sm:min-h-51.25">

      <Plane
        size={35}
        className="absolute left-2 top-2 rotate-[-25deg] animate-[float_3s_ease-in-out_infinite] text-white"
      />

      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 animate-pulse" />

      <p className="mt-7 animate-[fadeIn_0.8s_ease-out_both] text-[9px] font-semibold tracking-widest">
        BOOK YOUR
      </p>

      <h1 className="animate-[fadeIn_1s_ease-out_both] text-[26px] font-light leading-[1.05] tracking-wider text-yellow-300 transition-transform duration-500 group-hover:scale-105 sm:text-3xl">
        FLIGHT
        <br />
        TICKET
      </h1>

      <div className="w-full animate-[fadeIn_1.2s_ease-out_both] bg-yellow-400 py-1.5 transition-transform duration-300 group-hover:scale-105">
        <h2 className="animate-pulse text-sm font-extrabold text-blue-950">
          40% OFF
        </h2>
      </div>

      <button className="animate-[fadeIn_1.4s_ease-out_both] rounded-sm bg-white px-4 py-1 text-[8px] font-bold text-blue-900 shadow-md transition-all duration-300 hover:scale-110 hover:bg-yellow-300 hover:shadow-xl active:scale-95">
        BOOK NOW
      </button>

      <div className="absolute bottom-2 left-2 flex gap-1">
        <span className="h-1 w-1 animate-pulse rounded-full bg-white/70" />
        <span className="h-1 w-1 animate-pulse rounded-full bg-white/70 [animation-delay:300ms]" />
        <span className="h-1 w-1 animate-pulse rounded-full bg-white/70 [animation-delay:600ms]" />
      </div>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-25deg);
          }
          50% {
            transform: translateY(-8px) rotate(-15deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </div>
  );
}

export default SideBanner;

