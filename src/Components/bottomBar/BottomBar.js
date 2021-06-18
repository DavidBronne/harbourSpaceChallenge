import {useContext} from 'react';
import {ApprenticeshipContext} from '../../contexts/ApprenticeshipContext'
import ApplicationCloseInCalculation from '../ApplicationCloseInCalculation'
import BottomBarElement from './BottomBarElement'
    
const BottomBar = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    /* console.log(`data`, data) */

    // component of remaimg time with deadline injected

    return (    
        <div className="BottomBar fix-bottom">
        {data && 
            <div className="format-row-item format-wrap-item format-space-between-item ">
                <BottomBarElement title={data.scholarship.company.name} content={data.scholarship.company.type}/>
                <BottomBarElement title='Location' content={data.scholarship.location.name}/>
                <BottomBarElement title='Duration' content={data.scholarship.duration + " full year"}/>
                <BottomBarElement title='Start date' content={data.scholarship.scholarship_start_date}/>
                <BottomBarElement title='Application deadline' content={data.scholarship.application_end_date}/>
                <BottomBarElement title='Application closes in' content={<ApplicationCloseInCalculation appEndDate={data.scholarship.application_end_date}/>}/>
            </div>
            }
        </div>
    )
}

export default BottomBar