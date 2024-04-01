import React, { useState, useEffect } from 'react';
import hotelTest from './hotelTest.txt';

function HotelCard({
  name,
  img,
  rating,
  pricePerNight,
  amenities,
}) {
  return (
    <div className="hotel-card">
      <img src={img} alt={name} width="180px" height="150px"/>
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <p>Price Per Night: {pricePerNight}</p>
      <ul>Amenities: {
        amenities.map((amenity, index) => <li key={index}>{amenity}</li>)
      }</ul>
    </div>
  );
}

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [hotelData, setHotelData] = useState([]);

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const addMessageToState = (message) => {
    setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  
  const handleRecommendation = async (cityName) => {
    const confirmationMessage = createChatBotMessage(`Okay, ${cityName}, here are some hotel recommendations.`);
    addMessageToState(confirmationMessage);
    const hotelInfo = createChatBotMessage(renderedHotelCards)
    addMessageToState(hotelInfo)
  };

  useEffect(() => {
    getHotelData();
  }, []);

  async function getHotelData() {
    
    try {
      const res = await fetch(hotelTest);
      const data = await res.json();
      setHotelData(data.properties);
    } catch (error) {
      console.error('Failed to fetch hotel data:', error);
    }
  }
  
  const renderedHotelCards = hotelData.slice(0,3).map((hotel, index) => (
    <HotelCard
      name={hotel.name}
      img={hotel.images[0].thumbnail}
      rating={hotel.overall_rating}
      pricePerNight={hotel.rate_per_night.extracted_lowest}
      amenities={hotel.amenities}
    />
  ));

  // Render function
  return (
    <div>
      {/* {renderedHotelCards} */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          actions: {
            handleRecommendation,
            handleHello,
          },
        })
      )}
    </div>
  );
};

export default ActionProvider;