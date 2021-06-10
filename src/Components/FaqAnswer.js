import {useState, useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

const FaqAnswer = ({selection}) => {
    console.log(`selection`, selection)
    const {data, isPending, error} = useContext(ApprenticeshipContext)
/*     if (data) {
        const filteredFaqs = data.scholarship.faqs.items.filter( item => {
            return item.type === selection
        })
        console.log(`filteredFaqs`, filteredFaqs)
        const elemementToDisplay = filteredFaqs.map( el => {
            console.log(`el.question`, el.question)
            return <div>{el.question}</div>
        })
    } */
    return <div>
        <h2>{selection}</h2>
        { data && data.scholarship.faqs.items
                    .filter( item => {
                        return item.type === selection
                    })
                    .map( (el, i) => {
                        return <div key={i}>
                                    <h2>{el.question}</h2>
                                    {el.answer.map( an => {
                                        return <p>{an.data}</p>
                                    })}
                            </div>
                    })
        }
    </div>
}

export default FaqAnswer