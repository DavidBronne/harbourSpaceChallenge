import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

{/* hard-coded bellow: <h2>A full-time contract</h2>
<p>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p> */}

const AboutSection = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    return (
        <section >
        <header className="format-section">
            <div className="background-student format-half-section">
                <img src="/img/edit2 1.png" alt="student"/>
            </div>
            <div className="format-half-section">
                <h1>About the Apprenticeship</h1>
                <p>{data.scholarship.about[0].data}</p>
            </div>
        </header>
        <div className="format-section">   
            <div className="format-1third-section format-item-box">
                <div>
                    <h2>Scholarship value</h2>
                    <p>{data.scholarship.total_value}</p>
                </div>
            
                <hr className="format-90pc-item"></hr>

                <div className="format-row-item format-wrap-item">
                    <div className="format-50pc-item">
                        <h2>Tutition covered</h2>
                        <p>{data.scholarship.tuition}</p>
                    </div>
                    <div className="format-50pc-item">
                        <h2>Remaining</h2>
                        <p>{data.scholarship.remaining}</p>
                    </div>
                    <div  className="format-100pc-item">
                        <h2>Living stipend</h2>
                        <p>{data.scholarship.stipend_per_year}</p>
                        <p>{data.scholarship.stipend_per_month + "/month"}</p>
                    </div>
                </div>
            </div>
            <div className="format-2third-section">
                <div className="format-row-item">
                    <div className="format-item-box">
                        <h2>Study commitment</h2>
                        <h3>{data.scholarship.study_commitment + " hours / day"}</h3>
                        <hr className="format-90pc-item"></hr>
                        <p>{data.scholarship.study_commitment_text}</p>
                    </div>
                    <div className="format-item-box">
                        <h2>Work commitment</h2>
                        <h3>{data.scholarship.internship_commitment + " hours / day"}</h3>
                        <hr className="format-90pc-item"></hr>
                        <p>{data.scholarship.internship_commitment_text}</p>
                    </div>
                </div>

                <div className="separator">Graduation</div>
                <div className="format-item-box">
                    <h2>A full-time contract</h2>
                    <h3>{data.scholarship.study_commitment_text + " Full-Time"}</h3>
                    <hr></hr>
                    <p>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p>
                </div>
            </div>
        </div>
    </section> 
    )
}

export default AboutSection