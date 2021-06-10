import {useState, useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'
import FaqAnswer from './FaqAnswer'

const Faq = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    const [selection, setSelection] = useState("Programme conditions")  // to be programmable, not hrad coded

    const handlechange = (e) => {
        console.log(`e`, e.target.value)
        setSelection(e.target.value)
    }
    console.log(`selection`, selection)


    
    return (
        <section>
            <header>
                <h1>Faqs</h1>
                    <label htmlFor="categories"> filter by:</label>
                    <select placeholder={selection} onChange={(e) => handlechange (e)} name="categories" id="categories"> 
                    {data && 
                            data.scholarship.faqs.categories.map( (category,i) => {
                                return <option value={category} key={i}>{category}</option>
                            })
                    } 
                    </select>
            </header>
            <div>
                <FaqAnswer selection={selection}/>
            </div>
        </section> 
    )
    
}

export default Faq