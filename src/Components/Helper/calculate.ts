const calculateTimer = (timeInSecond: number): Array<number | string> => {
    let hours: number = Math.floor(timeInSecond / 3600);
    let minutes: number = Math.floor((timeInSecond - (hours * 3600)) / 60);
    let seconds: number = timeInSecond - (hours * 3600) - (minutes * 60);
    let hoursFormate = hours < 10 ? `0${hours}` : `${hours}`
    let minutesFormate = minutes < 10 ? `0${minutes}` : `${minutes}`
    let secondFormate = seconds < 10 ? `0${seconds}` : `${seconds}`
    return [hoursFormate,
        minutesFormate,
        secondFormate]
}
export default calculateTimer