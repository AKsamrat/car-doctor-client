import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
      });
  }, []);

  return (
    <div className=" md:mt-36">
      <p className="text-red-500 font-bold text-lg text-center">Services</p>
      <h1 className="text-4xl font-bold text-center">Our Service Area</h1>
      <p className="text-center">
        The majority have suffered alteration in some form, by injected humour,
        or <br /> randomised words which don't look even slightly believable.{' '}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {services?.map(service => (
          <div className="card  bg-base-100 shadow-xl" key={service._id}>
            <figure>
              <img src={service.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl">{service.title}</h2>
              <div className="card-actions justify-end items-center">
                <p className="font-bold text-[#FF3811] text-[20px]">
                  {' '}
                  Price :$ {service.price}
                </p>
                <Link to={`/checkOut/${service._id}`}>
                  <button className="btn text-[#FF3811]">
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
