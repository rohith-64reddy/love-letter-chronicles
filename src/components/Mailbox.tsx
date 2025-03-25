
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Heart } from 'lucide-react';

interface MailboxProps {
  greeting: string;
}

const Mailbox: React.FC<MailboxProps> = ({ greeting }) => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in">
      <div className="relative mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center tracking-tight font-medium text-gradient">
          {greeting}
        </h1>
        <div className="absolute -top-6 -right-6 hidden md:block">
          <Heart className="text-accent/70 h-12 w-12 animate-pulse" fill="rgba(248, 113, 113, 0.2)" strokeWidth={1.5} />
        </div>
      </div>
      
      <p className="text-muted-foreground text-center max-w-md mb-12 text-lg">
        I have something special to share with you. Click the envelope to open it...
      </p>
      
      <Link 
        to="/letter" 
        className="mailbox-hover group relative"
        aria-label="Open letter"
      >
        <div className="glass-panel p-10 rounded-2xl flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-pink-200/20 z-0"></div>
          <div className="relative z-10">
            <div className="relative">
              <Mail 
                size={80} 
                className="text-accent animate-float" 
                strokeWidth={1.5} 
              />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></span>
            </div>
            <span className="mt-4 text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              Open Letter
            </span>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 transform rotate-6">
          <Heart className="text-accent/60 h-6 w-6" fill="rgba(248, 113, 113, 0.1)" />
        </div>
      </Link>
    </div>
  );
};

export default Mailbox;
