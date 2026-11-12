
const categories = [
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100",
  },
  {
    name: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200",
  },
  {
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100",
  },
  {
    name: "Best Deals",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=100",
  },
  {
    name: "Best Seller",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100",
  },
  {
    name: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100",
  },
  {
    name: "Chair",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=100",
  },
  {
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=100",
  },
  {
    name: "Computer & Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100",
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100",
  },
];

function Categories() {
  return (
    <section className="mx-1 mt-1 flex items-center justify-between gap-2 overflow-x-auto bg-white px-4 py-3">

      {categories.map((item, index) => (
        <div
          key={item.name}
          style={{ animationDelay: `${index * 100}ms` }}
          className="group flex min-w-16.35 shrink-0 cursor-pointer flex-col items-center animate-[fadeInUp_0.6s_ease-out_both] transition-transform duration-300 hover:-translate-y-1"
        >

          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-sm bg-gray-100 sm:h-11 sm:w-11">

            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
            />

          </div>

          <p className="mt-1 whitespace-nowrap text-[9px] font-medium text-gray-700 transition-colors duration-300 group-hover:text-blue-600">
            {item.name}
          </p>

        </div>
      ))}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}

export default Categories;
