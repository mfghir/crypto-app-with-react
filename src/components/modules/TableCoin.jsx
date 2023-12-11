/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import chartUp from "../../assets/chart-up.svg";
import charDown from "../../assets/chart-down.svg";

const TableCoin = ({ coins }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Vlume</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <TableRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoin;

const TableRow = ({
  coin: {
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  },
}) => {
  return (
    <tr>
      <td>
        <div>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      
      <td>{name}</td>
      <td>{current_price.toLocaleString()}</td>
      <td>{price_change.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : charDown} alt={name} />
      </td>
    </tr>
  );
};
