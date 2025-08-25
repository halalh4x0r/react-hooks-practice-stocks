import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onStockClick }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.length === 0 ? (
        <p>No stocks yet. Click on a stock to buy it.</p>
      ) : (
        stocks.map((stock) => (
          <Stock
            key={stock.id}
            stock={stock}
            onStockClick={onStockClick}
          />
        ))
      )}
    </div>
  );
}

export default PortfolioContainer;
