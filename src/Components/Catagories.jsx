
const categories = [
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
  },
  {
    name: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200",
  },
  {
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200",
  },
  {
    name: "Best Deals",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=200",
  },
  {
    name: "Best Seller",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
  },
  {
    name: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200",
  },
  {
    name: "Chair",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=200",
  },
  {
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=200",
  },
  {
    name: "Computer & Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200",
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200",
  },
];

function Categories() {
  return (
    <section className="mx-1 mt-1 flex items-center justify-between gap-2 overflow-x-auto bg-white px-4 py-4 scrollbar-hide">

      {categories.map((item, index) => (
        <div
          key={item.name}
          style={{
            animationDelay: `${index * 120}ms`,
          }}
          className="group flex min-w-16.25 shrink-0 cursor-pointer flex-col items-center
          animate-[fadeInUp_0.7s_ease-out_both]
          transition-all duration-300
          hover:-translate-y-2"
        >

          <div className="relative flex h-12 w-12 items-center justify-center
          overflow-hidden rounded-lg bg-gray-100 shadow-sm
          transition-all duration-500
          group-hover:shadow-lg group-hover:shadow-blue-200
          group-hover:scale-110">

            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="h-full w-full object-cover
              transition-transform duration-700 ease-in-out
              group-hover:scale-125 group-hover:rotate-3"
            />


            <div className="absolute inset-0 bg-blue-500/0
            transition-all duration-300
            group-hover:bg-blue-500/10">
            </div>

          </div>

          <p className="mt-2 whitespace-nowrap text-[9px] font-medium
          text-gray-700 transition-all duration-300
          group-hover:scale-105 group-hover:font-semibold
          group-hover:text-blue-600">
            {item.name}
          </p>

        </div>
      ))}

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </section>
  );
}

export default Categories;

