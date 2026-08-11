import React from "react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-md">
            {product.category}
          </span>
          <span className="text-sm text-yellow-500 font-bold">
            ★ {product.rating}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
        <p className="text-xs text-gray-400 font-medium">
          Brend: {product.brand}
        </p>

        <div className="mt-3 space-y-1 text-sm text-gray-600 border-t pt-3">
          <p>
            <span className="font-medium text-gray-700">Rangi:</span>{" "}
            {product.color}
          </p>
          <p>
            <span className="font-medium text-gray-700">Kafolat:</span>{" "}
            {product.warranty}
          </p>
          <p>
            <span className="font-medium text-gray-700">Omborda:</span>{" "}
            {product.stock} ta
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900">
          ${product.price}
        </span>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            product.isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {product.isAvailable ? "Sotuvda bor" : "Mavjud emas"}
        </span>
      </div>
    </div>
  );
};
