import React, { useState, useEffect } from 'react';
import hoteldata from './hotelTest.json'
import {city} from './cityname'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [error, setError] = useState(null);

  const addMessageToState = (message) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello, nice to meet you');
    addMessageToState(botMessage);
  };

  const handleRecommendation = (cityName) => {
    const confirmationMessage = createChatBotMessage(`OK, ${cityName} here are a few recommended hotels`);
    addMessageToState(confirmationMessage);

    const filteredHotels = hoteldata.filter(hotel => hotel.city.toLowerCase() === cityName.toLowerCase());

    if (filteredHotels.length > 0) {
      filteredHotels.forEach(hotel => {
        const hotelMessage = createChatBotMessage(`Hotel: ${hotel.name}`, {
          widget: 'hotelWidget',
          image: hotel.images[0].thumbnail,
          price_per_night: hotel.rate_per_night.extracted_lowest,
          amenities: hotel.amenities,
          location:cityName
        });
        addMessageToState(hotelMessage);
      });
    } else {
      const notFoundMessage = createChatBotMessage(`Sorry, I couldn't find any hotel recommendations in ${cityName}.`);
      addMessageToState(notFoundMessage);
    }
  };

  return (
    <div>
      {React.Children.map(children, child => 
        React.cloneElement(child, {
          actions: {
            handleHello,
            handleRecommendation,
          },
        })
      )}
    </div>
  );
};

export default ActionProvider;