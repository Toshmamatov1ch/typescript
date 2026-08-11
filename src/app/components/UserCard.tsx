import React from "react";
import { User } from "@/types/users";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {user.name} {user.surname}
            </h3>
            <p className="text-sm font-medium text-indigo-600">
              {user.profession}
            </p>
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              user.isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user.isActive ? "Faol" : "Infaol"}
          </span>
        </div>

        <div className="space-y-1.5 text-sm text-gray-600 border-t pt-3">
          <p>
            <span className="font-medium text-gray-700">Yoshi:</span> {user.age}{" "}
            da
          </p>
          <p>
            <span className="font-medium text-gray-700">Email:</span>{" "}
            {user.email}
          </p>
          <p>
            <span className="font-medium text-gray-700">Tel:</span> {user.phone}
          </p>
          <p>
            <span className="font-medium text-gray-700">Manzil:</span>{" "}
            {user.address}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t flex items-center justify-between">
        <span className="text-xs text-gray-500">Oylik maosh:</span>
        <span className="text-lg font-bold text-gray-900">${user.salary}</span>
      </div>
    </div>
  );
};
