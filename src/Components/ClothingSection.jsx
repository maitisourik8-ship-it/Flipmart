
const clothingProducts = [
  {
    name: "Dignisim",
    oldPrice: "$100.00",
    price: "$80.00",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400",
  },
  {
    name: "Eratcelerisque",
    oldPrice: "$136.00",
    price: "$142.00",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
  },
  {
    name: "Red justo",
    price: "$300.00",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400",
  },
  {
    name: "Paque",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
  },
  {
    name: "Acelerisque",
    price: "$119.00",
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=400",
  },
  {
    name: "rectus femaur",
    price: "$22.00",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400",
  },
];

function ClothingCard({ product, index }) {
  return (
    <div
      key={product.name}
      style={{ animationDelay: `${index * 150}ms` }}
      className="clothing-card group relative flex min-w-0 cursor-pointer
      animate-[fadeUp_0.8s_ease_both] flex-col items-center
      overflow-hidden rounded-md border border-gray-200 bg-white
      p-2 text-center shadow-sm
      transition-all duration-500 ease-out
      hover:-translate-y-3 hover:scale-[1.02]
      hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100"
    >

      {/* Sale Badge */}
      {product.oldPrice && (
        <span className="absolute left-2 top-2 z-10 rounded-full
          bg-red-500 px-2 py-1 text-[8px] font-bold text-white
          animate-[badgePop_0.6s_ease-out_both]
          transition-transform duration-300 group-hover:scale-110">
          SALE
        </span>
      )}

      {/* Product Image */}
      <div className="relative flex h-32 w-full items-center
        justify-center overflow-hidden sm:h-36">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain
          transition-all duration-700 ease-in-out
          group-hover:scale-125 group-hover:rotate-2"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-blue-500/0
          transition-all duration-500
          group-hover:bg-blue-500/4">
        </div>
      </div>

      {/* Product Name */}
      <p className="mt-2 text-[9px] text-gray-700
        transition-all duration-300
        group-hover:font-semibold group-hover:text-blue-600
        sm:text-[10px]">
        {product.name}
      </p>

      {/* Product Price */}
      <div className="mt-1 flex flex-wrap items-center justify-center
        gap-1 text-[9px]">

        {product.oldPrice && (
          <span className="text-gray-400 line-through
            transition-colors duration-300 group-hover:text-red-400">
            {product.oldPrice}
          </span>
        )}

        <span className="font-bold text-gray-800
          transition-all duration-300
          group-hover:scale-110 group-hover:text-blue-600">
          {product.price}
        </span>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 h-0.75 w-0
        bg-blue-600 transition-all duration-500
        group-hover:w-full">
      </div>

      {/* Shimmer Effect */}
      <div className="pointer-events-none absolute inset-0
        -translate-x-full bg-linear-to-r
        from-transparent via-white/40 to-transparent
        transition-transform duration-1000
        group-hover:translate-x-full">
      </div>

    </div>
  );
}

function ClothingSection() {
  return (
    <section className="mx-1 mt-3 min-w-0 overflow-hidden
      bg-white p-3 sm:p-4">

      {/* Section Heading */}
      <div className="mb-4 flex items-center justify-between
        animate-[fadeUp_0.6s_ease-out_both]">

        <h2 className="text-xs font-semibold text-gray-800 sm:text-sm">
          Clothing and Girls Collections
        </h2>

        <span className="cursor-pointer text-[9px] font-medium
          text-blue-600 transition-all duration-300
          hover:translate-x-1 hover:text-blue-800">
          View All →
        </span>

      </div>

      {/* Clothing Products Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3
        md:grid-cols-6 md:gap-2">

        {clothingProducts.map((product, index) => (
          <ClothingCard
            key={product.name}
            product={product}
            index={index}
          />
        ))}

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes badgePop {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          70% {
            transform: scale(1.15);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clothing-card {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

    </section>
  );
}

export default ClothingSection;
