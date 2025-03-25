
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface LetterProps {
  content: string;
  photo1Url: string;
  photo2Url: string;
}

const Letter: React.FC<LetterProps> = ({ content, photo1Url, photo2Url }) => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeoutId);
  }, []);
  
  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  const paragraphs = content.split('\n\n');

  return (
    <div className={`max-w-2xl mx-auto p-6 md:p-8 animate-fade-in ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
      <div className="letter-paper rounded-lg p-6 md:p-8 mx-auto relative">
        {/* Top left image */}
        <div className="float-left w-1/3 mr-4 mb-4">
          <div className="page-photo-container overflow-hidden">
            {photo1Url && (
              <img 
                src={photo1Url}
                alt="Special moment"
                className={`w-full h-full object-cover object-center ${imagesLoaded < 2 ? 'blur-sm' : 'blur-0'} transition-all duration-700`}
                onLoad={handleImageLoad}
              />
            )}
          </div>
        </div>
        
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className="text-base md:text-lg leading-relaxed"
              style={{ 
                opacity: loading ? 0 : 1,
                transform: loading ? 'translateY(10px)' : 'translateY(0)',
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` 
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Middle right image */}
        <div className="float-right w-1/2 ml-4 mb-4 mt-4">
          <div className="page-photo-container overflow-hidden">
            {photo2Url && (
              <img 
                src={photo2Url}
                alt="Special moment"
                className={`w-full h-full object-cover object-center ${imagesLoaded < 2 ? 'blur-sm' : 'blur-0'} transition-all duration-700`}
                onLoad={handleImageLoad}
              />
            )}
          </div>
        </div>
        
        <div className="clear-both mt-12 text-right">
          <p className="italic font-serif text-lg mb-2">With all my love,</p>
          <p className="font-serif text-xl">Your Name</p>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/journey" 
            className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent/80 transition-colors duration-300"
          >
            <span>Continue to Our Journey</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Letter;
