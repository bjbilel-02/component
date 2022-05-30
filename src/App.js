import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Address from './components/Profile/Address';
import FullName from './components/Profile/FullName';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import Inscription from './Inscription';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ProfilePhoto />
      <FullName />
      <Address />
      <Inscription/> 
    </div>
  );
}

export default App;
