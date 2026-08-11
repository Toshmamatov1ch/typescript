import { users } from "@/data/users";
import { UserCard } from "@/app/components/UserCard";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Foydalanuvchilar</h1>
        <p className="text-gray-500 mt-1">
          Jami: {users.length} ta foydalanuvchi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
