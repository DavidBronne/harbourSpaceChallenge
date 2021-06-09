import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

const DesktopBar = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    
    return (    
        <div className="DesktopBar">
            <h2>DesktopBar:</h2>
            { data && <div>{data.meta.title}</div>}
        </div>
    )
}

export default DesktopBar