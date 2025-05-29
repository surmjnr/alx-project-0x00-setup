import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-800">{name}</h2>
        <span className="text-sm text-gray-500">@{username}</span>
      </div>
      <p className="text-gray-700 mb-2">{email}</p>
      <div className="mb-2">
        <span className="font-semibold text-gray-800">Address:</span>
        <span className="ml-2 text-gray-600">{address.suite}, {address.street}, {address.city}, {address.zipcode}</span>
      </div>
      <div className="mb-2 flex flex-wrap gap-4">
        <span className="text-gray-600">📞 {phone}</span>
        <span className="text-gray-600">🌐 {website}</span>
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded">
        <span className="block font-semibold text-blue-700">{company.name}</span>
        <span className="block text-sm text-blue-500 italic">{company.catchPhrase}</span>
        <span className="block text-xs text-blue-400">{company.bs}</span>
      </div>
    </div>
  );
};

export default UserCard; 