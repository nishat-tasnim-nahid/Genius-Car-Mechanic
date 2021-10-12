import React, { useEffect, useState } from "react";
import './Services.css'
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-primary mt-5">Our Services</h2>
      <div className="service-container">
        {
          services.map((service) => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
