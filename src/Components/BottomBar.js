import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

const BottomBar = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    
    return (    
        <div className="BottomBar">
            <h2>BottomBar:</h2>
            { data && <div>{data.meta.title}</div>}
        </div>
    )
}

export default BottomBar