
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PageContent {
  title: string;
  text: string;
  photoUrl: string;
}

interface GreetingCardProps {
  pages: PageContent[];
}

const GreetingCard: React.FC<GreetingCardProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: number]: boolean}>({});

  const handleNextPage = () => {
    if (isAnimating || currentPage >= pages.length - 1) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevPage = () => {
    if (isAnimating || currentPage <= 0) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(prev => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({...prev, [index]: true}));
  };

  const animationClass = isAnimating
    ? direction === 'next' 
      ? 'opacity-0 -translate-x-10' 
      : 'opacity-0 translate-x-10'
    : 'opacity-100 translate-x-0';

  return (
    <div className="journey-card max-w-4xl mx-auto p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center mb-8 animate-fade-in">
        Our Journey
      </h2>
      
      <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-gray-50 mb-8">
        <div 
          className={`journey-page transition-all duration-300 ${animationClass}`}
        >
          <div className="md:flex items-start gap-6">
            <div className="page-photo-container mb-4 md:mb-0 md:w-1/3 aspect-square bg-gray-100 overflow-hidden rounded-lg shadow">
              {pages[currentPage]?.photoUrl && (
                <img 
                  src={pages[currentPage].photoUrl}
                  alt={pages[currentPage].title}
                  className={`w-full h-full object-cover transition-all duration-700 ${imagesLoaded[currentPage] ? 'blur-0' : 'blur-sm'}`}
                  onLoad={() => handleImageLoad(currentPage)}
                />
              )}
            </div>
            
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-xl md:text-2xl font-serif text-primary">
                {pages[currentPage]?.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pages[currentPage]?.text}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <button 
          className={`p-3 rounded-full ${currentPage > 0 ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-gray-50 text-gray-300 cursor-not-allowed'} transition-colors duration-300`}
          onClick={handlePrevPage}
          disabled={currentPage <= 0 || isAnimating}
          aria-label="Previous page"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex items-center space-x-2">
          {pages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-accent w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => {
                if (isAnimating) return;
                setDirection(index > currentPage ? 'next' : 'prev');
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentPage(index);
                  setIsAnimating(false);
                }, 300);
              }}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          className={`p-3 rounded-full ${currentPage < pages.length - 1 ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-gray-50 text-gray-300 cursor-not-allowed'} transition-colors duration-300`}
          onClick={handleNextPage}
          disabled={currentPage >= pages.length - 1 || isAnimating}
          aria-label="Next page"
        >
          <ArrowRight size={20} />
        </button>
      </div>
      
      {currentPage === pages.length - 1 && (
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-xl md:text-2xl font-serif mb-4">Will you marry me?</h3>
          <p className="text-accent font-medium">My heart is yours forever ❤️</p>
        </div>
      )}
    </div>
  );
};

export default GreetingCard;
