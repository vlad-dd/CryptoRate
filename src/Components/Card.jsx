import React from 'react'
import '../App.css'


export const Card = ({name, image, price, rank, priceByDay, priceChangePercentage, lastUpd,
  high, low, marketCup,  total, max}) => {
    return (
           <div className='card_block'>
             <div className='card_info'>
               <div className='info'>
               <img src = {image} />
               <div className='name'>{name}</div>
               </div>
               
               <div>
               <div className='data_info_block'><span className='data_info'>Price: </span>{price}$</div>
               <div className='data_info_block'><span className='data_info'>Rank: </span>{rank}</div>
               <div className='data_info_block'><span className='data_info'>Price by day: </span>{priceByDay > 0 ? <span className='green'>{priceByDay}</span> : <span className='red'>{priceByDay}</span>} </div>
               <div className='data_info_block'><span className='data_info'>Change: </span>{ priceChangePercentage > 0 ? <span className='green'>{priceChangePercentage}</span> : <span className='red'>{priceChangePercentage}</span>} </div>
               <div className='data_info_block'><span className='data_info'>High by 24h: </span> {high}</div>
               <div className='data_info_block'><span className='data_info'>Low by 24h: </span>: {low}</div>
               <div className='data_info_block'><span className='data_info'>Market: </span>{ marketCup > 0 ? <span className='green'>{marketCup}</span> : <span className='red'>{marketCup}</span>}</div>
               <div className='data_info_block'><span className='data_info'>Total: </span> {total ? total : 'No information about this'}</div>
               <div className='data_info_block'><span className='data_info'>Max: </span> {max ? max : 'No information about this'}</div>
               <div className='data_info_block'><span className='data_info'>UPD: </span> {lastUpd}</div>
             </div>
             </div>

            

           </div>
    )
}
