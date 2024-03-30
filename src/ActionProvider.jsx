import React, { useState } from 'react';
import hotelTest from "./hotelTest.txt";


const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const hotelDataState = useState(hotelData.properties);

  const addMessageToState = (message) => {
    setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello, nice to meet you!');
    addMessageToState(botMessage);
  };

  const handleRecommendation = (cityName) => {
    const confirmationMessage = createChatBotMessage(`Okay, ${cityName}, here are some hotel recommendations.`);
    addMessageToState(confirmationMessage);

    const [hotelData, setHotelData] = useState({});

    async function getHotelData() {
      try {
        const res = await fetch(hotelTest);
        const data = await res.json();
        setHotelData(data.properties);
      } catch (error) {
        console.error("Failed to fetch hotel data:", error);
      }
    }
  
    useEffect(() => {
      getHotelData();
    }, []);
    
    if (filteredHotels.length > 0) {
      filteredHotels.forEach(hotel => {
        const hotelMessage = createChatBotMessage(`Hotel Name: ${hotel.name}`, {
          image: hotel.images[0].thumbnail, 
          price_per_night: hotel.rate_per_night?.extracted_lowest,
          amenities: hotel.amenities,
        });
        addMessageToState(hotelMessage);
      });
    } else {
      const notFoundMessage = createChatBotMessage(`Sorry, no recommended hotels found in ${cityName}.`);
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