import React from "react";
import { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">
            {car.brand} {car.model}
          </h3>
          <span className="text-xs font-bold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">
            {car.year}
          </span>
        </div>

        <div className="mt-3 space-y-1.5 text-sm text-gray-600 border-t pt-3">
          <p>
            <span className="font-medium text-gray-700">Rangi:</span>{" "}
            {car.color}
          </p>
          <p>
            <span className="font-medium text-gray-700">Yurgani:</span>{" "}
            {car.mileage.toLocaleString()} km
          </p>
          <p>
            <span className="font-medium text-gray-700">Yoqilg'i:</span>{" "}
            {car.fuel}
          </p>
          <p>
            <span className="font-medium text-gray-700">Koraobka:</span>{" "}
            {car.transmission}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t flex items-center justify-between">
        <span className="text-xl font-bold text-indigo-600">
          ${car.price.toLocaleString()}
        </span>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            car.isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {car.isAvailable ? "Mavjud" : "Sotilgan"}
        </span>
      </div>
    </div>
  );
};
