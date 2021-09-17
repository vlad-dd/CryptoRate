import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { setCryptoDataActionCreator } from '../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './Card'

const DataComponent = () => {

    const [data, setData] = useState(null)

   const dispatch = useDispatch()

   const dataState = useSelector(state => state.MainReducer.data)
    

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false%27').then((response) => {
            dispatch(setCryptoDataActionCreator(response.data))
        })

    }, [])


    let cards = dataState.map((el) => {
        return (<Card name={el.name} image = {el.image} price = {el.current_price} 
            rank = {el.market_cap_rank} priceByDay = {el.price_change_24h}
            priceChangePercentage = {el.price_change_percentage_24h} lastUpd = {el.last_updated}
            high = {el.high_24h} low = {el.low_24h} marketCup = {el.market_cap_change_24h} total ={el.total_supply}
            max = {el.max_supply}/> )

    })


    return (
        <div>
            {cards}
        </div>
    )
}

export default DataComponent
