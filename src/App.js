import './App.css';
import Navbar from './components/Navbar';
import Postlist from './components/Postlist';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Postlist />
    </div>
  );
}

export default App;
