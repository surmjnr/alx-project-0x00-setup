import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [addressField]: value }
      }));
    } else if (name.startsWith("geo.")) {
      const geoField = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, geo: { ...prev.address.geo, [geoField]: value } }
      }));
    } else if (name.startsWith("company.")) {
      const companyField = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [companyField]: value }
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" value={user.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter name" />
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
              <input type="text" id="username" name="username" value={user.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter username" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" value={user.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
              <input type="text" id="phone" name="phone" value={user.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter phone" />
            </div>
            <div>
              <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
              <input type="text" id="website" name="website" value={user.website} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter website" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="address.suite" value={user.address.suite} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg mb-2" placeholder="Suite" />
              <input type="text" name="address.street" value={user.address.street} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg mb-2" placeholder="Street" />
              <input type="text" name="address.city" value={user.address.city} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg mb-2" placeholder="City" />
              <input type="text" name="address.zipcode" value={user.address.zipcode} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg mb-2" placeholder="Zipcode" />
              <input type="text" name="geo.lat" value={user.address.geo.lat} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg mb-2" placeholder="Latitude" />
              <input type="text" name="geo.lng" value={user.address.geo.lng} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg mb-2" placeholder="Longitude" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Company</label>
            <div className="grid grid-cols-3 gap-4">
              <input type="text" name="company.name" value={user.company.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg mb-2" placeholder="Company Name" />
              <input type="text" name="company.catchPhrase" value={user.company.catchPhrase} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg mb-2" placeholder="Catch Phrase" />
              <input type="text" name="company.bs" value={user.company.bs} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg mb-2" placeholder="BS" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal; 