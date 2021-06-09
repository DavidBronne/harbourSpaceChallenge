import {useParams} from 'react-router-dom';
import useFetchApi from '../apiCalls/useFetchApi'

const ApprenticeshipTemp = () => {
    const {apprenticeshipType} = useParams()
    const {data, isPending, error} =  useFetchApi('https://stage.harbour.space/api/v1/scholarship_pages/' + apprenticeshipType)
    console.log(`data`, data)
    
    return ( 
        <div className="ApprenticeshipTemp">
            { error && <div> {error} </div>}
            { isPending && <div>Loading...</div>}
            { data && <div>{data.meta.title}</div>}
         </div>
     );
    
}

export default ApprenticeshipTemp