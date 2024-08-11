import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const generateMockUsers = (baseUsers: User[], totalCount: number): User[] => {
    const mockUsers: User[] = [];
    const multiplier = Math.ceil(totalCount / baseUsers.length);

    for (let i = 0; i < multiplier; i++) {
      baseUsers.forEach((user) => {
        const newUser = { ...user, id: user.id + i * baseUsers.length };
        mockUsers.push(newUser);
      });
    }

    return mockUsers.slice(0, totalCount);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        const mockUsers = generateMockUsers(response.data, 1000);
        setUsers(mockUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading };
};

export default useFetchUsers;
