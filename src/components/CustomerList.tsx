import React from 'react';
import CustomerCard from './CustomerCard';

interface Customer {
    id: number;
    name: string;
    username: string;
}

interface CustomerListProps {
    customers: Customer[];
    selectedCustomerId: number | null;
    onSelect: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelect }) => {
    return (
        <div className="customer-list">
            {customers.map(customer => (
                <CustomerCard
                    key={customer.id}
                    name={customer.name}
                    username={customer.username}
                    onClick={() => onSelect(customer.id)}
                    isSelected={customer.id === selectedCustomerId}
                />
            ))}
        </div>
    );
};

export default CustomerList;
