import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section 
      id={id} 
      className={`section-container ${className || ''}`}
    >
      {children}
    </section>
  );
};

export default Section;