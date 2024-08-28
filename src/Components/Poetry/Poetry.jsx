import React from 'react';
import './Poetry.css';

const books = [
  {
    title: 'Complete Poems of Emily Dickinson',
    author: 'Emily Dickinson',
    cover: '/emily.jpg',
    teaser: 'This collection encompasses the entire body of poetry by one of America’s most cherished poets, Emily Dickinson. Known for her innovative use of form and syntax, Dickinson’s poems explore themes of nature, death, love, and immortality.',
    rating: '4.7/5',
    downloadLink: 'https://uerjundergradslit.wordpress.com/wp-content/uploads/2019/03/the-complete-poems-of-emily-dickinson.pdf'
  },
  {
    title: 'Leaves of Grass',
    author: 'Walt Whitman',
    cover: '/leaves.jpg',
    teaser: 'A seminal work in American literature, Leaves of Grass is Walt Whitman’s magnum opus. The collection is celebrated for its exuberant and groundbreaking verse, which explores themes of democracy, individuality, and the human spirit.',
    rating: '4.8/5',
    downloadLink: 'https://edisciplinas.usp.br/pluginfile.php/3985648/mod_resource/content/1/LEAVES%20OF%20GRASS.pdf'
  },
  {
    title: 'The Waste Land',
    author: 'T.S. Eliot',
    cover: '/waste.jpg',
    teaser: 'The Waste Land is one of the most important poems of the 20th century, known for its complex structure and rich symbolism. Eliot’s modernist masterpiece examines themes of disillusionment, despair, and the search for redemption in a fragmented world.',
    rating: '4.6/5',
    downloadLink: 'https://archive.org/download/wasteland01elio/wasteland01elio.pdf'
  },
  {
    title: 'Shakespeare\'s Sonnets',
    author: 'William Shakespeare',
    cover: '/sonnet.jpg',
    teaser: 'Shakespeare’s Sonnets are a collection of 154 poems that delve into themes of love, beauty, politics, and mortality. These sonnets are some of the most well-known and frequently quoted poems in the English language.',
    rating: '4.9/5',
    downloadLink: 'http://files.libertyfund.org/files/118/0613_Bk.pdf'
  },
  {
    title: 'Citizen: An American Lyric',
    author: 'Claudia Rankine',
    cover: '/cit.jpg',
    teaser: 'Citizen: An American Lyric is a powerful, genre-defying work that combines poetry, essay, and visual art to confront the realities of racism and the complexities of identity in contemporary America. Rankine’s work is a raw, unflinching examination of the personal and collective experiences of marginalization and the resilience of the human spirit.',
    rating: '4.8/5',
    downloadLink: 'https://jm919846758.files.wordpress.com/2023/01/caal.pdf'
  },
];

const Poetry = () => {
  return (
    <div className="poetry-page">
      <h1 className='p'>POETRY: Top 5 Verse Treasures</h1>
      
      <ul className="p-book-list">
        {books.map((book, index) => (
          <li key={index} className="p-book-item">
            <img src={book.cover} alt={book.title} className="p-book-cover"/>
            <div className="p-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='p-teaser'><span className="p-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="p-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poetry;
