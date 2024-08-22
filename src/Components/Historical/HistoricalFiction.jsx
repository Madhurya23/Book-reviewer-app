import React from 'react';
import './HistoricalFiction.css';

const books = [
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    cover: '/peace.jpeg',
    teaser: 'A monumental novel set against the backdrop of the Napoleonic Wars, War and Peace explores the lives of five aristocratic families in Russia. With its complex characters and sweeping narrative, the novel delves into the themes of fate, free will, love, and the brutal realities of war.',
    rating: '4.9/5',
    downloadLink: 'https://antilogicalism.com/wp-content/uploads/2017/07/war-and-peace.pdf'
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    cover: '/2cities.webp',
    teaser: 'Set during the turbulent times of the French Revolution, A Tale of Two Cities contrasts the cities of Paris and London. The novel follows the lives of Charles Darnay and Sydney Carton, whose love for the same woman and their different paths intersect in a story of sacrifice, redemption, and the human spirit.',
    rating: '4.8/5',
    downloadLink: 'https://www.gutenberg.org/files/98/old/2city12p.pdf'
  },
  {
    title: 'The Pillars of the Earth',
    author: 'Ken Follett',
    cover: '/poe.jpg',
    teaser: 'A historical epic that centers around the building of a cathedral in the fictional town of Kingsbridge, England, during the 12th century. The novel weaves together the lives of various characters, exploring themes of power, love, betrayal, and faith, set against the backdrop of political intrigue and social upheaval.',
    rating: '4.7/5',
    downloadLink: 'https://chools.in/wp-content/uploads/2021/03/TOWERING-TRIUMPH-FROM-A-MAJOR.pdf'
  },
  {
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
    cover: '/sun.jpg',
    teaser: 'Set against the backdrop of a volatile Afghanistan, A Thousand Splendid Suns tells the harrowing and heart-wrenching story of Mariam and Laila. Through their struggles and resilience, the novel paints a vivid portrait of survival, the bonds between women, and the enduring human spirit in the face of oppressive circumstances.',
    rating: '4.9/5',
    downloadLink: 'https://mrsmeganparrish.weebly.com/uploads/3/8/0/5/38056115/a_thousand_splendid_sun.pdf'
  },
  {
    title: 'The Book Thief',
    author: 'Markus Zusak',
    cover: '/bookth.jpg',
    teaser: 'Narrated by Death itself, The Book Thief is set in Nazi Germany and tells the story of Liesel Meminger, a young girl who finds solace in stealing books and sharing them with others. The novel explores the power of words and the human spirit in the face of unimaginable horrors during World War II.',
    rating: '4.8/5',
    downloadLink: 'https://cdnsm5-ss3.sharpschool.com/UserFiles/Servers/Server_4204286/Image/Grade9GT--TheBookThiefMarkusZusak.pdf'
  },
];

const HistoricalFiction = () => {
  return (
    <div className="historical-fiction-page">
      <h1 className='hf'>HISTORICAL FICTION --- Top Five Books</h1>
      
      <ul className="hf-book-list">
        {books.map((book, index) => (
          <li key={index} className="hf-book-item">
            <img src={book.cover} alt={book.title} className="hf-book-cover"/>
            <div className="hf-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='hf-teaser'><span className="hf-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="hf-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricalFiction;
