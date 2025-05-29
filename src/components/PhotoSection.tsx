import React from 'react';
import Section from './Section';
import { TELUGU_QUOTE, TELUGU_QUOTE_TRANSLATION } from '../utils/constants';

const PhotoSection: React.FC = () => {
  return (
    <Section id="photo-section" className="bg-neutral-100 decorative-border pt-28">
      <div className="flex flex-col items-center">
        {/* Main Photo */}
        <div className="relative w-full max-w-3xl mb-12">
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl border-8 border-primary-light">
            {/* <img
              src="https://i.postimg.cc/wBYWtCsR/indian-couple-wedding-ai-generated-image-362642-3483.avif"
              alt="Wedding Theme"
              className="w-full h-full object-cover"
            /> */}
            <img src='https://i.postimg.cc/VNr5rhnM/pngtree-traditional-hindu-wedding-ceremony-engagement-wedding-rituals-asian-photo-photo-image-301481.jpg' alt="Traditional Hindu Wedding" className="w-full h-full object-cover" />
          </div>
          
          {/* Decorative elements */}
          <div className="">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-white to-yellow-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"></span>
            </div>

            <div className="">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-white to-yellow-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"></span>
            </div>

        </div>
        
        {/* Telugu Quote */}
        <div className="max-w-2xl mx-auto text-center p-8 border-2 border-dashed border-primary-light rounded-lg bg-white/80 backdrop-blur-sm">
          <p className="telugu-text text-xl md:text-2xl text-secondary mb-4 leading-relaxed">
            "{TELUGU_QUOTE}"
          </p>
          <p className="text-sm md:text-base text-neutral-600 italic">
            {TELUGU_QUOTE_TRANSLATION}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default PhotoSection;