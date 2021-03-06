const ApplicationCloseInCalculation = ({appEndDate}) => {
    /* console.log(`appEndDate`, appEndDate) */
    const appEndDateSec = new Date(appEndDate).getTime()
    /* console.log(`appEndDateSec`, appEndDateSec) */
    const todaySec = new Date().getTime()
    /* console.log(`todaySec`, todaySec) */
    const difSec = (appEndDateSec - todaySec) / 1000;
    /* console.log(`difSec`, difSec) */
    const remainingDays = Math.floor(difSec / (60*60*24))
    const restOfDaysSec = difSec % (60*60*24)
    const remainingHours = Math.floor(restOfDaysSec / (60*60))
    const restOfHoursSec = difSec % (60*60)
    const remainingMins = Math.floor(restOfHoursSec / 60)
    const remainingSec = Math.floor(difSec % 60)
    
/*     console.log(`remainingDays`, remainingDays)
    console.log(`restOfDaysSec`, restOfDaysSec)
    console.log(`remainingHours`, remainingHours)
    console.log(`restOfHoursSec`, restOfHoursSec)
    console.log(`remainingMins`, remainingMins)
    console.log(`remainingSec`, remainingSec) */
    

    
    
    return (
        <ul className="countdown format-row-item">
            <li>{remainingDays} Day :</li>
            <li>{remainingHours} Hrs :</li>
            <li>{remainingMins} Min :</li>
            <li>{remainingSec} Sec</li>
        </ul>

        )
}

export default ApplicationCloseInCalculation