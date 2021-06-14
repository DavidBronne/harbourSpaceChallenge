import {createContext,useState, useEffect} from 'react'

export const ApprenticeshipContext = createContext()

const ApprenticeshipContextProvider = (props) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [isDetailed, setIsDetailed] = useState(false);
    
    // fetch Api here and set state
    const useFetchApi = (apiUrl) => {
        useEffect(()=> {
            const abortCont = new AbortController();
           fetch(apiUrl, {signal : abortCont.signal})
            .then(res =>{
                if (!res.ok) {
                    throw Error ('Connected to server but response failed')
                }
                return res.json()
            })
            .then(data => {  
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message)
                    setIsPending(false)  
                }  
            })
            return () => abortCont.abort(); 
        }, [apiUrl])
    }

    const toggleDetailButton = () => {
          
        setIsDetailed(!isDetailed)
            console.log('isDetailed :>> ', isDetailed);
       
    } 
    
    return (
        <ApprenticeshipContext.Provider value={{data, isPending, error, useFetchApi,toggleDetailButton, isDetailed}}>
            {props.children}
        </ApprenticeshipContext.Provider>
    );
}
 
export default ApprenticeshipContextProvider;