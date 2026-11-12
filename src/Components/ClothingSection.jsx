
const clothingProducts = [
  {
    name: "Dignisim",
    oldPrice: "$100.00",
    price: "$80.00",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400",
  },
  {
    name: "Eratcelerisque",
    oldPrice: "$136.00",
    price: "$142.00",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
  },
  {
    name: "Red justo",
    price: "$300.00",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400",
  },
  {
    name: "Paque",
    price: "$89.00",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
  },
  {
    name: "Acelerisque",
    price: "$119.00",
    image:
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=400",
  },
  {
    name: "rectus femaur",
    price: "$22.00",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400",
  },
];

function ClothingSection() {
  return (
    <section className="mx-1 mt-3 bg-white p-3 sm:p-4">

      <h2 className="mb-4 text-xs font-semibold text-gray-800 sm:text-sm animate-[fadeUp_0.6s_ease-out_both]">
        Clothing and Girls Collections
      </h2>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 md:gap-2">

        {clothingProducts.map((product, index) => (
          <div
            key={product.name}
            style={{ animationDelay: `${index * 120}ms` }}
            className="group flex min-w-0 animate-[fadeUp_0.7s_ease-out_both] flex-col items-center border border-gray-200 bg-white p-2 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
          >

            <div className="flex h-32 w-full items-center justify-center overflow-hidden sm:h-36">

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

            <div className="mt-1 flex flex-wrap items-center justify-center gap-1 text-[9px]">

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

export default ClothingSection;
