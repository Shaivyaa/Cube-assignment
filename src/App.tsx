import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import useFetchUsers from './hooks/useFetchUsers';
import useFetchPhotos from './hooks/useFetchPhotos';
import './styles/App.css';

const App: React.FC = () => {
  const { users, loading } = useFetchUsers();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const photos = useFetchPhotos(selectedUserId); // Fetch photos based on selected customer

  const selectedUser = selectedUserId !== null
    ? users.find(user => user.id === selectedUserId)
    : null;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <CustomerList
        customers={users.map(user => ({
          id: user.id,
          name: user.name,
          username: user.username
        }))}
        selectedCustomerId={selectedUserId}
        onSelect={setSelectedUserId}
      />
      {selectedUser && (
        <CustomerDetails
          name={selectedUser.name}
          username={selectedUser.username}
          address={selectedUser.address}
          photos={photos} // Pass the fetched photos to CustomerDetails
        />
      )}
    </div>
  );
};

export default App;
