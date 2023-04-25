import React from 'react'
import Coin from './Coin'
import CoinInfo from './CoinInfo'
import { Link } from 'react-router-dom'

import './Coins.css'

const Coins = (props) => {
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<CoinInfo />} key={coins.id}>
                            <Coin coins={coins} />
                        </Link>

                    )
                })}

            </div>
        </div>
    )
}

export default Coins
