import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

const DesktopBar = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    
    return (    
        <nav>
            <ul className="primary-nav">
                <li>Harbour Space <small>{ data && <div>{data.scholarship.name}</div>}</small></li>
                <li className="trigger">Apply now</li>
                <li>Burger Menu</li>
            </ul>
        </nav>
    )
}

export default DesktopBar
