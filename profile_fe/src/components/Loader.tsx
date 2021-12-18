import React from 'react'
import {Box} from "@mui/material"
import {createStyles, makeStyles} from '@mui/styles'
import {useAppSelector} from "../hooks/redux";

const useStyles = makeStyles(() =>
    createStyles({
        bigLoader: {
            width: 100,
            height: 100,
            margin: '30vh auto',
            borderRadius: '100%',
            border: '2px dashed red',
            animationName: `$big-loader`,
            animationDuration: '0.5s',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
            animationTimingFunction: 'linear',
        },
        "@keyframes big-loader": {
            "0%": {
                transform: "rotate(0deg)"
            },

            "100%": {
                transform: "rotate(360deg) scale(1.3)"
            }
        }
    })
)

const Loader = () => {
    const classes = useStyles()
    return (<Box className={classes.bigLoader} />)
}

export default Loader