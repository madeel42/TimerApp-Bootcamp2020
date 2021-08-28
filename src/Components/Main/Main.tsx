import React, { useState } from 'react'
import { Controls } from '../Controls/controls'
import calculateTimer from '../Helper/calculate'
export const Main = () => {
    const [timeInSecond, settimeInSecond] = useState<number>(0)
    const [timerArray, settimerArray] = useState<Array<number | string>>([])
    React.useEffect(() => {
        let timeArray: Array<number | string> = calculateTimer(timeInSecond)
        settimerArray(timeArray)
    }, [timeInSecond])
    return <div>
        <div className='timer-container'>
            <p>{timerArray[0]}</p>
            <span>:</span>
            <p>{timerArray[1]}</p>
            <span>:</span>
            <p>{timerArray[2]}</p>
        </div>
        <Controls settimeInSecond={settimeInSecond} />
    </div>
    
}
