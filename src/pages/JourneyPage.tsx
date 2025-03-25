
import React from 'react';
import GreetingCard from '../components/GreetingCard';

const JourneyPage = () => {
  // Replace with your own content and photo URLs
  const pages = [
    {
      title: "When We First Met",
      text: "I still remember the first time I saw you. There was something special about you that caught my attention immediately. Little did I know that moment would change my life forever. Your smile, your laugh, and the way you saw the world - everything about you fascinated me.",
      photoUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format"
    },
    {
      title: "Our First Date",
      text: "Remember how nervous we both were? That coffee shop where we talked for hours, losing track of time. The way you listened, really listened, to everything I said. I knew then that you were someone special, someone I wanted to know better. That day marked the beginning of our beautiful journey.",
      photoUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format"
    },
    {
      title: "Growing Together",
      text: "Through the years, we've grown together, supporting each other through life's ups and downs. You've been my rock, my confidant, my best friend. We've created so many beautiful memories - travels, adventures, quiet moments at home. Each one precious because we shared it together.",
      photoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format"
    },
    {
      title: "Our Future",
      text: "As I look to the future, I see only you. Every dream I have includes your smile, your hand in mine. I cannot imagine walking life's path with anyone else. You are my heart's choice, my soul's companion. And so, with all the love in my heart, I ask you to turn to the final message below...",
      photoUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&auto=format"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <GreetingCard pages={pages} />
    </div>
  );
};

export default JourneyPage;
