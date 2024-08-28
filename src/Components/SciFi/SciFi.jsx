import React from 'react';
import './SciFi.css';

const books = [
  {
    title: 'Dune',
    author: 'Frank Herbert',
    cover: '/s1.jpg',
    teaser: 'Set in a distant future amidst a huge interstellar empire, Dune tells the story of young Paul Atreides, whose family accepts control of the desert planet Arrakis. As the only source of the most valuable substance in the universe, Arrakis is a coveted and dangerous place. The novel explores themes of politics, religion, and survival.',
    rating: '4.6/5',
    downloadLink: 'https://archive.org/download/dune-by-frank-herbert/Dune%20by%20Frank%20Herbert.pdf'
  },
  {
    title: '1984',
    author: 'George Orwell',
    cover: '/s2.jpg',
    teaser: '1984 is a dystopian novel by George Orwell that introduces the concept of Big Brother, a totalitarian regime that controls every aspect of life. The story follows Winston Smith, a man who begins to question the party\'s oppressive rule and seeks truth and freedom in a world where both are forbidden.',
    rating: '4.7/5',
    downloadLink: 'https://www.planetebook.com/free-ebooks/1984.pdf'
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    cover: '/s3.jpg',
    teaser: 'A comedic science fiction series that begins with the destruction of Earth to make way for a galactic freeway. Arthur Dent, the last human, is taken on a wild journey through space, guided by an alien named Ford Prefect and a book called "The Hitchhiker\'s Guide to the Galaxy". The novel is a humorous exploration of space, life, and the absurdity of the universe.',
    rating: '4.3/5',
    downloadLink: 'https://www.deyeshigh.co.uk/downloads/literacy/world_book_day/the_hitchhiker_s_guide_to_the_galaxy.pdf'
  },
  {
    title: 'Ready Player One',
    author: 'Ernest Cline',
    cover: '/s4.jpg',
    teaser: 'Ready Player One is set in a dystopian future where most of humanity escapes reality by living in a virtual world called the OASIS. The story follows Wade Watts, a teenager who embarks on a quest to find a hidden Easter egg left by the OASIS\'s creator, which will grant the finder his vast fortune and control of the virtual world.',
    rating: '4.5/5',
    downloadLink: 'https://asmsummerreading.weebly.com/uploads/1/2/5/7/125763472/ready-player-one.pdf'
  },
  {
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    cover: '/s5.jpg',
    teaser: 'Set in a dystopian future where a totalitarian regime enforces rigid social control, The Handmaid\'s Tale is the story of Offred, a woman forced into servitude as a "handmaid" to bear children for the ruling class. The novel explores themes of gender, power, and the loss of identity in a world where women are property.',
    rating: '4.4/5',
    downloadLink: 'https://ieas-szeged.hu/downtherabbithole/wp-content/uploads/2020/02/Margaret-Atwood_-The-Handmaids-Tale-1.pdf'
  },
];

const SciFi = () => {
  return (
    <div className="scifi-page">
      <h1 className='sf'>SCIENCE FICTION: Top 5 Futuristic Adventures</h1>
      
      <ul className="sf-book-list">
        {books.map((book, index) => (
          <li key={index} className="sf-book-item">
            <img src={book.cover} alt={book.title} className="sf-book-cover"/>
            <div className="sf-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='sf-teaser'><span className="sf-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="sf-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SciFi;
