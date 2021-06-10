import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

const Faq = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    console.log(data.scholarship.faqs.categories);
    
    return (
        <div>
            <h2>Faq</h2>
        </div>
    )
}

export default Faq