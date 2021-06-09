
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ApprenticeshipTemp from './Components/ApprenticeshipTemp';
import Navbar from './Components/Navbar'

/* End point to be used : /data-science-apprenticeship-zeptolab. 
  Get it as params in ApprenticeshipTemp component */

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="App">
          <Route path='/:apprenticeshipType'>              
            <ApprenticeshipTemp/>   
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
