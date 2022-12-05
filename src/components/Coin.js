import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Graph from './Graph.js'
import "./Coin.css";


function Coin() {
    let { coinName } = useParams();
    const [coin, setCoin] = useState([]);
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinName}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res=>res.json())
            .then(
                (result) => setCoin(result[0]))
    },[])  
   
    return(
        <div className="coin">
            <div className="basic-info">
                <div className="price-info">
                    <div id="glance-data">
                        <a>{coin.name}</a><br />
                        <a>Price:${coin.current_price}</a>
                    </div>
                    <div className="data">
                        <div>Market Cap:{coin.market_cap}</div>
                        <div>Circulating Supply:{coin.circulating_supply}</div>
                        <div>Total Supply:{coin.total_supply}</div>
                        <div>Max Supply:{coin.max_supply}</div>
                    </div>
                    </div>
                <div className="detail-info">
                    <a>Info</a>
                    <div>
                        <Graph />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Coin;