import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

const Navbar = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    
    return (    
        <div className="Navbar">
            <h2>Navbar:</h2>
            { data && <div>{data.meta.title}</div>}
        </div>
    )
}

export default Navbar