import React from "react";

function Stock({ stock, onStockClick }) {
  const { name, price, ticker, type } = stock;

  return (
    <div className="card" onClick={() => onStockClick(stock)}>
      <div className="card-body">
        <h5>{name} ({ticker})</h5>
        <p>Type: {type}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
}

export default Stock;
