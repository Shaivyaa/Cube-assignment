import React from 'react';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
    name: string;
    username: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
    photos: string[];
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ name, username, address, photos }) => {
    return (
        <div className="customer-details">
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{address.street}, {address.city}, {address.zipcode}</p>
            <PhotoGrid photos={photos} />
        </div>
    );
};

export default CustomerDetails;
