import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import PhotoSection from './components/PhotoSection';
import CoupleIntro from './components/CoupleIntro';
import WeddingDetails from './components/WeddingDetails';
import CountdownTimer from './components/CountdownTimer';
import InviteMessage from './components/InviteMessage';
import Footer from './components/Footer';
import { WEDDING_DATE } from './utils/constants';
import MusicPlayer from './components/MusicPlayer'; // Import music component

function App() {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {showNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-yellow-900 px-4 py-2 rounded shadow-lg z-50 text-sm md:text-base">
          మొబైల్ ద్వారా చూడండి ఉత్తమ అనుభవం కోసం..
        </div>
      )}

      <Header />
      <PhotoSection />
      <CoupleIntro />
      <CountdownTimer targetDate={WEDDING_DATE} />
      <WeddingDetails />
      <InviteMessage />
      <Footer />
      <MusicPlayer /> {/* Mount the audio player */}
    </div>
  );
}

export default App;
