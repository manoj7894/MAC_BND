import React from 'react'
import ReactTimeAgo from "react-time-ago"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en);

export function CalculateTimeAgo({ time }) {
    console.log(time)
    return (
        <ReactTimeAgo date={time} locale='en-us' />
    )
}
