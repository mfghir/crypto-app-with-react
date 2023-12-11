/* eslint-disable no-unused-vars */
import React from "react";

import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };
    getData();
  }, []);

  return (
    <div>
      <Pagination />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
