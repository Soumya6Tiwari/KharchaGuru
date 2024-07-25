import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

// line graph
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

// we need to register the elements that we have imported from the chart.js
ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    const data = {
        // on x axis we will label the date 

        labels: incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),

        // on y  we will label the amount of money

        datasets: [
            {
                label: 'Income',
                // we need the actual data for the income
                data: [
                    // spread the income and then map
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',

                // tension is used for making the graph to be curved

                tension: .2
            },
            {
                label: 'Expenses',
                // we need the actual data for the expenses
                data: [
                    // spread the expense and then map
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',

                // tension is used for making the graph to be curved
                
                tension: .2
            }
        ]
    }


    return (
        <ChartStyled >
            <Line data={data} />
            
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart