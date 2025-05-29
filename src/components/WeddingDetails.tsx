import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Section from './Section';
import Button from './Button';
import { WEDDING_DETAILS, MUHURTHAM } from '../utils/constants';

const WeddingDetails: React.FC = () => {
  return (
    <Section id="wedding-details" className="bg-mangoleaves-pattern bg-fixed bg-cover">
      <div className="relative -mx-4 -my-16 sm:-mx-6 md:-my-24 p-4 sm:p-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
        
        <div className="relative">
          <h2 className="section-title flex items-center justify-center gap-2 mb-12">
            <span className="text-3xl"></span>
            <span className="telugu-text"><b>సుముహూర్తం</b></span>
          </h2>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="card bg-white/80 p-8 text-center">
              <p className="telugu-text text-lg md:text-xl text-neutral-800 leading-relaxed mb-4">
                {MUHURTHAM.telugu}
              </p>
              <p className="text-neutral-600 italic">
                {MUHURTHAM.english}
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
            <div className="card bg-white/80 hover:bg-white transition-all group text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">తేదీ</h3>
              <p className="text-lg text-neutral-700">{WEDDING_DETAILS.date}</p>
            </div>
            
            <div className="card bg-white/80 hover:bg-white transition-all group text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">సమయం</h3>
              <p className="text-lg text-neutral-700">{WEDDING_DETAILS.time}</p>
            </div>
            
            <div className="card bg-white/80 hover:bg-white transition-all group text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">వేదిక</h3>
              <p className="text-lg text-neutral-700 mb-2">{WEDDING_DETAILS.venue}</p>
              <p className="text-sm text-neutral-600">{WEDDING_DETAILS.address}</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid gap-6">
              <div className="card bg-white/80 p-6">
                <h3 className="text-lg font-semibold mb-2 text-secondary">ఉపనయనము</h3>
                <p className="text-neutral-700">
                  {WEDDING_DETAILS.additionalEvents.upanayanam.date} {WEDDING_DETAILS.additionalEvents.upanayanam.time}
                </p>
                <p className="text-neutral-600">{WEDDING_DETAILS.additionalEvents.upanayanam.venue}</p>
              </div>

              <div className="card bg-white/80 p-6">
                <h3 className="text-lg font-semibold mb-2 text-secondary">విందు</h3>
                <p className="text-neutral-700">
                  {WEDDING_DETAILS.additionalEvents.dinner.date} {WEDDING_DETAILS.additionalEvents.dinner.time}
                </p>
                <p className="text-neutral-600">{WEDDING_DETAILS.additionalEvents.dinner.venue}</p>
              </div>

              <div className="card bg-white/80 p-6">
                <h3 className="text-lg font-semibold mb-2 text-secondary">వ్రతం</h3>
                <p className="text-neutral-700">
                  {WEDDING_DETAILS.additionalEvents.vratam.date} {WEDDING_DETAILS.additionalEvents.vratam.time}
                </p>
                <p className="text-neutral-600">{WEDDING_DETAILS.additionalEvents.vratam.venue}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg border-4 border-primary-light">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2666129494!2d78.4046976!3d17.4344533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9721b7b6fc89%3A0xb533e8d308e16307!2sVinukonda%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
              ></iframe>
            </div>
            
            <div className="text-center mt-4">
              <Button 
                onClick={() => window.open(WEDDING_DETAILS.mapUrl, '_blank')}
                className="bg-primary hover:bg-primary-dark"
              >
                వివాహ స్థలం
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WeddingDetails;