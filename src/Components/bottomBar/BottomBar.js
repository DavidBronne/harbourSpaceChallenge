import {useContext} from 'react';
import {ApprenticeshipContext} from '../../contexts/ApprenticeshipContext'
import ApplicationCloseInCalculation from '../ApplicationCloseInCalculation'
    
const BottomBar = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    console.log(`data`, data)

    // component of remaimg time with deadline injected

    return (    
        <div className="BottomBar">
        {data && <div>
                <h2>BottomBar:</h2>
                    <div className="BottomBarElement">
                        <div className="title">{data.scholarship.company.name}</div>
                        <div className="content">{data.scholarship.company.type}</div>
                    </div>
                <div className="BottomBarElement">
                    <div className="title">Location</div>
                    <div className="content">{data.scholarship.location.name}</div>
                </div>
                <div className="BottomBarElement">
                    <div className="title">Duration</div>
                    <div className="content">{data.scholarship.duration} full year</div>
                </div>
                <div className="BottomBarElement">
                    <div className="title">Start date</div>
                    <div className="content">{data.scholarship.scholarship_start_date}</div>
                </div>
                <div className="BottomBarElement">
                    <div className="title">Application deadline</div>
                    <div className="content">{data.scholarship.application_end_date}</div>
                </div>
                <div className="BottomBarElement">
                    <div className="title">Application closes in</div>
                    <div className="content"><ApplicationCloseInCalculation appEndDate={data.scholarship.application_end_date}/></div>
                </div>
             </div>
            }
        </div>
    )
}

export default BottomBar