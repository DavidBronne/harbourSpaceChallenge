import {useState, useContext} from 'react';
import {ApprenticeshipContext} from '../../contexts/ApprenticeshipContext'

const FaqAnswer = ({selection}) => {
    console.log(`selection`, selection)
    const {data, isPending, error} = useContext(ApprenticeshipContext)

    const {toggleDetailButton} = useContext(ApprenticeshipContext)
    const {isDetailed} = useContext(ApprenticeshipContext)
    const {questionId} = useContext(ApprenticeshipContext)
    const status = isDetailed ? "opened" : "closed"
   console.log('status :>> ', status);
   console.log(`isDetailed`, isDetailed)
   console.log(`questionId`, questionId)
   
    return <div>
        
        { data && data.scholarship.faqs.items
            .filter( item => {
                return item.type === selection
            })
            .map( (question, questionIndex) => {
                return ( 
                    <div className="format-row-item border-top" key={questionIndex}>
                        <h2 className="format-1third-section">{selection}</h2>
                        <div className="format-2third-section" >
                            <div className="format-align-center-item format-space-between-item">
                                <div >{question.question}</div>
                                <div onClick={()=>toggleDetailButton(questionIndex)} className={"circle-plus " + (questionId === questionIndex ? status : "closed")}>  
                                    <div className="circle">
                                        <div className="horizontal"></div>
                                        <div className="vertical"></div>
                                    </div>     
                                </div>

                            </div>
                            
                            { (isDetailed && questionId === questionIndex) ? (
                                    <div>
                                        {question.answer.map( (paragraph,i) => {
                                            return <p className="answer text-small" key={i}>{paragraph.data}</p>
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