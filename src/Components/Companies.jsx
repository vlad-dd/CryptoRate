import React, { useState } from 'react'
import '../App.css'

const Companies = () => {

    const [companiesData, setCompaniesData] = useState([
        {id: 1, img:'https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png'},
        {id: 2, img:'https://www.starbucksathome.com/ru/sites/default/files/2021-05/11%20%284%29.png'},
        {id: 3, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/793px-Tesla_Motors.svg.png'},
        {id: 4, img:'https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo.png'},
    ])

    let dataToShow = companiesData.map((el) => {
        return <div className='company'>
            <div className='company_block'>
            <div><img className='company_img' src={el.img} /></div>
            </div>
            </div>
    })



    return (
        <div>
            {dataToShow}
        </div>
    )
}

export default Companies
