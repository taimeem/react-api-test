import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import LeftPanel from './components/Header/LeftPanel/LeftPanel';
import RightPanel from './components/Header/RightPanel/RightPanel';
function App() {
  return (
    <div className="App">
        <Header/>
        <div className="main">
          <LeftPanel/>
          <RightPanel/>
        </div>
    </div>
  );
}

export default App;
