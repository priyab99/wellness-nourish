'use client'

import React from 'react';
import CountUp from 'react-countup';

const SectionTwo = () => {
    
  return (
    <div>
      <div className="stats shadow mt-5 w-3/4 mx-auto flex justify-content space-between mb-5 border-lime-600">

        <div className="stat">
          <div className="stat-figure text-secondary">
           
          </div>
          <div className="stat-title">Trusted Clients</div>
          <div className="stat-value">
            <CountUp start={0} end={99} duration={2.5} separator="," />+
          </div>
        
        </div>

        <div className="stat">
         
          <div className="stat-title">Protien Delivered</div>
          <div className="stat-value">
            <CountUp start={0} end={36} duration={2.5} separator="," />
            kg
          </div>
          
        </div>

        <div className="stat">
         
          <div className="stat-title">Calories Burned</div>
          <div className="stat-value">
            <CountUp start={0} end={598} duration={2.5} separator="," />
            kg
          </div>
          
        </div>

        <div className="stat">
         
         <div className="stat-title">Orders</div>
         <div className="stat-value">
           <CountUp start={0} end={145} duration={2.5} separator="," />
           +
         </div>

       </div>

      </div>
    </div>
  );
};

export default SectionTwo;
