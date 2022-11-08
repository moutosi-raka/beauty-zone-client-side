import React from 'react';
import { Link } from "react-router-dom";

const ServicesCartDetails = ({service}) => {
    const {_id, service_name, price, details, img } = service;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md service-cart">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase text-pink-500">
            Price: {price}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{service_name}</h2>
        </div>
        <p className="dark:text-gray-100 mb-4">{details.slice(0,100) + "..."}</p>
        <div>
          <Link to={`/checkout/${_id}`}><button className="btn btn-outline btn-secondary w-1/2">See Details</button></Link>
        </div>
      </div>
    );
};

export default ServicesCartDetails;