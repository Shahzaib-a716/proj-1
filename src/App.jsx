// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing'; // Your main page component
import Home from './Components/Home'; // Your next page component
import FreeRegistration1 from './Components/FreeRegistration1';
import Flag1 from './Components/Flag1';
import LookAround from './Components/LookAround.jsx';
import Registration2 from './Components/Registration2'; // Import Registration component
import RegistrationForm31 from './Components/RegistrationForm31';
import EmailNotRecognized from './Components/EmailNotRecognized';
import SavedEmail from './Components/SavedEmail';



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Main page */}
        <Route path="/home" element={<Home />} /> {/* Navigating to Home component */}
        <Route path="/FreeRegistration1" element={<FreeRegistration1 />} />
        <Route path="/Flag1" element={<Flag1 />}/>
        <Route path="/LookAround" element={<LookAround />}/> {/* Add FreeRegistration route */}
        <Route path="/Registration2" element={<Registration2 />} /> {/* Add Registration route */}
        <Route path="/RegistrationForm31" element={<RegistrationForm31 />} /> 
          {/* Email Not Recognized page */}
          <Route path="/EmailNotRecognized" element={<EmailNotRecognized />} />
          <Route path="/SavedEmail" element={<SavedEmail />} />
   </Routes>
    </Router> 
     );
}

export default App;//
