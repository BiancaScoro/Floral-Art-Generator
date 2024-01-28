import './App.css';
import ArtworkSearch from './components/ArtworkSearch';
import flowers from './components/images/flowers.jpg';

function App() {
  return (
    <div>
      <h1 className='title'>Search For Floral Art</h1>
      <div className="tulips-container">
      <img className="tulips" src={flowers} alt="tulips" />
      </div>
      <div className="search-btn">
      <ArtworkSearch />
      </div>
    </div>
  );
}

export default App;
