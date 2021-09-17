import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    const socials = [{name: "facebook", url:'https://cdn-icons-png.flaticon.com/512/1384/1384053.png'}, {name: "instagram", url:'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'}, {name: "twitter", url:'https://cdn-icons-png.flaticon.com/512/733/733579.png'}]

    let getName = (el) => {
       if (el == 'facebook') {
           window.location.href = 'https://www.facebook.com/buy.bitcoin.news/'
       } else {
           {el == 'instagram' ? window.location.href = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiJiYOF4IbzAhXKAewKHQlbD-MQFnoECAMQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Ftags%2Fbitcoin%2F&usg=AOvVaw1JqgTZh0asqbYvwxTgEBmO' : window.location.href = 'https://twitter.com/search?q=%23bitcoin'}
       }
    }

    let socialsToShow = socials.map((el) => {
        return (
            <div className='social_networks_img'>
                <span><img onClick={() => getName(el.name)} className = 'social_network' src={el.url} /></span>
            </div>
        )

    })


    return (
        <footer className = 'footer'>
            {socialsToShow}
        </footer>
    )
}

export default Footer
