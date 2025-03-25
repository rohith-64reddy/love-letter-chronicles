
import React from 'react';
import Letter from '../components/Letter';

const LetterPage = () => {
  // Replace with your own content and photo URLs
  const letterContent = `My dearest love,

As I write these words, my heart is overflowing with emotions that only you can inspire. From the moment you entered my life, you've filled it with a light and joy I never knew was possible.

Every day with you is an adventure, a blessing, and a gift I cherish deeply. Your smile brightens even my darkest days, and your love gives me strength I never knew I had.

You know me better than anyone - my dreams, my fears, my quirks and imperfections - and still, you choose to love me. That is the most precious gift I could ever receive.

As we've grown together, I've become more certain of one thing: I want to spend the rest of my life with you. I want to build a future where we face every triumph and challenge side by side.

I invite you to continue to the next page, where I've collected some of our most precious memories - a journey that has led me to this moment.`;

  // Replace these with actual photo URLs
  const photo1Url = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format";
  const photo2Url = "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&auto=format";

  return (
    <div className="min-h-screen py-12 px-4">
      <Letter 
        content={letterContent} 
        photo1Url={photo1Url} 
        photo2Url={photo2Url} 
      />
    </div>
  );
};

export default LetterPage;
