import Navbar from './Navbar'
import {useParams} from 'react-router-dom';
import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'


const ApprenticeshipTemp = () => {
    
    const {apprenticeshipType} = useParams()
    const {useFetchApi} = useContext(ApprenticeshipContext)
    useFetchApi('https://stage.harbour.space/api/v1/scholarship_pages/' + apprenticeshipType)
    
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    
    
    
    return ( 
        <div className="ApprenticeshipTemp">
            <h2>Apprenticeship:</h2>
            { error && <div> {error} </div>}
            { isPending && <div>Loading...</div>}

            { data && <div>{data.meta.title}</div>}
            
            <Navbar/>
         </div>
     );
    
}

export default ApprenticeshipTemp