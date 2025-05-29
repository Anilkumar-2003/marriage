import React from 'react';
import Section from './Section';
import { WEDDING_DETAILS } from '../utils/constants';

const CoupleIntro: React.FC = () => {
  return (
    <Section id="couple-intro" className="bg-white">
      {/* Couple Introduction Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch max-w-4xl mx-auto">
        
        {/* Groom Card */}
        <div className="card flex-1 hover:shadow-xl group bg-gradient-to-b from-white to-primary-light/10">
          <div className="text-center mb-6">
            <div className="w-44 h-44 mx-auto rounded-full bg-primary-light/30 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 overflow-hidden border-4 border-primary/30">
              <img 
                src='https://i.postimg.cc/vHZn83q7/12.png' 
                alt="Groom" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="telugu-text text-2xl font-bold text-secondary mb-1">
              {WEDDING_DETAILS.groom.name}
            </h3>
            <h4 className="text-xl text-neutral-700">
              {WEDDING_DETAILS.groom.nameEn}
            </h4>
          </div>
          
          <div className="space-y-2 text-center">
            <p className="text-neutral-700">Son of</p>
            <p className="font-medium text-neutral-800">{WEDDING_DETAILS.groom.parents}</p>
            <p className="text-sm text-neutral-600 mt-2">From: {WEDDING_DETAILS.groom.location}</p>
          </div>
        </div>
        
        {/* Decorative Connector */}
       
        
        {/* Bride Card */}
        <div className="card flex-1 hover:shadow-xl group bg-gradient-to-b from-white to-primary-light/10">
          <div className="text-center mb-6">
            <div className="w-44 h-44 mx-auto rounded-full bg-primary-light/30 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 overflow-hidden border-4 border-primary/30">
              <img 
                src='https://i.postimg.cc/G382XV55/35.png' 
                alt="Bride" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="telugu-text text-2xl font-bold text-secondary mb-1">
              {WEDDING_DETAILS.bride.name}
            </h3>
            <h4 className="text-xl text-neutral-700">
              {WEDDING_DETAILS.bride.nameEn}
            </h4>
          </div>
          
          <div className="space-y-2 text-center">
            <p className="text-neutral-700">Daughter of</p>
            <p className="font-medium text-neutral-800">{WEDDING_DETAILS.bride.parents}</p>
            <p className="text-sm text-neutral-600 mt-2">From: {WEDDING_DETAILS.bride.location}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CoupleIntro;
