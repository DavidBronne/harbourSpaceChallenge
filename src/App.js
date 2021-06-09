
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ApprenticeshipTemp from './Components/ApprenticeshipTemp';
import Navbar from './Components/Navbar'

/* possibility to mention path='/:Apprenticeship' and get it as params in ApprenticeshipTemp component */

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="App">
          <Route path='/'>              
            <ApprenticeshipTemp/>   
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
