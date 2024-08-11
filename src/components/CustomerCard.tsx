import React from 'react';

interface CustomerCardProps {
    name: string;
    username: string;
    onClick: () => void;
    isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ name, username, onClick, isSelected }) => {
    return (
        <div
            className={`customer-card ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <h3>{name}</h3>
            <p>@{username}</p>
        </div>
    );
};

export default CustomerCard;
