import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Task from './components/Task';

function App() {
  return (
    <div className='tasks-app'>
      <div className='freecodecamp-logo-container'>
          <img alt='Logo FreeCodeCamp'  src={freeCodeCampLogo}
               className='freecodecamp-logo' />
      </div>
        <div className='tasks-principal-list'>
            <h1>My tasks</h1>
            <Task text='Learn React'/>
        </div>
    </div>
  );
}

export default App;
