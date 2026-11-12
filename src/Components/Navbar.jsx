import {
  ShoppingBag,
  Search,
  Heart,
  UserRound,
  ShoppingCart,
} from "lucide-react";

function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 bg-white px-4 py-2 shadow-sm">

      <div className="flex items-center gap-1 text-xl font-extrabold text-blue-600">
        <ShoppingBag size={23} />
        <span>Flipmart</span>
      </div>

      <div className="order-3 flex h-9 w-full items-center gap-2 rounded bg-blue-50 px-3 text-gray-500 md:order-0 md:w-[45%]">
        <Search size={16} />

        <input
          type="text"
          placeholder="Search for Products, Brand and More"
          className="w-full bg-transparent text-xs outline-none"
        />
      </div>

      <button className="rounded-full bg-blue-600 px-4 py-2 text-[10px] font-semibold text-white hover:bg-blue-700">
        Become a Vendor
      </button>

      <div className="flex items-center gap-3 text-gray-600">
        <Search size={17} />
        <Heart size={17} />
        <UserRound size={17} />
        <ShoppingCart size={17} />
      </div>

    </header>
  );
}

export default Navbar;