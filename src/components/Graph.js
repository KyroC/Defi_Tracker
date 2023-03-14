import {useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function Graph() {
    let {coinName} = useParams();

      const [sevenDays,setSevenDays ] = useState([])
      const [allPrices, setAllPrice ] = useState([])
      useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=730&interval=daily`)
        .then(res=>res.json())
        .then(
            (result) => setSevenDays(result["prices"]))
      },[])
      const data = {
        labels:  sevenDays.map(day => new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(day[0])),
        datasets: [
          {
            label: "Coin Price",
            data: sevenDays.map(price => price[1]),
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          }
        ]
      };


    return (
        <div>
            <Line data={data} />
        </div>
    )
}
export default Graph;