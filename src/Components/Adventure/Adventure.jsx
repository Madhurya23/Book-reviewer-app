import React from 'react';
import './Adventure.css';

const books = [
  {
    title: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    cover: '/a1.jpg',
    teaser: 'Treasure Island is a classic adventure novel by Robert Louis Stevenson, featuring pirates, hidden treasure, and the unforgettable Long John Silver. The story follows young Jim Hawkins as he embarks on a perilous journey to find the buried treasure of the infamous Captain Flint.',
    rating: '4.6/5',
    downloadLink: 'https://www1.udel.edu/LLL/language/deutsch/handouts/summer_2015/Schatzinsel_E.pdf'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    cover: '/a2.jpg',
    teaser: 'The Hunger Games is a dystopian adventure novel set in a future world where the government forces children to participate in a televised death match. The protagonist, Katniss Everdeen, volunteers to take her sister’s place and becomes a symbol of rebellion against the oppressive regime.',
    rating: '4.7/5',
    downloadLink: 'https://www.deyeshigh.co.uk/downloads/literacy/world_book_day/the_hunger_games_-_trilogy.pdf'
  },
  {
    title: 'Percy Jackson & the Olympians: The Complete Series',
    author: 'Rick Riordan',
    cover: '/a3.jpg',
    teaser: 'Percy Jackson & the Olympians is a beloved series of adventure novels that follow the life of Percy Jackson, a young demigod, as he embarks on epic quests to prevent the forces of the ancient Greek gods from wreaking havoc on the modern world.',
    rating: '4.8/5',
    downloadLink: 'https://freebiebooks.weebly.com/uploads/1/2/0/5/120506090/rick_riordan_-_percy_jackson_the_complete_collection.pdf'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    cover: '/a4.jpg',
    teaser: 'The Da Vinci Code is a mystery thriller that blends adventure with historical intrigue. When a murder at the Louvre reveals a trail of cryptic clues, symbologist Robert Langdon and cryptologist Sophie Neveu must unravel a secret that has been protected for centuries.',
    rating: '4.3/5',
    downloadLink: 'https://archive.org/download/TheDaVinciCode_201308/The%20Da%20Vinci%20Code.pdf'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    cover: '/a5.webp',
    teaser: 'Jurassic Park is a thrilling adventure novel that brings dinosaurs back to life through the wonders of genetic engineering. As the prehistoric creatures escape their enclosures, chaos ensues, and the characters must fight to survive in this high-stakes adventure.',
    rating: '4.5/5',
    downloadLink: 'https://readerslibrary.org/wp-content/uploads/Jurassic-Park.pdf'
  },
];

const Adventure = () => {
  return (
    <div className="adventure-page">
      <h1 className='adv'>ADVENTURE --- Top Five Books</h1>
      
      <ul className="adv-book-list">
        {books.map((book, index) => (
          <li key={index} className="adv-book-item">
            <img src={book.cover} alt={book.title} className="adv-book-cover"/>
            <div className="adv-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='adv-teaser'><span className="adv-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="adv-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adventure;
