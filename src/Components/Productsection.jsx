
const products = [
  {
    name: "Pulvinar augue",
    oldPrice: null,
    price: "$89.00",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300",
  },
  {
    name: "Marius ligula",
    oldPrice: "$55.00",
    price: "$27.00",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300",
  },
  {
    name: "Rorbi pulvina",
    oldPrice: null,
    price: "$79.00",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300",
  },
  {
    name: "Morbi varius",
    oldPrice: "$65.00",
    price: "$45.00",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300",
  },
  {
    name: "Fusce nec",
    oldPrice: "$100.00",
    price: "$99.00",
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=300",
  },
];

function ProductCard({ product, index }) {
  return (
    <div
      style={{
        animationDelay: `${index * 150}ms`,
      }}
      className="group flex min-w-0 animate-[fadeUp_0.7s_ease_both] flex-col items-center border border-gray-200 bg-white p-2 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="flex h-24 w-full items-center justify-center overflow-hidden sm:h-28">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <p className="mt-2 text-[9px] text-gray-700 transition-colors duration-300 group-hover:text-blue-600 sm:text-[10px]">
        {product.name}
      </p>

      <div className="mt-1 flex items-center justify-center gap-1 text-[9px]">
        {product.oldPrice && (
          <span className="text-gray-400 line-through">
            {product.oldPrice}
          </span>
        )}

        <span className="font-bold text-gray-800">
          {product.price}
        </span>
      </div>
    </div>
  );
}

function ProductSection() {
  return (
    <section className="min-w-0 bg-white p-3 sm:p-4">

      <h3 className="mb-4 text-xs font-semibold text-gray-800">
        Premium Products
      </h3>
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {products.map((product, index) => (
          <ProductCard
            key={product.name}
            product={product}
            index={index}
          />
        ))}
      </div>

      <style>{`
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
      `}</style>

    </section>
  );
}

export default ProductSection;


