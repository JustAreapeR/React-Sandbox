// App.js
import React from "react";
import cardData from "./CardData";
import CardComponent from "./CardComponent";

const App = () => {
  return (
    <div>
      {cardData.map((card) => (
        <CardComponent
          key={card.id}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>
  );
};

export default App;
