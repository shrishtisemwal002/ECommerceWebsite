import React from 'react';
import "./style.css";

import serviceData from '../../Utils/data/serviceData';

const Services = () => {
  return (
    <div className='serviceContainer'>
        {serviceData.map((item,index) =>(
            <div className="service" key={index} style={{backgroundColor:`${item.bg}`}}>
            <span>
            <i class={item.icon}></i>
            </span>
            <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Services;
