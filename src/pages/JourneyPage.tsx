
import React from 'react';
import GreetingCard from '../components/GreetingCard';

const JourneyPage = () => {
  // Replace with your own content and photo URLs
  const pages = [
    {
      title: "When We First Met",
      text: "I still remember the first time I saw you. There was something special about you that caught my attention immediately. Little did I know that moment would change my life forever. Your smile, your laugh, and the way you saw the world - everything about you fascinated me.\n\nThat day, as the sun was setting and painting the sky with shades of orange and pink, our paths crossed. The way you laughed at my awkward joke made my heart skip a beat. I remember thinking to myself, 'This person is going to be important in my life.' And how right I was! From that first conversation, I felt a connection I couldn't explain – as if we had known each other in another lifetime. I couldn't stop thinking about you after we parted ways that evening. Little did I know, that was just the beginning of our beautiful story.",
      photoUrl: "./images/unsplash-1488590528505-98d2b5aba04b.jpg"
    },
    {
      title: "Our First Date",
      text: "Remember how nervous we both were? That coffee shop where we talked for hours, losing track of time. The way you listened, really listened, to everything I said. I knew then that you were someone special, someone I wanted to know better. That day marked the beginning of our beautiful journey.\n\nI arrived early, anxiously checking my watch every few minutes. When you walked through the door, all my nervousness melted away. You wore that blue shirt that brings out your eyes, and your smile lit up the room. We ordered our drinks – you with your usual order that I now know by heart. What was supposed to be a quick coffee turned into hours of conversation, laughter, and shared dreams. We talked about our childhoods, our hopes for the future, and everything in between. When the staff started closing up, we were both surprised by how quickly time had passed. Walking you home under the starlit sky, I knew I had found someone truly special.",
      photoUrl: "./images/unsplash-1649972904349-6e44c42644a7.jpg"
    },
    {
      title: "Growing Together",
      text: "Through the years, we've grown together, supporting each other through life's ups and downs. You've been my rock, my confidant, my best friend. We've created so many beautiful memories - travels, adventures, quiet moments at home. Each one precious because we shared it together.\n\nRemember that road trip where we got lost and discovered that hidden beach? Or the time we tried to cook a fancy dinner and almost burned down the kitchen? These moments, both planned and unexpected, have woven the tapestry of our relationship. We've challenged each other to be better, to reach for our dreams, and to never settle. You encouraged me when I doubted myself, and I've watched you blossom into an even more amazing person than when we first met. We've weathered storms together, celebrated victories, and found joy in the simplest moments. With each passing day, my love and respect for you only grows stronger.",
      photoUrl: "./images/unsplash-1581091226825-a6a2a5aee158.jpg"
    },
    {
      title: "Our Future",
      text: "As I look to the future, I see only you. Every dream I have includes your smile, your hand in mine. I cannot imagine walking life's path with anyone else. You are my heart's choice, my soul's companion. And so, with all the love in my heart, I ask you to turn to the final message below...\n\nI envision a life filled with more adventures, more laughter, and more love. A home that echoes with our joy, perhaps someday with the pitter-patter of little feet. I see us growing old together, sitting on a porch swing, looking back on a life well-lived and a love well-nurtured. I promise to stand by you through whatever life brings our way – to cherish you in sickness and in health, in good times and challenging ones. You have made me happier than I ever thought possible, and I want nothing more than to spend the rest of my days trying to bring you the same happiness. So now, with my heart full of love and hope for our future, I have something important to ask you...",
      photoUrl: "./images/unsplash-1721322800607-8c38375eef04.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <GreetingCard pages={pages} />
    </div>
  );
};

export default JourneyPage;
