import React, { Component } from 'react';
import axios from 'axios';
import Cryptocurrency from './Cryptocurrency';
import './CryptoData.css';

class CryptoData extends Component {
    fetchCryptoData() {
       //axios.get("https://min-api.cryptocompare.com/data/all/coinlist")
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
            .then(response => {
                //var wanted = ["bitcoin", "ethereum", "litecoin"];
                var result = response.data;//.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result });
            })
            .catch(err => console.log(err));
    }
    componentDidMount() {
        this.fetchCryptoData();
        this.interval = setInterval(() => this.fetchCryptoData(), 1 * 1000);
    }
    state = {
        data: [
            {
                id: "bitcoina",
                name: "bitcoin",
                symbol: "BTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "1",
                percent_change_7d: "1",
            },
            {
                id: "eth",
                name: "bitcoin",
                symbol: "BTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "1",
                percent_change_7d: "1",
            },
            {
                id: "litecoin",
                name: "bitcoin",
                symbol: "BTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "1",
                percent_change_7d: "1",
            },
        ]
    }
    render() {
        var tickers = this.state.data.map((currency) =>
            <Cryptocurrency data={currency} key={currency.id} />
        );
        return (
            <div className="tickers-cointainers">
                <ul className="tickers">{tickers}
                </ul>
                    <p>Info takes 10 secs.</p>
               
            </div>
        )
    }
}
export default CryptoData;