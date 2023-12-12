/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import chartUp from "../../assets/chart-up.svg";
import charDown from "../../assets/chart-down.svg";

import { RotatingLines } from "react-loader-spinner";
import styles from "./TableCoin.module.css";

const TableCoin = ({ coins, isLoading, currency }) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
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
              <TableRow key={coin.id} coin={coin} currency={currency} />
            ))}
          </tbody>
        </table>
      )}
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
  currency,
}) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>

      <td>{name}</td>
      <td>
        {currency === "usd" ? "$" : currency === "eur" ? "€" : "¥"}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : charDown} alt={name} />
      </td>
    </tr>
  );
};
