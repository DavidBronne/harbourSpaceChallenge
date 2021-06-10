import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

const Faq = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    
    return (
        <section>
            <header>
                <h1>Faqs</h1>
                    <label htmlFor="categories"> filter by:</label>
                    <select name="categories" id="categories">
                    {data && 
                            data.scholarship.faqs.categories.map( (category,i) => {
                                return <option value={category} key={i}>{category}</option>
                            })
                    } 
                    </select>
            </header>
        </section> 
    )
    
}

export default Faq