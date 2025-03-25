
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

interface MailboxProps {
  greeting: string;
}

const Mailbox: React.FC<MailboxProps> = ({ greeting }) => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-6 tracking-tight font-medium">
        {greeting}
      </h1>
      
      <p className="text-muted-foreground text-center max-w-md mb-12">
        I have something special to share with you. Click the envelope to open it...
      </p>
      
      <Link 
        to="/letter" 
        className="mailbox-hover group"
        aria-label="Open letter"
      >
        <div className="glass-panel p-8 rounded-xl flex flex-col items-center">
          <div className="relative">
            <Mail 
              size={64} 
              className="text-accent animate-float" 
              strokeWidth={1.5} 
            />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></span>
          </div>
          <span className="mt-4 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Open Letter
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Mailbox;
