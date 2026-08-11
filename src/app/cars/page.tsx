import { cars } from "@/data/cars";
import { CarCard } from "@/app/components/CarCard";

export default function CarsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Mashinalar sahifasi
        </h1>
        <p className="text-gray-500 mt-1">
          Jami: {cars.length} ta mashina mavjud
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((item) => (
          <CarCard key={item.id} car={item} />
        ))}
      </div>
    </div>
  );
}
