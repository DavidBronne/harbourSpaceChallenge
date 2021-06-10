import {useParams} from 'react-router-dom';
import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'
import BottomBar from './bottomBar/BottomBar'
import DesktopBar from './DesktopBar'
import Faq from './Faq'


const ApprenticeshipTemp = () => {
    
    const {apprenticeshipType} = useParams()
    const {useFetchApi} = useContext(ApprenticeshipContext)
    useFetchApi('https://stage.harbour.space/api/v1/scholarship_pages/' + apprenticeshipType)
    
    const {data, isPending, error} = useContext(ApprenticeshipContext)

  
    return ( 
        <div className="ApprenticeshipTemp">
            <DesktopBar/>
        <h2>ApprenticeshipTemp</h2>

            { error && <div> {error} </div>}
            { isPending && <div>Loading...</div>}

            { data && <div>{data.meta.title}</div>}
            <Faq/>
            <BottomBar/>
         </div>
     );
    
}

export default ApprenticeshipTemp