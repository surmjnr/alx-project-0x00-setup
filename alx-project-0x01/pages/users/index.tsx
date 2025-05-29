import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">Users Page</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {posts?.map((user, idx) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users; 