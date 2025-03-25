
import React, { useEffect } from 'react';
import Mailbox from '../components/Mailbox';

const Index = () => {
  useEffect(() => {
    // Add a background animation when the page loads
    document.body.classList.add('bg-animate');
    
    return () => {
      document.body.classList.remove('bg-animate');
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient">
      <div className="relative z-10 bg-white/60 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-white/20 max-w-2xl w-full">
        <Mailbox greeting="Hello My Love" />
      </div>
    </div>
  );
};

export default Index;
