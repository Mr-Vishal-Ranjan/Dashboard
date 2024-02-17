import NavigationBar from './components/NavigationBar';
import './App.css';
import RightScreen from './components/RightScreen';

function App() {
  return (
    <div className='app'>
      <div >
        <NavigationBar />
      </div>
      <div>
        <RightScreen />
      </div>
    </div>

  );
}

export default App;
