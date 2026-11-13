
import {
  ShoppingBag,
  Search,
  Heart,
  UserRound,
  ShoppingCart,
} from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 bg-white px-4 py-3 shadow-sm
      animate-[slideDown_0.7s_ease-out]">

      <div className="group flex cursor-pointer items-center gap-1 text-xl font-extrabold text-blue-600
        transition-transform duration-300 hover:scale-105">

        <ShoppingBag
          size={25}
          className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
        />

        <span className="tracking-tight">
          Flipmart
        </span>
      </div>

      <div className="order-3 flex h-10 w-full items-center gap-2 rounded-lg
        bg-blue-50 px-3 text-gray-500 transition-all duration-300
        focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-400
        md:order-0 md:w-[45%]">

        <Search
          size={17}
          className="shrink-0 transition-transform duration-300 group-hover:scale-110"
        />

        <input
          type="text"
          placeholder="Search for Products, Brand and More"
          className="w-full bg-transparent text-xs text-gray-700 outline-none"
        />
      </div>

      <button className="relative overflow-hidden rounded-full bg-blue-600
        px-5 py-2.5 text-[10px] font-semibold text-white shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200
        active:scale-95">

        <span className="relative z-10">
          Become a Vendor
        </span>
      </button>

      <div className="flex items-center gap-4 text-gray-600">

        {[
          { Icon: Search, label: "Search" },
          { Icon: Heart, label: "Wishlist" },
          { Icon: UserRound, label: "Account" },
          { Icon: ShoppingCart, label: "Cart" },
        ].map(({ Icon, label }, index) => (
          <button
            key={label}
            aria-label={label}
            style={{ animationDelay: `${index * 100}ms` }}
            className="group relative flex cursor-pointer items-center justify-center
              animate-[fadeIn_0.6s_ease-out_both]
              transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
          >
            <Icon
              size={19}
              strokeWidth={1.8}
              className="transition-transform duration-300
                group-hover:scale-125 group-hover:rotate-[-8deg]"
            />

            <span className="absolute -bottom-5 scale-0 whitespace-nowrap
              text-[9px] font-medium text-blue-600 opacity-0
              transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              {label}
            </span>
          </button>
        ))}

      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </header>
  );
}

export default Navbar;
