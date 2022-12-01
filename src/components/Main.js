import React, { useState, useEffect } from 'react';
import './Main.css'
function Main() {
    const [items, setItems] = useState([]);
    const coins = ["bitcoin","ethereum"];
    const currency = "usd"
//get coin data by descending market cap (i.e Top market cap)
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d`)
            .then(res => res.json())
            .then(
                (result) => setItems(result))
    },[])
    return (
        <div className="Content">
            <h2>Coin prices by Market Cap</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Mcap</th>
                        <th>1h Change</th>
                        <th>24h Change</th>
                        <th>7d Change</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        return(
                            <tr key={item.id}>
                                <td className="Coin_name">{item.name}</td>
                                <td>${item.current_price.toLocaleString(undefined,{maximumFractionDigist:2})}</td>
                                <td>${item.market_cap.toLocaleString(undefined,{maximumFractionDigist:2})}</td>
                                <td>{item.price_change_percentage_1h_in_currency.toFixed(1)}%</td>
                                <td>{item.price_change_percentage_24h_in_currency.toFixed(1)}%</td>
                                <td>{item.price_change_percentage_7d_in_currency.toFixed(1)}%</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Main;