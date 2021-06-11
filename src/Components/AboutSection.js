import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

{/* hard-coded bellow: <h2>A full-time contract</h2>
<p>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p> */}

const AboutSection = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    return (
        <section>
        <header className="format-section">
            <div className="format-half-section background-rounded" style={{ backgroundImage: "url(/img/PatternStudent.png)" }}>
                <img className="rounded-img" src="/img/edit2 1.png" alt="student"/>
            </div>
            <div className="format-half-section">
                <h1>About the Apprenticeship</h1>
                <p>{data.scholarship.about[0].data}</p>
            </div>
        </header>
        <div className="format-section">   
            <div className="format-1third-section format-item-box format-wrap-item">
                <div>
                    <h2>Scholarship value</h2>
                    <p className="emphase">€{data.scholarship.total_value.toLocaleString()}</p>
                </div>
            
                <div className="format-row-item format-wrap-item border-top format-1third-height">
                    <div className="format-50pc-item">
                        <h2>Tutition covered</h2>
                        <p className="text-small">€{data.scholarship.tuition.toLocaleString()}</p>
                    </div>
                    <div className="format-50pc-item">
                        <h2>Remaining</h2>
                        <p className="text-small">€{data.scholarship.remaining.toLocaleString()}</p>
                    </div>
                    <div  className="format-100pc-item">
                        <h2>Living stipend</h2>
                        <p className="text-small">€{data.scholarship.stipend_per_year.toLocaleString()} <small>{"(€" + data.scholarship.stipend_per_month.toLocaleString() + "/month)"}</small></p>
                        
                    </div>
                </div>
            </div>
            <div className="format-2third-section format-1third-height">
                <div className="format-row-item">
                    <div className="format-item-box">
                        <div className="inner-box">
                            <h2>Study commitment</h2>
                            <h3>{data.scholarship.study_commitment + " hours / day"}</h3>
                        </div>
                        <p className="border-top text-small">{data.scholarship.study_commitment_text}</p>
                    </div>
                    <div className="format-item-box">
                        <div className="inner-box">
                            <h2>Work commitment</h2>
                            <h3>{data.scholarship.internship_commitment + " hours / day"}</h3>
                        </div>
                        <p className="border-top text-small">{data.scholarship.internship_commitment_text}</p>
                    </div>
                </div>
                <div className="separator">Graduation</div>
                <div className="format-item-box">
                    <div className="inner-box">
                        <h2>A full-time contract</h2>
                        <p className="text-small">{data.scholarship.study_commitment_text + " Full-Time"}</p>
                    </div>

                    <p className="border-top text-small">You’ll be guaranteed a 1 year contract with SCG upon graduation. </p>
                </div>
            </div>
        </div>
    </section> 
    )
}

export default AboutSection