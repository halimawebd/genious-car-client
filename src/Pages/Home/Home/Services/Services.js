import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
       .then(res =>res.json())
        .then(data =>setServices(data))
    }, [])
    return (
        <div className='w-[1400px] mx-auto'>
            <div className='text-center mb-4 '>
            <p className=' text-2xl font-bold text-orange-600'>Services</p>
            <h2 className="text-5xl font-semibold">Our Services Area</h2>
            <p>The majority have suffered alteration in some from, by injected humour, 
                <br/> randomised words which don't look even slightly belieable.</p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    
        {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
            
        }
    </div>
        </div>
       
    );
};

export default Services;