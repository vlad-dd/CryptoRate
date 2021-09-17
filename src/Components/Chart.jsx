import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

const Chart = () => {
    let dataForChart = useSelector(state => state.MainReducer.data)
       
    return (
        <div>
            <Bar data={{ labels: dataForChart.map((obj) => {
                return obj.name

            }),
                datasets: [
                    {
                        label: 'Price',
                        data: dataForChart.map((el) => {
                            return el.current_price
                        }),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
                
            }}
                 height={400} width={400} 
                 options={{
                     maintainAspectRatio: false,
                     scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                 }} />

        </div>
    )
}

export default Chart
