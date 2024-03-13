import React from "react";

import CryptoCard from "./CryptoCard";
import "./CryptoList.css";

const CryptoList = ({ coinsData }) => {
  return (
    <div className="crypto_list">
      {coinsData.map((coin) => {
        return (
          <CryptoCard
            key={coin.id}
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
          />
        );
      })}
    </div>
  );
};

export default CryptoList;
