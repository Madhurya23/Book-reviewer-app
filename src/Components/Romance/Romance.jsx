import React from 'react';
import './Romance.css';



const books = [
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: '/f1.jpg',
    teaser: 'A classic romance that follows Elizabeth Bennet, a sharp-witted young woman, as she navigates love, family, and societal expectations. When she meets the proud Mr. Darcy, misunderstandings and first impressions lead to tension, but as they get to know each other, they begin to realize their true feelings, challenging their own prejudices and the norms of their society.',
    rating: '4.6/5',
    downloadLink: 'https://www.gutenberg.org/files/1342/old/pandp12p.pdf'
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    cover: '/f2.jpg',
    teaser: ' A timeless novel that follows the life of an orphaned girl, Jane, who overcomes a harsh childhood to become a governess at Thornfield Hall. There, she encounters the enigmatic Mr. Rochester and finds herself drawn into a complex and mysterious relationship. A tale of resilience, love, and self-discovery, Jane Eyre explores themes of social class, morality, and the search for one\'s place in the world.',
    rating: '4.4/5',
    downloadLink: 'https://www.ucm.es/data/cont/docs/119-2014-04-09-Jane%20Eyre.pdf'
  },
  {
    title: 'The Notebook',
    author: 'Nicholas Sparks',
    cover: '/f3.jpg',
    teaser: 'The Notebook centers on the heartfelt romance between Noah Calhoun and Allie Nelson. Set in the 1940s, the novel explores their passionate and enduring love despite the challenges posed by societal expectations and personal hardships. As their story unfolds, the novel delves into themes of true devotion, memory, and the timeless nature of love. With its emotional depth and compelling characters, The Notebook captures the essence of an unforgettable romance.',
    rating: '4.5/5',
    downloadLink: 'https://parmakhtag.com/wp-content/uploads/2021/09/Click-here-to-download.pdf'
  },
  {
    title: 'Me Before You',
    author: 'Jojo Moyes',
    cover: '/f4.jpg',
    teaser: 'Me Before You tells the story of Louisa Clark, a cheerful caregiver, and Will Traynor, a man who has become wheelchair-bound. Their unexpected relationship leads to profound changes in both of their lives, exploring themes of love, personal growth, and the impact of connection. Through their journey together, the novel poignantly examines how relationships can transform lives and challenge perspectives',
    rating: '4.7/5',
    downloadLink: 'https://icrrd.com/public/media/14-05-2021-091024Me-Before-You.pdf'
  },
  {
    title: 'The Time Traveller\'s Wife',
    author: 'Audrey Niffenegger',
    cover: '/f5.jpg',
    teaser: 'The Time Traveler\'s Wife is a captivating love story about Henry DeTamble, who involuntarily travels through time, and his wife Clare Abshire. The novel explores their unique relationship as they navigate the challenges posed by time travel and the enduring strength of their love.',
    rating: '4.2/5',
    downloadLink: 'https://avalonlibrary.net/ebooks/Audrey%20Niffenegger%20-%20The%20Time%20Traveler\'s%20Wife.pdf'

  },
];

const Romance = () => {
  return (
    <div className="romance-page">
      <h1 className='ro'>ROMANCE --- Top Five Books</h1>
      
      <ul className="ro-book-list">
        {books.map((book, index) => (
          <li key={index} className="ro-book-item">
            <img src={book.cover} alt={book.title} className="ro-book-cover"/>
            <div className="ro-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='ro-teaser'><span className="ro-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="ro-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Romance;
