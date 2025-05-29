import React, { useState, useEffect } from 'react';
import Section from './Section';
import { CountdownTimerProps } from '../types';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <Section id="countdown" className="bg-secondary text-white py-16 md:py-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-2">
          The moment we've been waiting for... begins in:
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {/* Days */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2 gold-gradient">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-neutral-200 uppercase tracking-wider text-sm">Days</div>
        </div>
        
        {/* Hours */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2 gold-gradient">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-neutral-200 uppercase tracking-wider text-sm">Hours</div>
        </div>
        
        {/* Minutes */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2 gold-gradient">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-neutral-200 uppercase tracking-wider text-sm">Minutes</div>
        </div>
        
        {/* Seconds */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2 gold-gradient">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-neutral-200 uppercase tracking-wider text-sm">Seconds</div>
        </div>
      </div>
    </Section>
  );
};

export default CountdownTimer;