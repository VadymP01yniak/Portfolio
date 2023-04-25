import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import CoinInfo from './components/CoinInfo'
import Header from './components/Header'


function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    }).catch((error) => {
      console.log(`${error}Failed to fetch data`);
    })
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<CoinInfo />}>
          <Route path=':coinId' element={<CoinInfo />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
