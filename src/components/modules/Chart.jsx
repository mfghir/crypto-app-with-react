/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Chart.module.css";

const Chart = ({ chart, setChart }) => {

    const [type, setType] = useState("prices");

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>X</span>
      <div className={styles.chart} >
        ss
      </div>
    </div>
  );
};

export default Chart;
