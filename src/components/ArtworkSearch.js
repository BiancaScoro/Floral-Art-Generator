import React, {useState} from 'react'
import ArtCard from './ArtCard';
import './ArtworkSearch.css';

const ArtSearch = () => {
  const [artwork, setArtwork] = useState([]);

  const searchArt = async (e) => {
    e.preventDefault();
    const url = `https://api.harvardartmuseums.org/object?q=flower&apikey=41cf33a5-529b-4181-b7bc-26c6ec8c203f`

    try {
        let res = await fetch (url)
        const data = await res.json();
        setArtwork(data.records || []);
    } catch (err) {
        console.error(err)
    }
}  

const getRandomArtwork = () => {
  if (!artwork || artwork.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * artwork.length);
  return artwork[randomIndex];
};
  
  return (
    <div>
        <button className="artwork-btn" onClick={searchArt}>Search For Art</button>
        <div className="card-art">
        {getRandomArtwork() && <ArtCard art={getRandomArtwork()} key={getRandomArtwork().id} />}
        </div>
    </div>
  )
}

export default ArtSearch