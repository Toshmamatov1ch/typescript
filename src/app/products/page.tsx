import { products } from "@/data/product";
import { ProductCard } from "@/app/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Mahsulotlar sahifasi
        </h1>
        <p className="text-gray-500 mt-1">
          Jami: {products.length} ta mahsulot mavjud
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
