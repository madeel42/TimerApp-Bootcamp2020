import React, { useState } from 'react'
type Props = {
    settimeInSecond: Function
}
export const Controls = (props: Props) => {
    const { settimeInSecond } = props;
    const [IntervalId, setIntervalId] = useState<number>(0)
    const handlePlayButton = () => {
        let interval: any = setInterval(() => {
            settimeInSecond((prev: number) =>
                prev + 1)
        }, 1000)
        setIntervalId(interval)
    }
    const handleStopButton = () => {
        clearInterval(IntervalId)
    }
    const handleResetButton = () => {
        clearInterval(IntervalId)
        settimeInSecond(0)
    }
    return (
        <div className='btnStyles'>
            <button onClick={handlePlayButton}>Play</button>
            <button onClick={handleStopButton}>Stop</button>
            <button onClick={handleResetButton}>Reset</button>
        </div>
    )
}
