import './App.css';
import Navigation from './Navigation/Navigation';
import Screens from './Screens/Screens';
import MainContextProvider from '../store/MainContextProvider';

function App() {
  return (
    <MainContextProvider>
      <main>
        <Navigation />
        <Screens />
      </main>
    </MainContextProvider>
  );
}

export default App;
