import React from 'react';
import Section from './Section';


const InviteMessage: React.FC = () => {
  return (
    <Section id="invite-message" className="bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title flex flex-col items-center gap-2">
           <img src='https://i.postimg.cc/2SkNK9wW/graphics-mahashivratri-indian-wedding-some-logo-pattern-822782-2.avif' />
        </h2>
        

       
        <div className="card bg-gradient-to-r from-primary-light/20 via-white to-primary-light/20 p-8 md:p-10 border border-primary-light/50 relative">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
          
          
          <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed">
            <h1 className="telugu-text text-2xl md:text-3xl font-bold mb-4 text-[#5C3B0B]">విన్నపము </h1>
             <p className="max-w-2xl mx-auto text-[#5C3B0B] text-lg md:text-xl leading-relaxed">
             మా వివాహానికి వచ్చి మమ్మల్ని ఆశీర్వదించండి.
            </p>
            <img src='https://i.postimg.cc/j2RQ6fHz/en.png'/>
          </p>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <div className="w-24 h-1 bg-primary-light rounded-full mb-6"></div>
          {/* <p className="text-lg text-neutral-700 italic">
            "Love is not about how many days, months, or years you have been together. 
            Love is about how much you love each other every single day."
          </p> */}
          
        </div>
      </div>
    </Section>
  );
};

export default InviteMessage;