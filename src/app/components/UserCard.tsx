import React from "react";
import { Users } from "../../types/user";

interface UserCardProps {
  user: Users;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <span
          className={`px-2.5 py-1 text-xs font-medium rounded-full ${
            user.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {user.isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <p className="text-sm text-gray-600">{user.email}</p>

      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        Role: <span className="text-gray-800 capitalize">{user.role}</span>
      </div>

      <div className="mt-2">
        <p className="text-xs text-gray-500 mb-1">Skills:</p>
        <div className="flex flex-wrap gap-1.5">
          {user.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
