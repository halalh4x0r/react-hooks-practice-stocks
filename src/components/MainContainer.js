import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("none"); // "none" | "Alphabetically" | "Price"
  const [filterBy, setFilterBy] = useState("All");

  // fetch stocks on mount
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => setStocks(data));
  }, []);

  function handleBuy(stock) {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSell(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  }

  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        onSortChange={setSortBy}
        filterBy={filterBy}
        onFilterChange={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            sortBy={sortBy}
            filterBy={filterBy}
            onStockClick={handleBuy}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={portfolio}
            onStockClick={handleSell}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
