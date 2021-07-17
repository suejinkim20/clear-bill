import { makeStyles } from '@material-ui/core';
import React from 'react';

import SideNav from './SideNav'

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    root: {
        display: 'flex',
    }
})

export default function Layout({ children }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {/* app bar */}

            {/* side drawer/SideNav */}
            <SideNav></SideNav>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}