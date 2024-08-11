import React from 'react';
import PhotoGrid from './PhotoGrid';

interface Address {
    street: string;
    city: string;
    zipcode: string;
}

interface CustomerDetailsProps {
    name: string;
    username: string;
    address: Address;
    photos: string[];
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ name, username, address, photos }) => {
    return (
        <div className="customer-details">
            <div className='customer-name'>{name}</div>
            <div className='customer-title'>@{username}</div>
            <div className='customer-address'>{`${address.street}, ${address.city}, ${address.zipcode}`}</div >
            <PhotoGrid photos={photos} />
        </div>
    );
};

export default CustomerDetails;

