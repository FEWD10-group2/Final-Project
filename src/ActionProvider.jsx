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
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <p>Price Per Night: {pricePerNight}</p>
      <ul>Amenities: {
        amenities.map((amenity, index) => <li key={index}>{amenity}</li>)
      }</ul>
    </div>
  );
}

// 这里是您的ActionProvider组件，整合了HotelCard的使用
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [hotelData, setHotelData] = useState([]);

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // 我注意到您打印了getHotelData函数。不过，console.log这样使用是不正确的。
  // 如果您想要检查getHotelData的执行，应该将其放在useEffect或函数体内。
  // console.log('Fetching hotel data...');
  // useEffect(() => {
  //   getHotelData().then(() => console.log('Hotel data fetched.'));
  // }, []);

  const addMessageToState = (message) => {
    setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  
  const handleRecommendation = async (cityName) => {
    const confirmationMessage = createChatBotMessage(`Okay, ${cityName}, here are some hotel recommendations.`);
    addMessageToState(confirmationMessage,HotelCard);

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

  // Rendered hotel cards,这里我们将用map渲染HotelCard组件
  const renderedHotelCards = hotelData.map((hotel, index) => (
    <HotelCard
      key={index} // 假设酒店信息没有唯一ID，使用索引作为key
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
      {renderedHotelCards}  {/* 现在我们将渲染酒店卡片 */}
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