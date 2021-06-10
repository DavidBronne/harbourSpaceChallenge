import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'
import ApplicationCloseInCalculation from './ApplicationCloseInCalculation'
import BottomBarElement from './bottomBar/BottomBarElement'

const ApplySection = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    console.log(`data`, data)

    return data && (
        <section className="apply-section">
            <div className="apply-section__left">
                <h1>{data.scholarship.name}  
                    <img className="stamp" src="/img/Icon.jpg" alt="Icon" ></img>
                </h1>
                   <p>
                        <b>A fully funded work-study program to launch your tech career</b>
                   </p>
                <p>
                    {data.scholarship.description[0].data}
                </p>
                <p>
                    <b>Position:</b>
                    Marketing Performance
                </p>
                <button className="btn">Apply now</button>
            </div>
        
            <div className="apply-section__right">
                <header>
                    <img/>
                    <div>
                        <div>Power By:</div>
                        <div>{data.scholarship.company.name}</div>
                    </div>
                </header>
        
                <div>
                    <div>
                        <h2>Application close in</h2>
                        <p><ApplicationCloseInCalculation appEndDate={data.scholarship.application_end_date}/></p>
                    </div>
        
                    <div>
                        <div>
                            <BottomBarElement title='Location' content={data.scholarship.location.name}/>
                        </div>
                        <div>
                            <BottomBarElement title='Duration' content={data.scholarship.duration + " full year"}/>
                        </div>
                        <div>
                            <BottomBarElement title='Start date' content={data.scholarship.scholarship_start_date}/>
                        </div>
                        <div>
                            <BottomBarElement title='Application deadline' content={data.scholarship.application_end_date}/>
                        </div>
                    </div>
                </div>    
            </div>
    </section>
    )
}

export default ApplySection