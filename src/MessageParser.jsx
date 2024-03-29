import React from 'react';
import {city} from './cityname'; // 正确导入名为 `city` 的城市数组

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
    console.log(message,city)
    city.forEach(cityItem => {
      if (message.includes(cityItem)) {
        actions.handleRecommendation(cityItem);
      }
    });
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;