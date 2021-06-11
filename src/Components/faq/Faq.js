import {useState, useContext} from 'react';
import {ApprenticeshipContext} from '../../contexts/ApprenticeshipContext'
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
        <section className="format-header-faq">
            <header className="format-row-item format-wrap-item">
                <h1 className="format-1third-section">Frequently asked questions</h1>
                    <div className="format-align-self-center-item select-wrapper">
                        <label htmlFor="categories" className="format-align-self-center-item"> filter by:</label>
                        <select placeholder={selection} onChange={(e) => handlechange (e)} name="categories" id="categories" className="btn-gray select"> 
                        {data && 
                                data.scholarship.faqs.categories.map( (category,i) => {
                                    return <option value={category} key={i}>{category}</option>
                                })
                        } 
                        </select>
                    </div>
            </header>
            <div>
                <FaqAnswer selection={selection}/>
            </div>
        </section> 
    )
    
}

export default Faq