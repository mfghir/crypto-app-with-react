import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";

const HomePage = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=2&x_cg_demo_api_key=CG-kTyWGfN5DVKk11aY92KYmViw")
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
};

export default HomePage;
