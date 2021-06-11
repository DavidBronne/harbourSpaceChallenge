import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

{/* hard-coded bellow: <h2>A full-time contract</h2>
<p>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p> */}

const AboutSection = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    return (
        <section>
        <header>
            <div className="background-student">
                <img src="/img/edit2 1.png" alt="student"/>
            </div>
            <div>
                <h1>About the Apprenticeship</h1>
                <p>{data.scholarship.about[0].data}</p>
            </div>
        </header>
        <div>
            <div>
                <h2>Scholarship value</h2>
                <p>{data.scholarship.total_value}</p>
            </div>
           
            <hr></hr>

            <div>
                <div>
                    <h2>Tutition covered</h2>
                    <p>{data.scholarship.tuition}</p>
                </div>
                <div>
                    <h2>Remaining</h2>
                    <p>{data.scholarship.remaining}</p>
                </div>
                <div>
                    <h2>Living stipend</h2>
                    <p>{data.scholarship.stipend_per_year}</p>
                    <p>{data.scholarship.stipend_per_month + "/month"}</p>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <h2>Study commitment</h2>
                    <h3>{data.scholarship.study_commitment + " hours / day"}</h3>
                    <hr></hr>
                    <p>{data.scholarship.study_commitment_text}</p>
                </div>
                <div>
                    <h2>Work commitment</h2>
                    <h3>{data.scholarship.internship_commitment + " hours / day"}</h3>
                    <hr></hr>
                    <p>{data.scholarship.internship_commitment_text}</p>
                </div>
            </div>
            <hr></hr>
            <div className="separator">Graduation</div>
            <div>
                <h2>A full-time contract</h2>
                <h3>{data.scholarship.study_commitment_text + " Full-Time"}</h3>
                <hr></hr>
                <p>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p>
            </div>
        </div>
    </section> 
    )
}

export default AboutSection