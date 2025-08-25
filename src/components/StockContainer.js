import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, sortBy, filterBy, onStockClick }) {
  // filter
  const filteredStocks = filterBy === "All"
    ? stocks
    : stocks.filter((s) => s.type === filterBy);

  // sort
  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "ticker") {
      return a.ticker.localeCompare(b.ticker);
    } else {
      return 0;
    }
  });

  return (
    <div>
      <h2>Stocks</h2>
      {sortedStocks.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          onStockClick={onStockClick}
        />
      ))}
    </div>
  );
}

export default StockContainer;
