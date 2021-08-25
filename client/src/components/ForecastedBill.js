import React from 'react';
import { handleMoneyDisplay } from '../utils/helpers'

import { Card } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height: '100%'
    },
    card: {
        padding: '40px',
        margin: '10px',
        textAlign: 'center',
        lineHeight: '1.75'

    },
    bold: {
        fontWeight: 'bold'
    }
})


export default function ForecastedBill({billObject, category, userData}) {
    const classes = useStyles()


    const handleForecast = (userData) => {
        const amountsArray = userData ? userData.map(({ amount }) => amount) : []

        const getAvg = (arr) => {
            const total = arr.reduce((acc, c) => acc + c, 0)
            return total / arr.length
        }
        const average = getAvg(amountsArray)
        return average
    }
    const averagedAmount = handleForecast(billObject)

    if (!category) {
        return (
            <Card className={classes.card}>
                <h2>Please choose a category</h2>        
            </Card>

        )
    }

    return(
        <div>
            <Card className={classes.card}>
                <h2>
                    <span className={classes.bold}>Your {category} Bill Forecast is:</span> {handleMoneyDisplay(averagedAmount)}
                </h2>
            </Card>
        </div>
    )
}