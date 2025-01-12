import './App.css';
import Navbar from './components/common/Navbar';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
      <div className='lg:w-full sm:w-[620px]'>
        <Navbar />
      </div>
      <div> 
        <Homepage />
      </div>
  </div>

  );
}

export default App;
