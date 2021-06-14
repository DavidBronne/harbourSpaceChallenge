import {useState, useContext} from 'react';
import {ApprenticeshipContext} from '../../contexts/ApprenticeshipContext'

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
    const {toggleDetailButton} = useContext(ApprenticeshipContext)
   

    
    const {isDetailed} = useContext(ApprenticeshipContext)
    console.log('isDetailed :>> ', isDetailed);
    return <div>
        
        { data && data.scholarship.faqs.items
                    .filter( item => {
                        return item.type === selection
                    })
                    .map( (el, i) => {
                        return (

                                
                                <div className="format-row-item border-top" key={i}>
                                    <h2 className="format-1third-section">{selection}</h2>
                                    <div className="format-2third-section" >
                                        <div>
                                            <div >{el.question}</div>
                                            <div onClick={toggleDetailButton} >button</div>
                                        </div>
                                        
                                       { isDetailed  ? (
                                                <div>
                                                    {el.answer.map( (an,i) => {
                                                        return <p className="answer text-small" key={i}>{an.data}</p>
                                                    })}
                                                </div>
                                            ) : <div></div>}
                                        
                                    </div>
                                </div>
                            
                    )
                    })
        }
    </div>
}

export default FaqAnswer